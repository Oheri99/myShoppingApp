# myShoppingApp

[![CI](https://github.com/Oheri99/myShoppingApp/actions/workflows/ci.yml/badge.svg)](https://github.com/Oheri99/myShoppingApp/actions/workflows/ci.yml)

> A simple shopping list app built with React, TypeScript, and Vite. Add items, mark them complete, edit, delete, and keep your list saved in the browser.

## 🚀 Features

- Add shopping items with a quick input form
- Toggle items as complete / incomplete
- Edit item names inline
- Delete items from the list
- Persist items using `localStorage`
- Responsive styling for desktop and mobile

## 🧩 Tech Stack

- React 19
- TypeScript 6
- Vite 8
- Oxlint for linting
- GitHub Actions for CI

## 📁 Project Structure

- `src/App.tsx` — main application logic and persistence
- `src/components/AddItem.tsx` — input form for new items
- `src/components/ShoppingList.tsx` — list rendering, edit/delete/toggle controls
- `src/types/ShoppingItem.ts` — item type definition
- `src/index.css` — global styling and layout

## ▶️ Run locally

```bash
cd shopping-list
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## ✅ Build

```bash
npm run build
```

## 📦 Preview production build

```bash
npm run preview
```

## 🌐 Deployment

This project can be deployed with Vercel, Netlify, or any static site host that supports Vite output.

### Recommended

- Connect your GitHub repo to Vercel
- Set the root directory to `/` and use `npm run build`
- Vercel will automatically deploy on every push to `main`

## 📸 Screenshot

![App screenshot](./public/icons.svg)

## 📌 Notes

- The app uses `localStorage`, so data is stored per browser/device.
- The GitHub Actions workflow validates the app by installing dependencies, linting, and building.

## 📫 Contact

If you'd like help making this repo even more portfolio-ready, I can add Playwright tests, a production deployment badge, and a demo link.
