# Kimaya Deshpande — Portfolio

Built with React + Vite + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

This repo already includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds and deploys the site automatically on every push to `main`.

1. Push this project to a GitHub repo.
2. In the repo, go to **Settings -> Pages**.
3. Under **Build and deployment -> Source**, choose **GitHub Actions**.
4. Push to `main` (or re-run the workflow from the Actions tab). Your site will be
   live at `https://<your-username>.github.io/<repo-name>/`.

No manual build step or `gh-pages` package needed - the workflow handles it.

## Content

All resume content (experience, projects, skills, links) lives in `src/data.js` -
edit that one file to update copy without touching any component.

## Structure

- `src/components/` - one file per section (Hero, About, Experience, Projects, Skills, Involvement, Contact)
- `src/data.js` - all content
- `src/index.css` - design tokens (colors, type, spacing)
- `src/components.css` - section styles
