import { LINKS } from '../constants'
import styles from './PartnersSection.module.css'

export default function PartnersSection() {
  return (
    <section id="partnery" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.card}>
          <h2 className={styles.heading}>Партнери</h2>
          <p className={styles.text}>
            PROяв івент — простір для брендів і проєктів, які розділяють наші цінності.
            Хочеш долучитись як партнер події?
          </p>
          <a href={LINKS.becomePartner} className={styles.cta}>
            <span className={styles.ctaPlus} aria-hidden="true">+</span>
            Стати партнером події
          </a>
          <a href={`mailto:${LINKS.email}`} className={styles.email}>
            {LINKS.email}
          </a>
        </div>
      </div>
    </section>
  )
}
