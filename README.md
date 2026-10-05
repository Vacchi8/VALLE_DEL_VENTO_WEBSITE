# 🎭 Valle Del Vento — Sito Ufficiale

Sito web ufficiale di **Valle Del Vento APS — Piccola Scuola Popolare di Teatro Valsusa**, associazione culturale che si occupa di formazione teatrale per ragazzi, produzione di spettacoli e organizzazione di eventi culturali.

🔗 **Sito live**: [www.valledelvento.org](https://www.valledelvento.org)

---

## 📖 Descrizione

Il sito nasce per raccontare le attività della scuola di teatro e dell'associazione, con particolare attenzione a:

- **Corsi di teatro** per bambini, ragazzi e adulti
- **Produzioni teatrali** (spettacoli in scena e repertorio storico)
- **Eventi culturali** organizzati sul territorio
- **News e aggiornamenti** sulle attività della scuola

L'obiettivo è offrire una piattaforma **veloce, accessibile e facilmente aggiornabile**, dove i contenuti possano essere gestiti in modo semplice e immediato.

---

## 🛠️ Stack Tecnologico

| Tecnologia | Utilizzo |
|------------|----------|
| **[Astro](https://astro.build/)** | Framework principale per il sito statico |
| **[Bootstrap 5](https://getbootstrap.com/)** | Griglie e componenti UI di base |
| **CSS personalizzato** | Stili, variabili di brand, animazioni |
| **[Cloudflare Pages](https://pages.cloudflare.com/)** | Hosting e deploy automatico |
| **[Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/)** | Storage immagini per gallery produzioni |
| **[Beehiiv](https://www.beehiiv.com/)** | Gestione newsletter |
| **[EmailJS](https://www.emailjs.com/)** | Invio email dal modulo contatti |
| **[Iubenda](https://www.iubenda.com/)** | Privacy Policy, Cookie Policy e cookie banner |

---

## 📁 Struttura del Progetto

```
.
├── public/
│   ├── icons/                  # Icone SVG (social, contatti, ecc.)
│   ├── images/                 # Immagini statiche
│   │   ├── loghi/              # Loghi partner (per il carosello)
│   │   ├── produzioni/         # Copertine produzioni (repository)
│   │   ├── scuola/             # Foto della scuola e dello staff
│   │   └── news/               # Copertine e gallerie news (repository)
│   ├── robots.txt              # Direttive per i crawler
│   └── favicon                 # Diversi formati per la favicon (logo principale VdV)
│
├── src/
│   ├── components/             # Componenti riutilizzabili
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── NavbarNews.astro
│   │   ├── Footer.astro
│   │   ├── NewsPreview.astro
│   │   ├── ProduzioneCard.astro
│   │   ├── InfoSection.astro
│   │   ├── ScuolaSection.astro
│   │   ├── ProduzioniSection.astro
│   │   ├── ContattaciSection.astro
│   │   └── LoghiCarousel.astro
│   │
│   ├── config/
│   │   ├── hero-config.js      # Configurazione immagini e testi degli hero
│   │   └── loghi.js            # Configurazione loghi del carosello
│   │
│   ├── content/                # Contenuti in Markdown
│   │   ├── news/               # Articoli delle news (.md)
│   │   └── produzioni/
│   │       ├── in-scena/       # Spettacoli attuali
│   │       └── repertorio/     # Spettacoli storici
│   │
│   ├── layouts/
│   │   ├── Layout.astro        # Layout principale (con navbar normale)
│   │   └── LayoutNews.astro    # Layout per news e produzioni (navbar scrollata)
│   │
│   ├── pages/                  # Routing del sito
│   |   ├── index.astro         # Home
│   |   ├── news.astro          # Lista news (con paginazione)
│   |   ├── scuola.astro        # Pagina scuola di teatro
│   |   ├── contatti.astro      # Pagina contatti + newsletter
│   |   ├── privacy.astro       # Privacy Policy (Iubenda)
│   |   ├── cookie-policy.astro # Cookie Policy (Iubenda)
│   |   │
│   |   ├── news/
|   |   |   ├── index.astro     # Lista news
│   |   │   └── [slug].astro    # Pagina singola news
│   |   │
│   |   └── produzioni/
│   |       ├── inScena.astro   # Lista spettacoli in scena
│   |       ├── repertorio.astro # Lista spettacoli di repertorio
│   |       └── [section]/
│   |           └── [slug].astro # Pagina singola produzione
│   |
|   └── styles/
│       └── global.css          # Stile globale
|
├── astro.config.mjs            # Configurazione Astro (sitemap, site URL)
├── package.json
├── package-lock.json
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── tsconfig.json
└── README.md
```

---

## 🚀 Setup Locale

### Prerequisiti

- **Node.js** v18 o superiore
- **npm** (incluso con Node.js)
- **Git**

### Installazione

```bash
# 1. Clona il repository
git clone https://github.com/Vacchi8/VALLE_DEL_VENTO_WEBSITE.git

# 2. Entra nella cartella
cd VALLE_DEL_VENTO_WEBSITE

# 3. Installa le dipendenze
npm install

# 4. Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:4321`.

### Comandi disponibili

| Comando | Cosa fa |
|---------|---------|
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Genera la build di produzione in `dist/` |
| `npm run preview` | Anteprima locale della build di produzione |

---

## ✍️ Come Aggiungere Contenuti

### Aggiungere una News

1. Crea un file `.md` in `src/content/news/` con nome `YYYY-MM-DD-titolo-breve.md`  # La data è necessaria in questo formato per permettere un corretto ordine temporale della news sul sito 

2. Compila il frontmatter:

```markdown
---
title: "Titolo della news"
date: YYYY-MM-DD
image: "/images/news/nome-news/nomefile.jpg"
excerpt: "Breve descrizione (max 160 caratteri)."

# Campi opzionali
location: ""
eventDate: ""
eventTime: ""
contactEmail: ""
contactPhone: ""

# Galleria (opzionale)
gallery:
  - "/images/news/nome-news/galleria-1.jpg"
  - "/images/news/nome-news/galleria-2.jpg"
---

## Contenuto

Qui va il testo della news in Markdown.
```

3. Salva il file, fai commit e push → Cloudflare Pages farà il deploy automatico.

### Aggiungere una Produzione

1. Crea un file `.md` in `src/content/produzioni/in-scena/` o `repertorio/`
2. Compila il frontmatter con `title`, `date`, `cover`, `excerpt`, `regia`, `durata`, `slug`, `gallery_count`
3. Salva, commit, push → deploy automatico.

---

## 🌐 Deploy

Il sito è **automaticamente deployato** su Cloudflare Pages ad ogni push sul branch `main`.

- **Branch di produzione**: `main`
- **Build command**: `npm run build`
- **Output directory**: `dist/`
- **URL di produzione**: [www.valledelvento.org](https://www.valledelvento.org)

### Per fare un deploy manuale

```bash
git add .
git commit -m "Descrizione della modifica"
git push origin main
```

Cloudflare rileverà il push e ricostruirà il sito in automatico.

---

## 🎨 Brand & Design

- **Colori principali**: `#F3EDC8` (primario), `#EAD196` (secondario), `#7D0A0A` (testo), `#BF3131` (accento)
- **Font**: Mulish (Google Fonts)
- **Icone**: Bootstrap Icons, SVGrepo
- **Filosofia**: design pulito, tipografia leggibile, attenzione all'accessibilità

---

## 📄 Licenza

© 2026 **Valle Del Vento APS** — Piccola Scuola Popolare di Teatro Valsusa.  
Tutti i diritti riservati.

Il codice sorgente è di proprietà dell'associazione. Per informazioni sull'utilizzo, contattare [giorgiovacchiotti@gmail.com](mailto:giorgiovacchiotti@gmail.com).

---

## 📬 Contatti

- **Email**: [valledelventoteatro@gmail.com](mailto:valledelventoteatro@gmail.com)
- **W-Developer Email**: [giorgiovacchiotti@gmail.com](mailto:giorgiovacchiotti@gmail.com)
- **Telefono**: +39 349 318 0419
- **Sito**: [www.valledelvento.org](https://www.valledelvento.org)
- **Instagram**: [@valle.del.vento](https://www.instagram.com/valle.del.vento?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==)
- **Facebook**: [Piccola Scuola Popolare di Teatro](https://www.facebook.com/piccolascuoladiteatro/)