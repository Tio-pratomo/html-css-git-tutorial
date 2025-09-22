---
sidebar_position: 4
---

# Kustomisasi Dasar Docusaurus

Mari pelajari cara melakukan kustomisasi dasar pada website Docusaurus Anda. Kita akan mengubah tampilan dasar, warna, dan beberapa elemen penting lainnya.

## 1. Mengubah Konfigurasi Dasar

### File Konfigurasi Utama (`docusaurus.config.js`)

```javascript title="docusaurus.config.js"
import { themes } from "@docusaurus/preset-classic";

// Konfigurasi utama website
const config = {
  title: "Nama Website Anda",
  tagline: "Deskripsi singkat tentang website Anda",
  url: "https://website-anda.com",
  baseUrl: "/",

  // Konfigurasi bahasa dan arah teks
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },

  // Konfigurasi untuk faster build (Docusaurus 3.8+)
  future: {
    v4: true,
    experimental_faster: {
      rspackBundler: true,
      rspackPersistentCache: true,
    },
  },

  // Konfigurasi tema
  themeConfig: {
    // Konfigurasi navbar
    navbar: {
      title: "Website Saya",
      logo: {
        alt: "Logo Website Saya",
        src: "img/logo.svg", // Ganti dengan path logo Anda
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Dokumentasi",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/username/repo",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    // Konfigurasi footer
    footer: {
      style: "dark",
      links: [
        {
          title: "Dokumen",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Komunitas",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/",
            },
          ],
        },
        {
          title: "Lainnya",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Website Saya. Built with Docusaurus.`,
    },

    // Konfigurasi metadata sosial
    metadata: [
      { name: "keywords", content: "docusaurus, blog, dokumentasi" },
      { name: "twitter:card", content: "summary_large_image" },
    ],

    // Konfigurasi prism (syntax highlighting)
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["java", "php", "rust"],
    },
  },

  // Konfigurasi presets
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/username/repo/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/username/repo/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
};

export default config;
```

## 2. Kustomisasi Skema Warna

### File CSS Kustom (`src/css/custom.css`)

```css title="src/css/custom.css"
/**
 * Kustomisasi variabel CSS untuk tema website
 * Anda bisa mendapatkan kode warna dari https://colorhunt.co/
 */

:root {
  --ifm-color-primary: #2e8555; /* Hijau */
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
  --ifm-color-primary-darkest: #205d3b;
  --ifm-color-primary-light: #33925d;
  --ifm-color-primary-lighter: #359962;
  --ifm-color-primary-lightest: #3cad6e;
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --ifm-color-primary: #25c2a0; /* Teal */
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}

/* Kustomisasi header */
.hero--primary {
  --ifm-hero-background-color: var(--ifm-color-primary);
  --ifm-hero-text-color: var(--ifm-font-color-base-inverse);
}

/* Kustomisasi footer */
.footer--dark {
  --ifm-footer-background-color: #1c1e21;
  --ifm-footer-color: var(--ifm-footer-link-color);
  --ifm-footer-link-color: var(--ifm-color-secondary);
  --ifm-footer-title-color: var(--ifm-color-white);
}

/* Kustomisasi navbar */
.navbar {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.navbar__logo {
  height: 2rem;
}

/* Kustomisasi card */
.card {
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* Kustomisasi code block */
.codeBlockLines {
  border-radius: 0.5rem;
}

/* Kustomisasi button */
.button {
  border-radius: 0.5rem;
  font-weight: 600;
}

/* Responsive adjustments */
@media screen and (max-width: 996px) {
  :root {
    font-size: 14px;
  }
}

@media screen and (min-width: 997px) {
  :root {
    font-size: 16px;
  }
}
```

## 3. Mengganti Favicon dan Logo

### Menyiapkan File Assets

1. **Siapkan file logo dan favicon**:

   - Format: SVG (disarankan), PNG, atau ICO
   - Ukuran: Minimal 200x200 piksel untuk logo
   - Simpan di folder `static/img/`

2. **Struktur folder**:

   ```
   static/
   ├── img/
   │   ├── logo.svg
   │   ├── logo-dark.svg
   │   └── favicon.ico
   └── ...
   ```

3. **Konfigurasi di `docusaurus.config.js`**:

```javascript title="docusaurus.config.js (partial)"
const config = {
  // ... konfigurasi lainnya

  themeConfig: {
    navbar: {
      logo: {
        alt: "Logo Website Saya",
        src: "img/logo.svg", // Logo untuk mode terang
        srcDark: "img/logo-dark.svg", // Logo untuk mode gelap (opsional)
      },
    },

    // Konfigurasi metadata untuk social media
    image: "img/social-card.jpg", // Gambar untuk social media preview
  },

  // Konfigurasi favicon
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/favicon.ico",
      },
    },
  ],
};

export default config;
```

## 4. Menambahkan Social Media Card

### Membuat Social Media Image

1. Buat gambar dengan ukuran 1200x630 piksel
2. Simpan di `static/img/social-card.jpg`
3. Konfigurasi metadata di `docusaurus.config.js`:

```javascript title="docusaurus.config.js (partial)"
const config = {
  // ... konfigurasi lainnya

  themeConfig: {
    // Metadata untuk social media
    metadata: [
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://website-anda.com/img/social-card.jpg",
      },
      {
        property: "og:image",
        content: "https://website-anda.com/img/social-card.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
  },
};

export default config;
```

## 5. Mengubah Tampilan Halaman Beranda

### Mengedit File Halaman Utama (`src/pages/index.js`)

```jsx title="src/pages/index.js"
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Mulai Belajar - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Halaman Beranda - ${siteConfig.title}`}
      description="Deskripsi untuk halaman beranda"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
```

## 6. Menambahkan Komponen Kustom

### Membuat Komponen Sederhana (`src/components/InfoCard.js`)

```jsx title="src/components/InfoCard.js"
import React from "react";

export default function InfoCard({ title, description, icon }) {
  return (
    <div className="card-demo margin-bottom--lg">
      <div className="card">
        <div className="card__header">
          <div style={{ display: "flex", alignItems: "center" }}>
            {icon && <span style={{ marginRight: "10px" }}>{icon}</span>}
            <h3>{title}</h3>
          </div>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
```

## 7. Tips Kustomisasi Tambahan

1. **Gunakan Browser DevTools**:

   - Inspect elemen untuk mengetahui class CSS yang digunakan
   - Eksperimen dengan perubahan CSS langsung di browser

2. **Swizzle Components**:

   ```bash
   npm run swizzle @docusaurus/theme-classic [component-name]
   ```

   Contoh:

   ```bash
   npm run swizzle @docusaurus/theme-classic Navbar
   ```

3. **Kustomisasi Berdasarkan Mode**:

   ```css
   /* Hanya berlaku untuk mode terang */
   [data-theme="light"] .selector {
     /* styles */
   }

   /* Hanya berlaku untuk mode gelap */
   [data-theme="dark"] .selector {
     /* styles */
   }
   ```

4. **Gunakan Variabel CSS Docusaurus**:
   - Daftar lengkap variabel: [Docusaurus CSS Variables](https://docusaurus.io/docs/styling-layout#css-variables)

Dengan kustomisasi dasar ini, Anda sudah dapat mengubah tampilan website Docusaurus sesuai dengan identitas merek atau preferensi pribadi Anda. Eksperimenlah dengan berbagai kombinasi warna dan tata letak untuk mendapatkan hasil yang optimal.
