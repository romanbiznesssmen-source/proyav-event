import Image from 'next/image'
import { GALLERY_IMAGES } from '../constants'
import styles from './GallerySection.module.css'

export default function GallerySection() {
  return (
    <section id="galereya" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className="sectionHeading">Галерея</h2>
          <p className="sectionSubheading">
            Атмосфера PROяв івент — емоції, люди та моменти, які надихають.
          </p>
        </div>

        <div className={styles.grid}>
          {GALLERY_IMAGES.map((src, index) => (
            <figure key={src} className={styles.item}>
              <Image
                src={src}
                alt={`PROяв івент — фото ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.image}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
