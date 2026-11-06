# Olatunde Portfolio

React + Vite + Sass portfolio built from the Figma design (dark and light mode, scroll progress line, mouse follower).

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Edit your details (src/content)

Everything you change lives in `src/content`. You never need to touch the components.

| File | What it controls |
|---|---|
| `profile.js` | Name, headline, intro, about text, stats, email, CV link, form endpoint, nav links |
| `socials.js` | GitHub, LinkedIn, X, WhatsApp, Email links (footer) |
| `skills.js` | Skill groups and their icons |
| `projects.js` | Project title, description, tags, screenshot, GitHub link, live link |

### Add, rename or delete a project
Open `src/content/projects.js`. Copy a block to add one, edit the values to rename it, delete the block to remove it.
Set `featured: true` to show it on the Home page (the first 3 featured are shown). Leave `github` or `live` as `''` to hide that button.

### Images
- Your photo: put it in `public/images/` and set `photo` in `profile.js` (for example `'/images/me.jpg'`).
- Project screenshots: put them in `public/images/projects/` and set `image` in `projects.js`.
- Your CV: save it as `public/cv.pdf`.

### Contact form
By default the form opens the visitor's email app. To send without that, create a free form at https://formspree.io and paste its URL into `formEndpoint` in `profile.js`.

## Folder structure

```
src/
  content/      ← the only folder you edit
  components/   Navbar, Hero, About, Skills, Projects, ProjectCard, Footer, ContactForm, effects
  pages/        Home, ProjectsPage
  hooks/        useTheme, useScrollProgress
  styles/       tokens (colours), base, layout, components/*.scss
public/         images, favicon, cv.pdf
```

## Change the colours
Open `src/styles/_tokens.scss`. Dark and light colours are the CSS variables at the top.

## Deploy
Push to GitHub and import the repo on Vercel or Netlify. The `vercel.json` and `public/_redirects` files make the /projects page work on refresh.
