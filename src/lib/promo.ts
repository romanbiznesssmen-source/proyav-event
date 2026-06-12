export type PromoCode = {
  code: string
  percent: number
  label?: string
}

function parsePromoCodes(): PromoCode[] {
  const raw = process.env.PROMO_CODES?.trim()
  if (!raw) return []

  try {
    const parsed = JSON.parse(raw) as Record<string, number | { percent: number; label?: string }>
    return Object.entries(parsed).map(([code, value]) => {
      if (typeof value === 'number') {
        return { code: code.toUpperCase(), percent: value }
      }
      return {
        code: code.toUpperCase(),
        percent: value.percent,
        label: value.label,
      }
    })
  } catch {
    return []
  }
}

export function validatePromoCode(input: string): {
  valid: boolean
  percent?: number
  label?: string
  message: string
} {
  const code = input.trim().toUpperCase()
  if (!code) {
    return { valid: false, message: 'Введіть промокод' }
  }

  const promo = parsePromoCodes().find((item) => item.code === code)
  if (!promo) {
    return { valid: false, message: 'Промокод не знайдено' }
  }

  return {
    valid: true,
    percent: promo.percent,
    label: promo.label,
    message: `Знижка ${promo.percent}% застосована`,
  }
}

export function applyDiscount(price: number, percent: number): number {
  const discounted = price * (1 - percent / 100)
  return Math.max(1, Math.round(discounted * 100) / 100)
}
