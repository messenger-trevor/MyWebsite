# Personal site (Astro port)

Like-for-like port of the old Create React App site. Content refresh for the
technical project manager role is a separate, later pass.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs ./dist
npm run preview
```

This code was written without being able to run `npm install` or a build, so
expect to fix small things on the first run. Likeliest spots: the Astro version
in `package.json` (`^6.4.0`), `<Image>` styling in `Hero.astro`/`About.astro`,
and the `tsconfig.json` extends line.

## Where things live

| What | Where |
|---|---|
| Name, role, links, bio, focus areas | `src/data/site.ts` |
| Tech stack logos | `src/data/stack.ts` |
| Projects | `src/data/projects.ts` |
| Colors, fonts, shared section styles, scroll-reveal CSS | `src/styles/global.css` |
| Head/meta tags, scroll-reveal script | `src/layouts/Layout.astro` |

## Contact form

Copy `.env.example` to `.env` and set `PUBLIC_FORM_ENDPOINT` (and
`PUBLIC_FORM_ACCESS_KEY` if your service needs one). With no endpoint the page
shows a notice instead of a form. The honeypot field is named `_gotcha`
(Formspree's convention); rename it to match whatever service you pick.

## What changed from the CRA version

- React, MUI, Emotion, Framer Motion, react-scroll, hamburger-react,
  react-type-animation and the whole Amplify/AWS backend are gone. Output is
  plain HTML/CSS plus three small scripts (menu, progress bar, scroll reveal).
- Typing animation replaced by a static three-column list with the same text.
- Fly-in animations are CSS transitions triggered at 15% visibility (the old
  version needed 100% visible, which can leave tall sections hidden on phones).
  They respect `prefers-reduced-motion`, and content is visible without JS.
- Mobile menu is a real button with `aria-expanded`; it closes on link tap/Esc.
- Project cards use `<details>`, no JS.
- Fixed typos ("thats", "techinical", "compentency"), added `rel` on external
  links, real alt text, valid list markup, meta/Open Graph tags.
- Montserrat Black is now used for the name (the old CSS asked for weight 900
  from the Medium file, so the browser faked it).
- Only the six used images and three used fonts were copied. Unused assets
  (two dummy project photos, Logo.png, other font weights, etc.) were left out.

## TODO

- [ ] Set `site` in `astro.config.mjs`, then `npx astro add sitemap`
- [ ] Add an `og:image`
- [ ] Choose a form service
- [ ] Convert fonts to woff2
- [ ] Content refresh (role, bio, focus areas, projects)
- [ ] Deploy and move the Route 53 records
