# Women Safety — Static Website

![Women Safety logo](https://raw.githubusercontent.com/iprceations/women-safety-website/main/assets/logo.svg)

A lightweight, accessible static website that provides safety tips, emergency hotlines, and community resources for women.

---

## Overview

This repository contains a simple, responsive static site built with HTML, CSS, and JavaScript. It's intended as a starter kit you can customize and publish on GitHub Pages.

Key pages and sections:
- Hero / Home — immediate access to help and resources
- Practical safety tips
- Emergency contacts (call links)
- Resources and contact form (mailto fallback)

---

## Demo / Screenshots

Hero illustration:

![Hero illustration](https://raw.githubusercontent.com/iprceations/women-safety-website/main/assets/hero.svg)

Emergency card icon example:

![Police icon](https://raw.githubusercontent.com/iprceations/women-safety-website/main/assets/icons/police.svg)

> If SVG images do not render correctly in your browser or on GitHub, I can add PNG fallbacks. Let me know if you prefer PNG assets and I will push them.

---

## Features

- Static and lightweight (HTML/CSS/JS)
- Responsive layout for mobile and desktop
- Accessible markup (skip link, ARIA attributes, semantic HTML)
- SVG logo, favicon, hero illustration, and icon set
- Simple contact form fallback using `mailto:` (easy to replace with Formspree/Netlify)

---

## Repository structure

- `index.html` — Main site markup
- `styles.css` — Styling and responsive rules
- `script.js` — Small JS for nav toggle and contact handling
- `assets/` — Logo, favicon, hero illustration, icons
- `README.md` — This file
- `LICENSE` — MIT license

---

## Customize

1. Update emergency numbers in `index.html` (replace the example numbers with real hotlines for your region).
2. Update the support email in `script.js` (replace `support@example.com`) or integrate a hosted form service (Formspree or Netlify Forms).
3. Replace `assets/logo.svg` with your brand logo (SVG or PNG) and adjust colors in `styles.css` as needed.
4. Add additional pages (Privacy Policy, Terms, Blog) as separate HTML or Markdown files and link them in the navigation.

---

## Deploy on GitHub Pages

1. Make sure the repo exists at `iprceations/women-safety-website` (it does).
2. Push your changes to the `main` branch.
3. In GitHub, go to Settings → Pages → Source and choose `main` branch and `/ (root)`.
4. Save; the site should be published at `https://iprceations.github.io/women-safety-website/` in a few minutes.

---

## Local preview

From the repository root you can run a simple static server:

```bash
# with Python 3
python -m http.server 8000
# then open http://localhost:8000
```

Or use any static server (Live Server extension in VS Code, http-server npm package, etc.).

---

## Optional: Replace contact form with Formspree

1. Sign up at Formspree and create a form. You will get an endpoint like `https://formspree.io/f/yourid`.
2. Replace the contact form in `index.html` with a standard HTML form that POSTs to that endpoint.

Example:

```html
<form action="https://formspree.io/f/yourid" method="POST">
  <input name="name" required />
  <input name="email" type="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

---

## Troubleshooting: SVGs not rendering in README

If you or visitors see blank boxes or the images don't appear in the README:

- Confirm the files exist at `assets/` (they do in this repo).
- Try opening the raw image URL directly (example: `https://raw.githubusercontent.com/iprceations/women-safety-website/main/assets/logo.svg`).
- Some browsers or security settings block inline SVG rendering. If that happens, I can create PNG fallbacks and update the README and pages to use them.

If you'd like PNGs, reply “Add PNG fallbacks” and I will convert the SVGs to PNG and push them.

---

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-change`
3. Make and commit changes
4. Open a pull request — I will review and merge

---

## License

MIT — see the `LICENSE` file.

---

## Contact

For help or customizations, contact: phsnoida@gmail.com
