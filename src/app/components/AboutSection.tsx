import styles from './AboutSection.module.css'

const STATS = [
  { value: '200+', label: 'учасників' },
  { value: '1', label: 'насичений день' },
  { value: '6+', label: 'спікерів' },
]

export default function AboutSection() {
  return (
    <section id="pro-podiyu" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.textCol}>
            <h2 className={`sectionHeading ${styles.heading}`}>Про подію</h2>
            <p className={styles.lead}>
              PROяв — це масштабна одноденна подія для тих, хто хоче рости,
              надихатись і діяти. 200+ учасників, насичена програма від ранку
              до вечора. Один день, який змінить твій погляд на себе і свої
              можливості.
            </p>
          </div>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
