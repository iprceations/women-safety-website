# Women Safety — Static Website

![logo](assets/logo.svg)

A simple, accessible static website that provides safety tips, emergency hotlines, and community resources for women.

---

## सारांश (Summary / हिंदी)

यह प्रोजेक्ट महिलाओं की सुरक्षा के लिए एक हल्का, सहज उपयोगी वेबसाइट स्टार्टर्स पैक है। इसमें:

- होम पेज (हीरो सेक्शन) — तत्क्षण सहायता और संसाधनों के लिंक।
- प्रैक्टिकल सुरक्षा सुझाव (Safety Tips)।
- आपातकालीन संपर्क (Emergency Contacts) — कॉल करने के लिए नंबर।
- संसाधन लिंक (Resources) और संपर्क फॉर्म (mail-to fallback)।

यह साइट पूरी तरह से स्टैटिक है (HTML/CSS/JS) और GitHub Pages पर आसानी से डिप्लॉय हो सकती है।

---

## Screenshots / Demo

Hero illustration:

![hero](assets/hero.svg)

Emergency cards (icons are SVG):

![icons](assets/icons/police.svg)

> Note: These SVGs are included in the `assets/` folder and are scalable, small, and accessible.

---

## Features

- Lightweight static site (no backend required)
- Responsive layout for mobile and desktop
- Accessible markup (skip link, ARIA attributes, semantic HTML)
- SVG logo, favicon, hero illustration, and small icon set
- Contact form fallback using `mailto:` (easy to replace with Formspree/Netlify)

---

## File structure

- `index.html` — Main site markup
- `styles.css` — Styling and responsive rules
- `script.js` — Small JS for nav toggle and contact handling
- `assets/` — Logo, favicon, hero illustration, icons
- `README.md` — This file
- `LICENSE` — MIT license

---

## Customize (क्या बदलें)

1. Emergency numbers: Open `index.html` और बदलें `+91 123`, `+91 124`, `+91 125` को अपने देश/क्षेत्र के असली हॉटलाइन नंबर से।
2. Contact email: `script.js` में `support@example.com` को अपनी सहायता ईमेल से बदलें, या Formspree/Netlify forms जोड़ें।
3. Brand colors / logo: `assets/logo.svg` को अपनी ब्रांड SVG से बदलें और `styles.css` में रंग समायोजित करें।
4. Add pages: अगर आप ब्लॉग या कानूनी पृष्ठ (Privacy Policy, Terms) जोड़ना चाहते हैं तो नई Markdown/HTML फाइलें बनाकर लिंक जोड़ें।

---

## Deploy (GitHub Pages पर डालें)

1. रिपॉजिटरी मौजूद है: `iprceations/women-safety-website`।
2. Commit & push सभी फाइलें (यदि लोकली कर रहे हों)।
3. GitHub → repo Settings → Pages → Source: `main` branch, folder: `/ (root)` चुनें।
4. Save करें; कुछ ही मिनटों में साइट उपलब्ध होगी: `https://iprceations.github.io/women-safety-website/`

---

## Local preview (लोकल प्रीव्यू)

Terminal में (repo root):

```bash
# Python 3 से
python -m http.server 8000
# ब्राउज़र में खोलें: http://localhost:8000
```

या अपने पसंदीदा static server का प्रयोग करें (Live Server extension, http-server npm, आदि)।

---

## Integrate a hosted contact form (Formspree example)

Formspree जैसी services जोड़ने के लिए:

1. Formspree पर अकाउंट बनाएं और new form बनाएं। आपको एक POST endpoint मिलेगा, जैसे `https://formspree.io/f/yourid`।
2. `index.html` में contact फॉर्म के `<form id="contactForm">` को इस तरह बदलें:

```html
<form action="https://formspree.io/f/yourid" method="POST">
  <input name="name" required>
  <input name="email" type="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

3. (Optional) Add a hidden input for spam protection or redirect on success.

---

## Contributing

यदि आप सुधार करना चाहते हैं:

1. Fork करें
2. Branch बनाएं (`git checkout -b feature/my-change`)
3. Commit और push करें
4. Pull request बनायें — मैं review कर लूंगा और merge कर दूंगा

---

## License

MIT — विवरण `LICENSE` फ़ाइल में है.

---

## Contact

For changes or help setting up hosting, contact: `phsnoida@gmail.com` (repo committer) or update `script.js` to the support email you prefer.

---

Happy to improve further — मैं README में और हिंदी-बैक्ड ट्यूटोरियल या अलग-अलग क्षेत्र के emergency number templates भी जोड़ सकता/सकती हूँ।
