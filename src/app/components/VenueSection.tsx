import { EVENT, LINKS } from '../constants'
import styles from './VenueSection.module.css'

export default function VenueSection() {
  return (
    <section id="mistsce" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.content}>
          <h2 className="sectionHeading">Місце проведення</h2>
          <p className={`sectionSubheading ${styles.venueName}`}>{EVENT.venueEn}</p>
          <p className={styles.location}>{EVENT.venueFull}</p>
          <p className={styles.desc}>
            Зручний під&apos;їзд, паркінг, все для комфортного дня.
          </p>
          <a href={LINKS.maps} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Відкрити в Google Maps
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10"/>
            </svg>
          </a>
        </div>

        <div className={styles.mapWrap}>
          <iframe
            title="Podolyany Hall на карті"
            src="https://maps.google.com/maps?q=Podolyany+Hall,+Ternopil,+Ukraine&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
