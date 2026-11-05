# PK Entertainment — Website

A cinematic, multi-page marketing website for **PK Entertainment**, a luxury private-cinema, smart-automation and acoustic-design studio. Built as a responsive clone/redesign of the Miniplex India layout, rebranded for PK Entertainment.

## Tech stack

- **HTML5** — semantic, multi-page structure
- **Tailwind CSS** — via the Play CDN, with a custom theme (brand colors + fonts) in each page head
- **Custom CSS** — `assets/css/style.css` for the design system, animations, lightbox, forms, etc.
- **Vanilla JavaScript** — `assets/js/main.js` for shared header/footer, mobile menu, scroll reveals, counters, filtering, lightbox, testimonial slider, accordions and form handling
- **Google Fonts** — Bebas Neue (display), Outfit (sans), Cormorant Garamond (accents)

No build step or dependencies are required.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, services, MAPS innovation, packages, projects, process, founder, testimonials |
| `theater.html` | Home theater design & installation |
| `automation.html` | Smart home automation |
| `acoustics.html` | Acoustic solutions & MAPS |
| `shop.html` | Product collection with category filtering |
| `about.html` | Story, values, timeline and team |
| `contact.html` | Enquiry form, contact details and map |
| `privacy-policy.html` | Privacy policy |
| `shipping-delivery.html` | Shipping & delivery policy |
| `refund-policy.html` | Refund & cancellation policy |
| `terms-conditions.html` | Terms & conditions |

## Running locally

Because the header/footer are injected by JavaScript, the site works when opened directly, but a local server is recommended:

```bash
cd PK
python -m http.server 5199
```

Then open <http://127.0.0.1:5199/>.

You can also use VS Code Live Server or any static host (Netlify, Vercel, GitHub Pages, cPanel).

## Customising

- **Brand name / contact details** — edit the `NAV`, `PHONE_*`, `EMAIL`, `ADDRESS` and `WA` constants at the top of `assets/js/main.js`.
- **Colors & fonts** — update the `tailwind.config` block in each page head and the CSS variables at the top of `assets/css/style.css`.
- **Images** — replace files in `assets/img/`. Project photos are in `project1.jpg`–`project6.jpg`; product photos in `product1.jpg`–`product3.jpg`.
- **Navigation / footer** — both are templated in `main.js`, so one edit updates every page.

## Notes

- The contact and newsletter forms are **front-end demos**: they validate input and show a success toast. Connect them to a backend, Formspree, Netlify Forms or your CRM for live submissions.
- Prices, testimonials and policy copy are illustrative and should be reviewed before going live.
- Tailwind is loaded via the Play CDN for zero-config static hosting. For production, compile Tailwind locally to purge unused classes and remove the CDN dependency.
- The Google Map on the contact page uses a public embed; replace the `src` with your own verified business location.
