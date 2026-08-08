# myShoppingApp

[![CI](https://github.com/Oheri99/myShoppingApp/actions/workflows/ci.yml/badge.svg)](https://github.com/Oheri99/myShoppingApp/actions/workflows/ci.yml) [![Vercel](https://img.shields.io/badge/deploy-on%20vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/new/project?template=https://github.com/Oheri99/myShoppingApp)

> A simple shopping list app built with React, TypeScript, and Vite. Add items, mark them complete, edit them inline, and keep your list saved in the browser.

## 🚀 Features

- Add shopping items with a quick input form
- Toggle items as complete / incomplete
- Edit item names inline
- Delete items from the list
- Persist data using `localStorage`
- Responsive layout for desktop and mobile

## 🧩 Tech Stack

- React 19
- TypeScript 6
- Vite 8
- Oxlint for linting
- Playwright for end-to-end tests
- GitHub Actions for CI

## 📁 Project Structure

- `src/App.tsx` — main application logic and localStorage persistence
- `src/components/AddItem.tsx` — input form for adding new items
- `src/components/ShoppingList.tsx` — list rendering and item controls
- `src/types/ShoppingItem.ts` — shopping item type definition
- `src/index.css` — global styling and layout

## ▶️ Run locally

```bash
cd shopping-list
npm install
npm run dev
```

Open the local URL shown by Vite (typically `http://localhost:5173`).

## ✅ Available scripts

```bash
npm run dev          # start Vite dev server
npm run build        # compile TypeScript and build production files
npm run preview      # preview the production build locally
npm run lint         # run Oxlint
npm run test:e2e     # run Playwright end-to-end tests
npm run test:e2e:headed # run Playwright tests in headed mode
```

## 📦 Preview production build

```bash
npm run preview
```

## 🧪 End-to-end Tests

Playwright is configured in `playwright.config.ts` to run tests from `tests/` and start a preview server at `http://127.0.0.1:4173`.

```bash
npm run test:e2e
```

## 🌐 Deployment

This project can be deployed with Vercel, Netlify, or any static host that supports Vite output.

### Recommended Vercel setup

- Root directory: `/`
- Build command: `npm run build`
- Output directory: `dist`

### Vercel config

This repo includes `vercel.json`, which configures Vercel to use the `dist` output folder and route all requests to `index.html` for client-side routing.

## 📌 Notes

- App data is stored in the browser using `localStorage`.
- The repo includes a GitHub Actions workflow that installs dependencies, lints the code, and builds the app.


## 🩺 Troubleshooting: `npm ci` failures

The most likely cause for `npm ci` failing in CI is an invalid npm configuration (for example an erroneous `.npmrc`) in the repository or a parent folder. If you see errors during `npm ci` in GitHub Actions, try the steps below:

1. Check for a `.npmrc` file in your repository root or in any parent folder and inspect it for invalid options. No `.npmrc` files were found in the repository when inspected locally.
2. Keep the GitHub Actions install step simple—use the basic `npm ci` command in your workflow. Example step:

```yaml
- name: Install dependencies
	run: npm ci
```

3. If you need to pass special npm options, validate they are supported by the npm version used in the CI runner. Prefer setting registry or auth via GitHub Actions secrets and official actions when possible.

If problems persist after removing or fixing `.npmrc`, capture the failing `npm ci` output from the workflow logs and open an issue with that log for further diagnosis.

