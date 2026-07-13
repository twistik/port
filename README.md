# Portfolio

### [Live Site](https://vlad-nn.netlify.app/)

![Portfolio Aplication](https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/678e8df4a74ae90008166a40/screenshot_2025-01-20-17-56-14-0000.webp&fit=cover&h=500&q=40&w=800)

## Introduction
Nuxt and Vuetify portfolio

## Requirements

- **Node.js** `^20.19.0` or `>=22.12.0` (you currently need this to clear `EBADENGINE` warnings)
- **npm** `>=10.8.0`

This repo includes an `.nvmrc` pinned to `20.19.5`.

### Upgrade with nvm-windows (recommended)

Open an **Administrator** terminal, then:

```bash
nvm install 20.19.5
nvm use 20.19.5
node -v
```

Then reinstall deps in the project folder:

```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```
