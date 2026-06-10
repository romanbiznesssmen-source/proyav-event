export const EVENT = {
  name: 'PROяв івент',
  date: '26 вересня 2026 року',
  dateShort: '26 вересня 2026',
  time: '09:00 — 21:00',
  venueUa: 'Тернопіль, Подоляни Холл',
  venueEn: 'Podolyany Hall',
  venueFull: 'Подоляни Холл, Тернопіль',
  salesStart: '20 червня 2026',
  priceIncreaseAfter: '50-го квитка',
} as const

export const LINKS = {
  instagram: 'https://www.instagram.com/proyavevent',
  telegram: 'https://t.me/+qDUUN6cZosFmNDgy',
  maps: 'https://maps.app.goo.gl/SqnLvqf8ghRFTggq7',
  email: 'info@proyav.ua',
  privacy: '/privacy',
  telebots: 'https://telebots.site/',
  becomeSpeaker: 'mailto:info@proyav.ua?subject=Стати спікером PROяв івент',
} as const

export const ASSETS = {
  logo: '/images/logo/proyav-logo.png',
  hero: '/images/hero/hero.png',
  social: {
    threads: '/images/social/threads.png',
  },
} as const

export const GALLERY_IMAGES = [
  '/images/gallery/IMG_3595.JPG',
  '/images/gallery/IMG_3596.JPG',
  '/images/gallery/IMG_3597.JPG',
  '/images/gallery/IMG_3598.JPG',
  '/images/gallery/IMG_3599.JPG',
  '/images/gallery/IMG_3600.JPG',
] as const

export const SCHEDULE = [
  { time: '09:00', activity: 'Реєстрація та welcome drinks' },
  { time: '10:00', activity: 'Відкриття. Розіграш та саксофон' },
  { time: '10:30', activity: 'Спікер 1' },
  { time: '11:30', activity: 'Спікер 2' },
  { time: '12:30', activity: 'Обідня перерва' },
  { time: '13:30', activity: 'Спікер 3' },
  { time: '14:30', activity: 'Спікер 4' },
  { time: '15:30', activity: 'Кава-пауза' },
  { time: '16:00', activity: 'Спікер 5' },
  { time: '17:00', activity: 'Спікер 6' },
  { time: '18:00', activity: 'Панельна дискусія / Активність' },
  { time: '19:00', activity: 'Нетворкінг' },
  { time: '21:00', activity: 'Завершення події' },
] as const

export const FAQ_ITEMS = [
  {
    question: 'Де купити квиток?',
    answer: 'На цьому сайті — натисни кнопку «Купити квиток» у будь-якому блоці або обери тариф у розділі «Квитки».',
  },
  {
    question: 'Чи можна передати квиток іншій людині?',
    answer: 'Так, квиток можна передати іншій людині. Напиши нам на email або в Telegram — ми оновимо дані в системі.',
  },
  {
    question: 'Що входить у вартість квитка?',
    answer: 'Залежить від тарифу — дивись блок «Квитки». Кожен рівень має своє наповнення.',
  },
  {
    question: 'Чи буде харчування?',
    answer: 'Під час події будуть кава-паузи та welcome drinks. Обідня перерва запланована у програмі — деталі уточнюються.',
  },
  {
    question: 'Як дістатись до Podolyany Hall?',
    answer: 'Локація: Подоляни Холл, Тернопіль. Зручний під\'їзд і паркінг поруч. Точну адресу та маршрут дивись на карті в блоці «Місце проведення».',
  },
  {
    question: 'Чи буде запис події?',
    answer: 'Інформацію про запис оголосимо ближче до дати події — слідкуй за оновленнями в Instagram.',
  },
  {
    question: 'До кого звертатись з питаннями?',
    answer: `Telegram-група події або email: ${LINKS.email}`,
  },
] as const
