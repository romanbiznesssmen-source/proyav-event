'use client'

import { useEffect, useState } from 'react'
import { EVENT } from '../constants'
import { WAVE_LABELS } from '@/lib/ticket-pricing'
import { TICKET_TIERS, type TicketTierId } from '@/lib/tickets'
import OpenCheckoutButton from './checkout/OpenCheckoutButton'
import styles from './TicketsSection.module.css'

type TierPricing = {
  id: TicketTierId
  price: number
  wave: keyof typeof WAVE_LABELS
  remaining: number
  available: boolean
}

function formatPrice(amount: number) {
  return new Intl.NumberFormat('uk-UA').format(amount)
}

export default function TicketsSection() {
  const [pricing, setPricing] = useState<TierPricing[]>([])
  const [dateWave, setDateWave] = useState<keyof typeof WAVE_LABELS>('early')

  useEffect(() => {
    fetch('/api/tickets/pricing')
      .then((response) => response.json())
      .then((data: { tiers: TierPricing[]; dateWave: keyof typeof WAVE_LABELS }) => {
        setPricing(data.tiers)
        setDateWave(data.dateWave)
      })
      .catch(() => {})
  }, [])

  const getPrice = (tierId: TicketTierId) =>
    pricing.find((item) => item.id === tierId)?.price ?? null

  const isAvailable = (tierId: TicketTierId) =>
    pricing.find((item) => item.id === tierId)?.available ?? true

  return (
    <section id="kvitky" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.kicker}>Квитки на PROяв івент</p>
          <h2 className="sectionHeading">Варіанти участі</h2>
          <p className={styles.meta}>
            {EVENT.dateShort} <span className={styles.dot} aria-hidden="true" /> {EVENT.venueFull}
          </p>
          <p className={styles.waveBadge}>{WAVE_LABELS[dateWave]}</p>
        </div>

        <div className={styles.grid}>
          {TICKET_TIERS.map((tier) => {
            const price = getPrice(tier.id)
            const available = isAvailable(tier.id)

            return (
              <article
                key={tier.id}
                className={`${styles.card} ${tier.featured ? styles.featured : ''} ${tier.id === 'golden' ? styles.golden : ''} ${tier.id === 'vip' ? styles.vip : ''}`}
              >
                {tier.featured && <span className={styles.badge}>Популярний</span>}
                <div className={styles.tierHead}>
                  <span className={styles.tierEmoji} aria-hidden="true">{tier.emoji}</span>
                  <h3 className={styles.tierName}>{tier.name}</h3>
                </div>
                <p className={styles.price}>
                  {price ? (
                    <>
                      <span className={styles.priceFrom}>від</span>
                      <span className={styles.priceValue}>{formatPrice(price)}</span>
                      <span className={styles.priceCurrency}>грн</span>
                    </>
                  ) : (
                    <span className={styles.priceLoading}>...</span>
                  )}
                </p>
                <p className={styles.tierNote}>⚠️ {tier.limitNote}</p>
                <ul className={styles.features}>
                  {tier.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={feature.included ? styles.featureIncluded : styles.featureOptional}
                    >
                      {feature.text}
                    </li>
                  ))}
                </ul>
                {tier.tagline && <p className={styles.tagline}>{tier.tagline}</p>}
                <OpenCheckoutButton
                  tierId={tier.id}
                  className={styles.buy}
                  disabled={!available}
                >
                  {available ? 'Оплатити' : 'Немає в наявності'}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 14 L14 2 M6 2 H14 V10"/>
                  </svg>
                </OpenCheckoutButton>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
