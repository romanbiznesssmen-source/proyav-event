import { LINKS } from '../constants'
import styles from './SpeakersSection.module.css'

const CONFIRMED_SPEAKER = {
  name: 'Спікер скоро оголосимо',
  role: 'Експерт / підприємець',
  bio: 'Перший спікер PROяв івенту буде представлений незабаром. Слідкуй за оновленнями в Instagram.',
}

const EMPTY_SLOTS = 5

export default function SpeakersSection() {
  return (
    <section id="spikery" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className="sectionHeading">Спікери</h2>
          <p className="sectionSubheading">Хто виступатиме на PROяв івент</p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.photo}>
              <span>1</span>
            </div>
            <div className={styles.body}>
              <h3>{CONFIRMED_SPEAKER.name}</h3>
              <p className={styles.role}>{CONFIRMED_SPEAKER.role}</p>
              <p className={styles.bio}>{CONFIRMED_SPEAKER.bio}</p>
            </div>
          </article>

          {Array.from({ length: EMPTY_SLOTS }).map((_, i) => (
            <article key={i} className={`${styles.card} ${styles.empty}`}>
              <div className={styles.photoEmpty}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="16" cy="12" r="5" />
                  <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" />
                </svg>
              </div>
              <div className={styles.body}>
                <h3>Місце вільне</h3>
                <p className={styles.bio}>
                  Хочеш виступити на PROяв івент? Ми відкриті до цікавих історій та експертизи.
                </p>
                <a href={LINKS.becomeSpeaker} className={`btnGhost ${styles.cta}`}>
                  Стати спікером
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
