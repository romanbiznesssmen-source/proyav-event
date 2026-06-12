import { promises as fs } from 'fs'
import path from 'path'
import type { TicketTierId, TicketWave } from './tickets'
import { EMPTY_SALES, type SalesCounts } from './ticket-pricing'

const DATA_DIR = path.join(process.cwd(), 'data')

async function getRedisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim()
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim()
  return url && token ? { url, token } : null
}

async function redisGet<T>(key: string): Promise<T | null> {
  const redis = await getRedisConfig()
  if (!redis) return null

  const response = await fetch(`${redis.url}/get/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${redis.token}` },
    cache: 'no-store',
  })

  if (!response.ok) return null
  const data = (await response.json()) as { result?: string | null }
  if (!data.result) return null

  try {
    return JSON.parse(data.result) as T
  } catch {
    return null
  }
}

async function redisSet(key: string, value: unknown) {
  const redis = await getRedisConfig()
  if (!redis) return false

  const response = await fetch(`${redis.url}/set/${encodeURIComponent(key)}/${encodeURIComponent(JSON.stringify(value))}`, {
    headers: { Authorization: `Bearer ${redis.token}` },
    method: 'POST',
    cache: 'no-store',
  })

  return response.ok
}

async function readJsonFile<T>(filename: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(path.join(DATA_DIR, filename), 'utf8')
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

async function writeJsonFile<T>(filename: string, value: T) {
  await fs.mkdir(DATA_DIR, { recursive: true })
  await fs.writeFile(path.join(DATA_DIR, filename), JSON.stringify(value, null, 2), 'utf8')
}

export type StoredOrder = {
  orderReference: string
  name: string
  email: string
  phone: string
  tierId: TicketTierId
  tierName: string
  wave: TicketWave
  amount: number
  promoCode?: string
  status: 'pending' | 'paid' | 'failed'
  emailSent: boolean
  createdAt: string
  paidAt?: string
}

type OrdersMap = Record<string, StoredOrder>

export async function getSalesCounts(): Promise<SalesCounts> {
  const fromRedis = await redisGet<SalesCounts>('proyav:sales')
  if (fromRedis) return { ...EMPTY_SALES, ...fromRedis }

  const fromFile = await readJsonFile<Partial<SalesCounts>>('ticket-sales.json', {})
  return {
    standard: { ...EMPTY_SALES.standard, ...fromFile.standard },
    golden: { ...EMPTY_SALES.golden, ...fromFile.golden },
    vip: { ...EMPTY_SALES.vip, ...fromFile.vip },
  }
}

export async function incrementSale(tierId: TicketTierId, wave: TicketWave) {
  const sales = await getSalesCounts()
  sales[tierId][wave] = (sales[tierId][wave] ?? 0) + 1

  const savedRedis = await redisSet('proyav:sales', sales)
  if (!savedRedis) {
    await writeJsonFile('ticket-sales.json', sales)
  }

  return sales
}

export async function saveOrder(order: StoredOrder) {
  const orders = await getOrdersMap()
  orders[order.orderReference] = order

  const savedRedis = await redisSet('proyav:orders', orders)
  if (!savedRedis) {
    await writeJsonFile('orders.json', orders)
  }
}

export async function getOrder(orderReference: string) {
  const orders = await getOrdersMap()
  return orders[orderReference] ?? null
}

export async function updateOrder(orderReference: string, patch: Partial<StoredOrder>) {
  const orders = await getOrdersMap()
  const current = orders[orderReference]
  if (!current) return null

  orders[orderReference] = { ...current, ...patch }

  const savedRedis = await redisSet('proyav:orders', orders)
  if (!savedRedis) {
    await writeJsonFile('orders.json', orders)
  }

  return orders[orderReference]
}

async function getOrdersMap(): Promise<OrdersMap> {
  const fromRedis = await redisGet<OrdersMap>('proyav:orders')
  if (fromRedis) return fromRedis
  return readJsonFile<OrdersMap>('orders.json', {})
}
