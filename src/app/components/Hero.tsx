import Image from 'next/image'
import { ASSETS, EVENT } from '../constants'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src={ASSETS.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.shell}>
        <div className={`sectionInner ${styles.inner}`}>
          <div className={styles.content}>
            <h1 className={styles.headline}>
              Масштабна подія нового формату у Тернополі на тему{' '}
              <span>проявленості</span>
            </h1>

            <p className={styles.desc}>
              PROяв івент — для тих, хто готовий рости, надихатись і діяти.{' '}
              200+ учасників, один насичений день, який змінить твій погляд на себе і свої можливості.
            </p>

            <p className={styles.badge}>
              {EVENT.dateShort} · {EVENT.venueEn} · {EVENT.time}
            </p>
          </div>

          <a href="#kvitky" className={styles.ctaCard}>
            <div className={styles.ctaBody}>
              <span className={styles.ctaLabel}>Купити квиток</span>
              <span className={styles.ctaMain}>від 1 500 ₴</span>
              <span className={styles.ctaSub}>
                {EVENT.dateShort} · Podolyany Hall, Тернопіль
              </span>
            </div>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 L14 2 M6 2 H14 V10" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
