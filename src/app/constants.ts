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
  heroDesktop: '/images/hero/hero-desktop.jpg',
  heroMobile: '/images/hero/hero-mobile.jpg',
  organizers: '/images/organizers/alisa-nevierova-olga-tedeieva.jpg',
  social: {
    threads: '/images/social/threads.png',
  },
} as const

export const GALLERY_IMAGES = [
  '/images/gallery/gallery-01.jpg',
  '/images/gallery/gallery-02.jpg',
  '/images/gallery/gallery-03.jpg',
  '/images/gallery/gallery-04.jpg',
  '/images/gallery/gallery-05.jpg',
  '/images/gallery/gallery-06.jpg',
] as const

export const SCHEDULE = [
  {
    time: '09:00–10:00',
    activity: 'Реєстрація. Welcome drinks, живий саксофон, бейдж. Рекомендуємо прийти до 10:00',
  },
  {
    time: '10:00',
    activity: 'Відкриття. Вітальне слово організаторок, розіграш для пунктуальних',
  },
  {
    time: '11:00',
    activity: 'Блок 1 — Натхнення. Спікер 1',
  },
  {
    time: '11:40',
    activity: 'Спікер 2',
  },
  {
    time: '12:20',
    activity: 'Спікер 3, шоу-програма та розіграші',
  },
  {
    time: '13:00',
    activity: 'Блок 2 — Дія. Їжа, ярмарок, локації прояву, фото та відео, вільний мікрофон, розваги',
  },
  {
    time: '17:00',
    activity: 'Блок 3 — Енергія. Повернення до сцени',
  },
  {
    time: '17:10',
    activity: 'Панельна дискусія з експертами (ведуча — Ольга Тедеєва)',
  },
  {
    time: '18:00',
    activity: 'Спікер 4',
  },
  {
    time: '18:40',
    activity: 'Спікер 5',
  },
  {
    time: '19:20',
    activity: 'Спікер 6, шоу-програма та розіграші',
  },
  {
    time: '20:00',
    activity: 'Офіційне завершення програми',
  },
  {
    time: '20:00–21:00',
    activity: 'Afterparty. DJ сет, танці та фінальні фото. VIP — окремо з організаторками',
  },
  {
    time: '21:00',
    activity: 'Завершення події',
  },
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
    question: 'Скільки триває подія?',
    answer: 'Початок реєстрації о 9:00 і завершення програми близько 21:00.',
  },
  {
    question: 'Чи буде харчування?',
    answer: 'Так, на локації працюватиме зона харчування (оплачується самостійно), а на ярмарку можна буде придбати смаколики. Для власників квитків категорії VIP харчування вже включене у вартість.',
  },
  {
    question: 'Чи можна змінити формат участі після покупки квитка?',
    answer: 'Так, це можливо, за умовою вільного місця. Золотий та віп прояв мають обмежену кількість місць.',
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
