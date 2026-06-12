import Image from 'next/image'
import { ASSETS, EVENT } from '../constants'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src={ASSETS.heroDesktop}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`${styles.bgImage} ${styles.bgDesktop}`}
        />
        <Image
          src={ASSETS.heroMobile}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`${styles.bgImage} ${styles.bgMobile}`}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.shell}>
        <div className={`sectionInner ${styles.inner}`}>
          <div className={styles.content}>
            <div className={styles.headlineWrap}>
              <h1 className={styles.headline}>
                Подія у Тернополі
                <br />
                нового формату про <span>проявлення</span>
              </h1>
            </div>

            <p className={styles.desc}>
              <span className={styles.descBrand}>PROяв івент</span>
              {' — для тих, хто готовий зростати, надихатись і діяти. '}
              <span className={styles.descHighlight}>200+ учасників</span>
              {', один насичений день для твого появу.'}
            </p>

            <p className={styles.badge}>
              <span className={styles.dateHighlight}>{EVENT.dateShort}</span>
              <span className={styles.badgeDot} aria-hidden="true" />
              Подоляни Холл
              <span className={styles.badgeDot} aria-hidden="true" />
              9–21
            </p>
          </div>

          <a href="#kvitky" className={styles.ctaCard}>
            <span className={styles.ctaText}>Купити квиток</span>
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
