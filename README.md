# Sarthak Shukla Portfolio

React, Vite, Tailwind CSS, Framer Motion, and React Router portfolio site.

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Environment Variables

The contact form uses EmailJS. Create `.env.local` in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

For GitHub Pages project sites, also set:

```env
VITE_BASE_PATH=/your-repo-name/
```

Use `/` for Vercel, Netlify, or a GitHub user site such as `username.github.io`.

## Commands

```bash
npm run lint
npm run build
npm run check
npm run preview
```

`npm run build` also creates `dist/404.html` so direct page refreshes work on static hosts.

## Recommended Deployment

Vercel is the easiest option for this project. Import the GitHub repository, keep the default Vite build settings, and add the three `VITE_EMAILJS_*` environment variables in the Vercel project settings.

Netlify is also straightforward. Build command: `npm run build`. Publish directory: `dist`. The `public/_redirects` file handles React Router refreshes.

GitHub Pages works too. This repo includes `.github/workflows/deploy.yml`. In the GitHub repository settings:

1. Go to `Settings -> Pages`.
2. Set source to `GitHub Actions`.
3. Add repository variables for `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
4. If the site deploys at `https://username.github.io/repo-name/`, add `VITE_BASE_PATH=/repo-name/`.
5. Push to `main` and the workflow will publish `dist`.
