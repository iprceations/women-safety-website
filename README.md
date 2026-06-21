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

If PNG previews are not showing, the repository currently uses the SVG files directly (these are reliable when referenced with the raw URL). You can also open the mockup page which overlays the logo on the screenshot:

- Mockup (logo + screenshot overlay): [screenshot-mock.html](https://github.com/iprceations/women-safety-website/blob/main/screenshot-mock.html)

Hero illustration (SVG):

![Hero illustration](https://raw.githubusercontent.com/iprceations/women-safety-website/main/assets/hero.svg)

Emergency card icon example (SVG):

![Police icon](https://raw.githubusercontent.com/iprceations/women-safety-website/main/assets/icons/police.svg)

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
- `assets/` — Logo, favicon, hero illustration, icons (SVG + PNG fallbacks)
- `README.md` — This file
- `LICENSE` — MIT license

---

## Troubleshooting: Images not rendering

If images don't appear in the README or site:

- I updated the README to point to the raw SVG files. If these still show as broken images in your view, please attach the final PNG files (logo and the full screenshot) in this chat, and I will add them to `assets/png/` and update the README to use the PNGs.
- To upload PNGs here, attach them to the chat and reply “Upload provided PNGs” — I will replace placeholders immediately and push to `main`.

---

## Local preview

From the repository root you can run a simple static server:

```bash
# with Python 3
python -m http.server 8000
# then open http://localhost:8000
```

---

## License

MIT — see the `LICENSE` file.

---

## Contact

For help or customizations, contact: phsnoida@gmail.com
