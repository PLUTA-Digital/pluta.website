# PLUTA LiquiTool Landing Page (Astro)

Diese Anwendung ist die Landing Page für das PLUTA LiquiTool (Liquiditaetsplanung ohne Excel-Chaos). Sie ist als Astro-Seite mit Tailwind CSS umgesetzt und besteht aus modularen Sections (Hero, Screenshots/Carousel, How-it-works, Vergleich, Kernfunktionalitaeten, Referenzen, FAQ, Kontakt und Footer).

## Live-URL / Domain

Die Seite ist unter der Projekt-Domain `https://liquitool.pluta.net` vorgesehen.

## Screenshots und Referenzen (Assets)

Die Screenshot-Carousel erwartet Bilder in:

- `public/screenshots/`

Aktuell werden (in `src/components/Carousel.astro`) diese Dateinamen referenziert:

- `screen1.jpg` ... `screen9.jpg`
- `vorkassen-output.jpg` (optional zusaetzlicher Slide fuer Vorkassen Output)

Referenzbilder (Testimonials) werden erwartet in:

- `public/references/` (z.B. `ref1.jpg` ... `ref6.jpg`)

## Netlify Forms (Kontaktformular)

Das Kontaktformular ist in `src/components/Contact.astro` implementiert und ist fuer Netlify Forms vorbereitet:

- `name="contact"`
- `data-netlify="true"`
- `method="post"`
- Honeypot: `netlify-honeypot="bot-field"` (Feld `bot-field`)
- Redirect nach Submit: `action="/form-success"` (Route existiert unter `src/pages/form-success.astro`)

Hinweis: Auf Netlify muss das Formular mit dem Formnamen `contact` erfasst werden (wenn Netlify es nicht automatisch erkennt).

## Sections / Anchor-Links

Die Navigation nutzt u.a. folgende Anchors:

- `/#carousel` (Screenshots)
- `/#how-it-works` (So funktioniert's)
- `/#comparison` (Vergleich)
- `/#features` (Kernfunktionalitaeten)
- `/#testimonials` (Referenzen)
- `/#faq` (FAQ)
- `/#contact` (Kontaktformular)

## Lokal starten

```bash
npm install
npm run dev
```

## Produktion bauen

```bash
npm run build
```

## Inhalte anpassen

- `src/config.ts` - Navigation, Footer-Links und allgemeine Site-Konfiguration
- `src/content/*.ts` - Texte fuer Features, Testimonials und FAQ
- `src/components/*` - Layout/Sections (z.B. Hero, Carousel, Comparison, Contact)

## License

Diese Landing Page ist **nicht Open Source**.

## Proprietäre Lizenz (PLUTA)

- Die **PLUTA-spezifischen Inhalte**, Texte, Design/Branding und Assets (z.B. Screenshots/Referenzen) sind Eigentum von **PLUTA Digital GmbH** und werden geschützt gehalten.
- Die **Nutzung** ist für den Betrieb/Anpassungen dieser PLUTA-Website vorgesehen.
- Eine **Weiterverbreitung** (z.B. Publikation des Repos oder der Inhalte außerhalb des PLUTA-Kontexts) ist nicht gestattet.

## Drittlizenzen

Die verwendeten Drittsoftware-Komponenten wie **Astro**, **Tailwind CSS** etc. sind unter ihren jeweiligen Lizenzen lizensiert. Details findest du in den entsprechenden Dependency-Quellen/`node_modules`.

Siehe auch: `LICENSE` in diesem Ordner.
