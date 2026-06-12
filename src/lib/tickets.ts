export type TicketTierId = 'standard' | 'golden' | 'vip'
export type TicketWave = 'early' | 'main' | 'last'

export type TicketFeature = {
  text: string
  included: boolean
}

export type TicketTier = {
  id: TicketTierId
  emoji: string
  name: string
  featured: boolean
  limitNote: string
  features: readonly TicketFeature[]
  tagline?: string
}

export const TICKET_TIERS: readonly TicketTier[] = [
  {
    id: 'standard',
    emoji: '🌿',
    name: 'СТАНДАРТ PROяв',
    featured: true,
    limitNote: 'Кількість обмежена — 220 квитків',
    features: [
      { text: 'Вхід на подію — цілий день PROяв 9:00–21:00', included: true },
      { text: 'Виступи всіх спікерів', included: true },
      { text: 'Доступ до нетворкінгу та ярмарку', included: true },
      { text: 'Self-зони для самостійного контенту (фото / відео)', included: true },
      { text: 'Участь у відкритих інтерактивах та розіграшах події', included: true },
      { text: 'Локації та можливості прояву зі сцени — залучення з залу під час виступів', included: true },
      { text: 'Професійні фото з події', included: false },
      { text: 'After party 🎉', included: false },
    ],
  },
  {
    id: 'golden',
    emoji: '🟡',
    name: 'ЗОЛОТИЙ PROяв',
    featured: false,
    limitNote: 'Кількість обмежена — 60 квитків',
    features: [
      { text: 'Все з пакету «Стандарт PROяв»', included: true },
      { text: 'Доступ до локацій прояву з командою PROяв івент:', included: true },
      { text: '🎥 Зйомка з оператором (контент під твій запит)', included: true },
      { text: '📱 Робота з SMM / контент-спеціалістом', included: true },
      { text: '🎙 Запис міні-інтервʼю з модератором або міні подкаст про тебе', included: true },
      { text: 'Супровід і підказки: що знімати і як проявитись', included: true },
    ],
    tagline: 'Твій прояв знімають профі — ти отримуєш контент, не турбуючись про камеру',
  },
  {
    id: 'vip',
    emoji: '👑',
    name: 'ВІП PROяв',
    featured: false,
    limitNote: 'Кількість обмежена — 20 квитків',
    features: [
      { text: 'Все з пакету «Золотий PROяв»', included: true },
      { text: 'Найкращі місця в залі — 1–2 ряди', included: true },
      { text: 'Welcome pack та подарунки від партнерів', included: true },
      { text: 'Окрема стійка реєстрації — без черг', included: true },
      { text: 'Фуршет протягом усього дня — окрема VIP-зона', included: true },
      { text: 'VIP-вечір після події з організаторками та спікерами', included: true },
    ],
    tagline: 'Максимальне занурення, комфорт і увага — для тих, хто хоче отримати від події все',
  },
] as const

export function getTicketTier(id: TicketTierId): TicketTier | undefined {
  return TICKET_TIERS.find((tier) => tier.id === id)
}
