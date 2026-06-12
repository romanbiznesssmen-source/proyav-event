import type { TicketTierId, TicketWave } from './tickets'

export const WAVE_LABELS: Record<TicketWave, string> = {
  early: '🐦 Рання хвиля',
  main: '🌿 Основна хвиля',
  last: '🔥 Остання хвиля',
}

const WAVE_ORDER: TicketWave[] = ['early', 'main', 'last']

const PRICE_MATRIX: Record<TicketTierId, Record<TicketWave, number>> = {
  standard: { early: 1690, main: 1990, last: 2290 },
  golden: { early: 3490, main: 3990, last: 4490 },
  vip: { early: 4990, main: 5990, last: 6990 },
}

const CAPACITY_MATRIX: Record<TicketTierId, Record<TicketWave, number>> = {
  standard: { early: 50, main: 140, last: 30 },
  golden: { early: 10, main: 40, last: 10 },
  vip: { early: 3, main: 15, last: 2 },
}

const WAVE_WINDOWS: Record<TicketWave, { start: string; end: string }> = {
  early: { start: '2026-06-01', end: '2026-07-14' },
  main: { start: '2026-07-15', end: '2026-09-11' },
  last: { start: '2026-09-12', end: '2026-09-26' },
}

export type SalesCounts = Record<TicketTierId, Record<TicketWave, number>>

export const EMPTY_SALES: SalesCounts = {
  standard: { early: 0, main: 0, last: 0 },
  golden: { early: 0, main: 0, last: 0 },
  vip: { early: 0, main: 0, last: 0 },
}

function parseDate(value: string) {
  return new Date(`${value}T12:00:00+03:00`)
}

export function getWaveByDate(date = new Date()): TicketWave {
  const time = date.getTime()

  if (time >= parseDate(WAVE_WINDOWS.last.start).getTime()) return 'last'
  if (time >= parseDate(WAVE_WINDOWS.main.start).getTime()) return 'main'
  return 'early'
}

export function getNextWave(wave: TicketWave): TicketWave | null {
  const index = WAVE_ORDER.indexOf(wave)
  return index < WAVE_ORDER.length - 1 ? WAVE_ORDER[index + 1] : null
}

export function getEffectiveWave(
  tierId: TicketTierId,
  sales: SalesCounts,
  date = new Date(),
): TicketWave {
  let wave: TicketWave | null = getWaveByDate(date)

  while (wave) {
    const sold = sales[tierId][wave] ?? 0
    const capacity = CAPACITY_MATRIX[tierId][wave]
    if (sold < capacity) return wave
    wave = getNextWave(wave)
  }

  return 'last'
}

export function getTierPrice(
  tierId: TicketTierId,
  sales: SalesCounts,
  date = new Date(),
) {
  const wave = getEffectiveWave(tierId, sales, date)
  return {
    wave,
    price: PRICE_MATRIX[tierId][wave],
    capacity: CAPACITY_MATRIX[tierId][wave],
    sold: sales[tierId][wave] ?? 0,
    remaining: Math.max(0, CAPACITY_MATRIX[tierId][wave] - (sales[tierId][wave] ?? 0)),
  }
}

export function getAllTierPricing(sales: SalesCounts, date = new Date()) {
  return {
    dateWave: getWaveByDate(date),
    tiers: (Object.keys(PRICE_MATRIX) as TicketTierId[]).map((tierId) => ({
      tierId,
      ...getTierPrice(tierId, sales, date),
    })),
  }
}

export function isTierAvailable(tierId: TicketTierId, sales: SalesCounts, date = new Date()) {
  const { remaining, wave } = getTierPrice(tierId, sales, date)
  const totalSold = Object.values(sales[tierId]).reduce((sum, count) => sum + count, 0)
  const totalCapacity = Object.values(CAPACITY_MATRIX[tierId]).reduce((sum, count) => sum + count, 0)
  return remaining > 0 && totalSold < totalCapacity && wave !== null
}
