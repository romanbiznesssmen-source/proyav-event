import styles from './AboutSection.module.css'

const FEATURES = [
  {
    title: 'Локації прояву',
    desc: 'Інтервʼю, відео та історії про себе — з підтримкою команди',
  },
  {
    title: 'Велика сцена',
    desc: 'Можливість побувати на великій сцені',
  },
  {
    title: 'Цільовий нетворкінг',
    desc: 'Організований нами цільовий нетворкінг',
  },
  {
    title: 'Спікери та дискусія',
    desc: 'Сцена зі спікерами + панельна дискусія',
  },
  {
    title: 'Ярмарок',
    desc: 'Ярмарок крафтових виробників',
  },
  {
    title: 'Їжа та шоу',
    desc: 'Смачна їжа, кава, шоу-програма та інше',
  },
]

export default function AboutSection() {
  return (
    <section id="pro-podiyu" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.top}>
          <h2 className={`sectionHeading ${styles.heading}`}>Про подію</h2>
          <p className={styles.lead}>
            PROяв — нестандартна подія нового формату: не лише слухати спікерів,
            а й діяти. Велика сцена для тих, хто хоче вийти на новий рівень,
            ярмарок, організований нетворкінг і простори, де можна заявити про себе.
          </p>
        </div>

        <div className={styles.locations}>
          <h3 className={styles.locationsTitle}>Локації прояву</h3>
          <p className={styles.locationsLead}>
            Окремі простори на події, де кожен охочий може записати інтервʼю,
            розповісти про проєкт, бізнес, творчість або власну історію.
          </p>
          <ul className={styles.locationsList}>
            <li>Експерти — показати себе новій аудиторії</li>
            <li>Підприємці — розповісти про свою справу</li>
            <li>Гості — спробувати себе в новому форматі</li>
            <li>Ведучі та оператори допоможуть почуватись комфортно навіть перед камерою вперше</li>
          </ul>
          <p className={styles.locationsClosing}>
            Прояв на події доступний кожному, хто готовий бути учасником — не лише глядачем.
          </p>
        </div>

        <div className={styles.plates}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.plate}>
              <span className={styles.plateTitle}>{f.title}</span>
              <span className={styles.plateDesc}>{f.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
