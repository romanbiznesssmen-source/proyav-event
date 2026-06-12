'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { LINKS } from '../constants'
import styles from './SpeakersSection.module.css'

const CONFIRMED_SPEAKER = {
  name: 'Спікер скоро оголосимо',
  role: 'Експерт / підприємець',
  bio: 'Перший спікер PROяв івенту буде представлений незабаром. Слідкуй за оновленнями в Instagram.',
}

const EMPTY_SLOTS = 5
const SLIDE_COUNT = 1 + EMPTY_SLOTS

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 3 L13 9 L7 15" />
    </svg>
  )
}

export default function SpeakersSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const cards = Array.from(track.children) as HTMLElement[]
    if (!cards.length) return

    const trackLeft = track.scrollLeft
    let closest = 0
    let minDist = Infinity

    cards.forEach((card, index) => {
      const dist = Math.abs(card.offsetLeft - trackLeft)
      if (dist < minDist) {
        minDist = dist
        closest = index
      }
    })

    setActiveIndex(closest)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    updateActiveIndex()
    track.addEventListener('scroll', updateActiveIndex, { passive: true })
    window.addEventListener('resize', updateActiveIndex)

    return () => {
      track.removeEventListener('scroll', updateActiveIndex)
      window.removeEventListener('resize', updateActiveIndex)
    }
  }, [updateActiveIndex])

  const scrollToIndex = (index: number) => {
    const track = trackRef.current
    if (!track) return

    const card = track.children[index] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    setActiveIndex(index)
  }

  const scrollByDirection = (direction: -1 | 1) => {
    scrollToIndex(Math.max(0, Math.min(SLIDE_COUNT - 1, activeIndex + direction)))
  }

  return (
    <section id="spikery" className={styles.section}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className="sectionHeading">Спікери</h2>
          <p className="sectionSubheading">Хто виступатиме на PROяв івент</p>
        </div>

        <div className={styles.carousel}>
          <div className={styles.trackWrap}>
            <div className={styles.track} ref={trackRef}>
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
                    <div className={styles.ctaWrap}>
                      <a href={LINKS.becomeSpeaker} className={`btnGhost ${styles.cta}`}>
                        <span className={styles.ctaPlus} aria-hidden="true">+</span>
                        Стати спікером
                      </a>
                      <a href={`mailto:${LINKS.email}`} className={styles.ctaEmail}>
                        {LINKS.email}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.nav}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => scrollByDirection(-1)}
              disabled={activeIndex === 0}
              aria-label="Попередній спікер"
            >
              <span className={styles.arrowPrev}>
                <ArrowIcon />
              </span>
            </button>

            <div className={styles.dots} role="tablist" aria-label="Навігація спікерами">
              {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Спікер ${index + 1}`}
                  aria-selected={index === activeIndex}
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.arrow}
              onClick={() => scrollByDirection(1)}
              disabled={activeIndex === SLIDE_COUNT - 1}
              aria-label="Наступний спікер"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
