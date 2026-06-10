import Link from 'next/link'
import { LINKS } from '../constants'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.tagline}>
          PRO — це подія нестандартного формату. Тут люди не тільки слухають, а наважуються,
          пробують і роблять. Саме тому ця зустріч може стати стартом для нового голосу,
          нового досвіду і нової версії себе.
        </p>

        <div className={styles.bottom}>
          <span className={styles.brand}>PROяв © 2026</span>
          <div className={styles.contacts}>
            <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <Link href={LINKS.privacy} className={styles.privacy}>Політика конфіденційності</Link>
          <p className={styles.credit}>
            Розроблено з{' '}
            <a href={LINKS.telebots} target="_blank" rel="noopener noreferrer">Telebots</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
