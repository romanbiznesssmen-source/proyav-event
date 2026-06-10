import { EVENT } from '../constants'
import styles from './TicketsSection.module.css'

const TIERS = [
  {
    name: 'Ранній квиток',
    features: [
      'Доступ до всіх виступів',
      'Welcome drinks',
      'Кава-паузи протягом дня',
    ],
    price: '1 500',
    featured: true,
    note: 'Перші 50 квитків',
  },
  {
    name: 'Стандарт',
    features: [
      'Доступ до всіх виступів',
      'Welcome drinks',
      'Матеріали спікерів',
    ],
    price: '—',
    featured: false,
    note: 'Після 50-го квитка',
  },
  {
    name: 'PRO',
    features: [
      'Усе з тарифу «Стандарт»',
      'Пріоритетне місце в залі',
      'Нетворкінг-зона',
    ],
    price: '—',
    featured: false,
    note: 'Уточнюється',
  },
]

export default function TicketsSection() {
  return (
    <section id="kvitky" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className="sectionHeading">Квитки</h2>
          <p className={`sectionSubheading ${styles.notice}`}>
            Продаж стартує орієнтовно <strong>{EVENT.salesStart}</strong>.
            Після <strong>{EVENT.priceIncreaseAfter}</strong> ціни зростуть — встигни придбати за найнижчою вартістю.
          </p>
        </div>

        <div className={styles.grid}>
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`${styles.card} ${tier.featured ? styles.featured : ''}`}
            >
              {tier.featured && <span className={styles.badge}>Найвигідніше</span>}
              <p className={styles.tierNote}>{tier.note}</p>
              <h3 className={styles.tierName}>{tier.name}</h3>
              <ul className={styles.features}>
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className={styles.price}>
                <span className={styles.currency}>₴</span>
                {tier.price}
              </p>
              <a href="#kvitky" className={styles.buy}>
                Придбати
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 14 L14 2 M6 2 H14 V10"/>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
