import { SCHEDULE } from '../constants'
import styles from './ScheduleSection.module.css'

export default function ScheduleSection() {
  return (
    <section id="programa" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className="sectionHeading">Програма дня</h2>
          <p className={styles.note}>
            Програму буде оновлено реальними назвами виступів і активностей.
          </p>
        </div>

        <div className={styles.timeline}>
          {SCHEDULE.map((item, i) => (
            <div key={item.time + item.activity} className={styles.row}>
              <span className={styles.time}>{item.time}</span>
              <div className={styles.marker}>
                <span className={styles.dot} aria-hidden="true" />
                {i < SCHEDULE.length - 1 && <span className={styles.line} aria-hidden="true" />}
              </div>
              <p className={styles.activity}>{item.activity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
