# PROяв — Next.js 14 Website

Сайт події **PROяв** (Тернопіль) на Next.js 14 + TypeScript + CSS Modules.

## Запуск

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000)

## Структура

```
src/app/
├── layout.tsx              # Root layout (fonts, metadata)
├── page.tsx                # Головна сторінка
├── proyav.css              # Стилі сторінки
├── globals.css             # Глобальні змінні та стилі
└── components/
    ├── Navbar.tsx          # Навігація
    ├── Hero.tsx            # Hero-секція
    ├── AboutSection.tsx    # Про подію
    ├── TicketsSection.tsx  # Квитки
    ├── ContactSection.tsx  # Контакти
    └── Footer.tsx          # Підвал
```
