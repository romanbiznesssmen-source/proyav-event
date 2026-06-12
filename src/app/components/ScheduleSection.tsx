import { EVENT, SCHEDULE } from '../constants'
import styles from './ScheduleSection.module.css'

export default function ScheduleSection() {
  return (
    <section id="programa" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className="sectionHeading">Програма події</h2>
          <p className={styles.note}>
            {EVENT.dateShort} · {EVENT.venueFull}
          </p>
        </div>

        <div className={styles.timeline}>
          {SCHEDULE.map((item, i) => (
            <div key={`${item.time}-${item.title}-${i}`} className={styles.row}>
              <span className={styles.time}>{item.time}</span>
              <div className={styles.marker}>
                <span className={styles.dot} aria-hidden="true" />
                {i < SCHEDULE.length - 1 && <span className={styles.line} aria-hidden="true" />}
              </div>
              <div className={styles.activity}>
                <p className={styles.activityTitle}>{item.title}</p>
                {'details' in item && item.details && (
                  <p className={styles.activityDetails}>{item.details}</p>
                )}
                {'note' in item && item.note && (
                  <p className={styles.activityNote}>{item.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
