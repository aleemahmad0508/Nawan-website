# Nawan City — Website

A static React + Vite website for Nawan City: history, projects, events,
players, grounds, markets, heroes and tourist places.

## 1. Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## 2. Build for production

```bash
npm run build
```

This creates a `dist/` folder with the finished static site. Upload the
contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages,
cPanel, etc.). Preview the production build locally with:

```bash
npm run preview
```

## 3. Project structure

```text
src/
├── components/     Reusable UI pieces (Navbar, Footer, cards, hero banners)
├── pages/          One file per route (Home, History, Projects, ...)
├── data/
│   └── siteData.js Every editable list on the site lives here
├── assets/images/  All placeholder photos — replace these files directly
├── App.jsx         Route definitions
├── main.jsx        App entry point
└── index.css       Design tokens (colors, fonts, spacing) + all styles
```

## 4. How routing works

`react-router-dom` is set up in `main.jsx` (`<BrowserRouter>`) and
`App.jsx` (`<Routes>`). Each route maps a URL path to a page component:

```jsx
<Route path="/history" element={<History />} />
```

Links use `<Link>` / `<NavLink>` instead of `<a>`, so clicking never
reloads the page. Any URL that doesn't match a route renders `NotFound`.

## 5. How to replace images

Every image lives in `src/assets/images/` with a clear name
(e.g. `cricket-player-1.jpg`). To change a photo, **replace the file
with a new image that has the exact same name** — nothing else needs
to change. If you want to use a different file name, update the
matching `image:` field in `src/data/siteData.js` (or the `HERO_IMAGE`
constant in `Hero.jsx` / `PageHero` usage on a page file).

## 6. How to add a new player

Open `src/data/siteData.js` and find `cricketPlayers` or
`volleyballPlayers`. Add a new object to the array:

```js
{
  id: 'cricket-player-4',
  name: 'New Player Name',
  role: 'Wicketkeeper',
  description: 'A short description of the player.',
  image: '/src/assets/images/cricket-player-4.jpg',
}
```

Then add a matching image file to `src/assets/images/`. The Players
page renders the array automatically with `.map()` — no other changes
needed.

## 7. How to add a new event

In `src/data/siteData.js`, add an object to the `events` array:

```js
{
  id: 'event-4',
  title: 'New Event Name',
  description: 'What happens at this event.',
  date: 'Month Year',
  image: '/src/assets/images/event-4.jpg',
}
```

## 8. How to add a new tourist place

Add an object to `touristPlaces` in `src/data/siteData.js`:

```js
{
  id: 'tourist-6',
  name: 'Place Name',
  description: 'What it's like.',
  whyVisit: 'Why someone should go.',
  location: 'Area of Nawan',
  image: '/src/assets/images/tourist-6.jpg',
}
```

## 9. How to add a new hero

Add an object to `heroes` in `src/data/siteData.js`:

```js
{
  id: 'hero-4',
  name: 'Full Name',
  title: 'Their role, e.g. Community Leader',
  bio: 'A short biography.',
  contribution: 'Their key contribution to Nawan.',
  achievements: ['Achievement one', 'Achievement two'],
  image: '/src/assets/images/hero-4.jpg',
}
```

## 10. Adding a project or market works the same way

Add an object to `projects` or `markets` in `src/data/siteData.js`
following the shape of the existing entries, and drop a matching
image into `src/assets/images/`.

## 11. Editing the History page text

The four sections on `/history` (Our Beginning, Growth of Nawan,
Culture and Traditions, Nawan Today) live in the `historySections`
array in `src/data/siteData.js`. Edit the `heading` and `body` text
directly — everything is placeholder content ready to be replaced with
Nawan's real history.

## 12. Colors, fonts and spacing

All design tokens are declared at the top of `src/index.css` inside
`:root`. Change a hex value there (e.g. `--color-rust`) and it updates
everywhere that color is used.
