# Resume — Олександр Жабітенко

Сайт-резюме: Trainee/Junior Python Developer · Data Analyst.

🔗 **Демо:** https://olekssz.github.io/resume/

## Про проєкт

Односторінковий сайт-резюме, стилізований під термінал/редактор коду. Без фреймворків
і збірки — чистий HTML/CSS/JS, розгорнутий на GitHub Pages.

## Стек

- HTML5, CSS3 (custom properties, grid/flexbox, без препроцесорів)
- Vanilla JavaScript (без бібліотек)
- [Formspree](https://formspree.io) — обробка форми зворотного зв'язку

## Структура

```
.
├── index.html   — розмітка та контент сторінки
├── style.css    — стилі (дизайн-токени в :root)
└── script.js    — ефект друку в hero, мобільне меню, підсвітка активного розділу
```

## Запустити локально

Файли статичні, бекенд не потрібен:

```bash
git clone https://github.com/OleksSZ/resume.git
cd resume
python3 -m http.server 8000
```

Відкрити http://localhost:8000

## Контакти

- GitHub: [github.com/OleksSZ](https://github.com/OleksSZ)
- Email: oleksandrzabitenko615@gmail.com
