import styles from './OrganizersSection.module.css'

const ORGANIZERS = [
  {
    name: 'Аліса Нєвєрова',
    role: 'Експерт зі створення відео, ідейниця та співзасновниця PROяв івенту',
    bio: 'Допомагаю експертам проявлятись через відео — і сама активно живу цей шлях. Чесно і по-справжньому. 4 гранти на розвиток бізнесу. Міс Галицька Краса 2025. І головне — мама чемпіона України, яка показала своїм прикладом: проявлятись — це нормально і це дає результати.',
    initial: 'А',
  },
  {
    name: 'Оля Тедєєва',
    role: 'Підприємиця, авторка освітніх та розважальних проєктів, співзасновниця та ідейниця PROяв івенту',
    bio: 'Починала у 2016 в Енергодарі — потім перевезла всі свої ідеї до Тернополя і почала знову. Гордість Тернопілля 2025 у номінації підприємець року.',
    initial: 'О',
  },
]

export default function OrganizersSection() {
  return (
    <section id="organizatorky" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <h2 className={`sectionHeading ${styles.heading}`}>
          Про ідейниць та організаторок
        </h2>

        <div className={styles.intro}>
          <p>Привіт! Ми так раді, що ти тут 🤍</p>
          <p>
            Ми — Аліса та Оля, і ми створили PROяв івент з любов&apos;ю та від душі.
            Цей захід — наша дитина, наша мрія і наш прояв.
            І ми дуже хочемо, щоб саме ти став(-ла) частиною цього.
          </p>
        </div>

        <div className={styles.grid}>
          {ORGANIZERS.map((person) => (
            <article key={person.name} className={styles.card}>
              <div className={styles.photo} aria-hidden="true">
                <span>{person.initial}</span>
              </div>
              <div className={styles.content}>
                <h3>{person.name}</h3>
                <p className={styles.role}>{person.role}</p>
                <p className={styles.bio}>{person.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <blockquote className={styles.quote}>
          <p>Для нас PROяв — це не просто подія.</p>
          <p>Це про той момент, коли перестаєш чекати дозволу і починаєш жити так, як хочеш ти.</p>
        </blockquote>
      </div>
    </section>
  )
}
