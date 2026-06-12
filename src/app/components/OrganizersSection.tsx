import Image from 'next/image'
import { ASSETS } from '../constants'
import styles from './OrganizersSection.module.css'

const ORGANIZERS = [
  {
    name: 'Аліса',
    role: 'Експертка зі створення відео, ідейниця та співзасновниця PROяв івенту',
    bio: 'Допомагаю експертам проявлятись через відео і сама активно йду цим шляхом. Чесно і по-справжньому. 4 гранти на розвиток бізнесу. Міс Галицька Краса 2025. А також — мама чемпіона України, яка показала своїм прикладом: проявлятись — це нормально і це дає результати.',
  },
  {
    name: 'Ольга',
    role: 'Підприємиця, авторка освітніх та розважальних проєктів, співзасновниця та ідейниця PROяв івенту',
    bio: 'Починала у 2016 в Енергодарі — потім перевезла всі свої ідеї до Тернополя і почала знову. Гордість Тернопілля 2025 у номінації підприємець року.',
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
            Ми — Аліса та Ольга, і ми створили PROяв івент з любов&apos;ю та від душі.
            І ми дуже хочемо, щоб саме ти став(-ла) частиною цього.
          </p>
        </div>

        <article className={styles.card}>
          <div className={styles.photo}>
            <Image
              src={ASSETS.organizers}
              alt="Аліса і Ольга"
              fill
              sizes="(max-width: 700px) 100vw, 800px"
              className={styles.photoImage}
            />
          </div>

          <div className={styles.content}>
            <h3 className={styles.names}>Аліса і Ольга</h3>

            <div className={styles.profiles}>
              {ORGANIZERS.map((person, index) => (
                <div key={index} className={styles.person}>
                  <p className={styles.personName}>{person.name}</p>
                  <p className={styles.role}>{person.role}</p>
                  <p className={styles.bio}>{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <blockquote className={styles.quote}>
          <p>Для нас PROяв — це не просто подія.</p>
          <p>Це про той момент, коли перестаєш чекати дозволу і починаєш жити так, як хочеш ти.</p>
        </blockquote>
      </div>
    </section>
  )
}
