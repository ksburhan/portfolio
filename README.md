# My Portfolio

This is my personal portfolio site, live at [ksburhan.com](https://ksburhan.com).

I built it with [Next.js 14](https://nextjs.org/) (Pages Router) and TypeScript, styled it with Tailwind CSS, and ship it as a fully static export.

## Running it locally

Install the dependencies and start the dev server:

```bash
npm install
npm start
```

Open it at [http://localhost:3006](http://localhost:3006); hotreloads are enabled.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the dev server on port 3006. |
| `npm run build` | Build a static export into the `out/` directory. |
| `npm run lint` | Run ESLint. |

## Updating the content

Everything put on the site the intro, projects, work and education timeline, skills, and contact links lives in [`src/data/data.tsx`](src/data/data.tsx), typed against the interfaces in [`src/data/dataDef.ts`](src/data/dataDef.ts). For changes edit `data.tsx` instead of hardcoding text into the components.

The page itself is composed in [`src/pages/index.tsx`](src/pages/index.tsx) from the section components under `src/components/sections/`.

## Deployment

`npm run build` produces a static site in `out/` (`output: 'export'` in `next.config.js`), and the `CNAME` file points it at `ksburhan.com`.
