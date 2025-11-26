# Pengenalan Bulma - Terminologi & Konsep

## Materi: Pengetahuan & Konsep

### Apa itu Bulma?

Bulma adalah **framework CSS modern** yang dibangun sepenuhnya di atas **Flexbox**. Tidak seperti Bootstrap yang masih mengandalkan float atau grid system tradisional, Bulma menggunakan Flexbox sebagai fondasi utama untuk semua komponen dan layout-nya.

**Kenapa Bulma?**

- **Pure CSS**: Tidak memerlukan JavaScript untuk komponen dasar
- **Flexbox-based**: Layout yang intuitif, powerful, dan mudah dipahami
- **Modular**: Anda hanya bisa mengimpor komponen yang dibutuhkan (kalau pakai NPM)
- **No JavaScript dependencies**: Bisa digunakan dengan vanilla JS atau framework apapun
- **Modern**: Menggunakan CSS3 features seperti variables dan Flexbox
- **Ringan**: Hanya ~200KB (minified) untuk seluruh framework via CDN

### Cara Instalasi (CDN - Recommended untuk Pemula)

Cukup tambahkan **satu baris** di `<head>` HTML Anda:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"
/>
```

Atau di file css anda :

```css
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css";
```

:::info[Catatan]
Selalu lihat https://bulma.io/documentation/start/installation/ untuk mendapatkan update terbaru.
:::

**Ini sudah termasuk semua komponen**: grid, form, button, navbar, dll. Tidak perlu build tools, npm, atau konfigurasi apapun. Untuk pemula, ini adalah cara tercepat dan paling efektif.

---

### Terminologi Penting di Bulma

#### 1. Elements vs Components

- **Elements**: Tag HTML dasar yang sudah distyling (e.g., `button`, `input`, `title`, `box`)
- **Components**: Kombinasi elements dalam struktur spesifik (e.g., `navbar`, `card`, `media object`)

**Contoh:**

```html
<!-- Ini adalah ELEMENT -->
<button class="button">Click me</button>

<!-- Ini adalah COMPONENT (kombinasi elements) -->
<nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item">Logo</a>
  </div>
</nav>
```

#### 2. Modifiers

Cara Bulma menerapkan variasi pada elements/components. Polanya konsisten:

`<taghtml class="element modifier">`

**Contoh Praktis:**

```html
<button class="button is-primary is-large is-rounded">Button Modern</button>
```

- `button` = element dasar
- `is-primary` = modifier warna (biru)
- `is-large` = modifier ukuran
- `is-rounded` = modifier bentuk

**Kategori Modifier:**

- **Warna**: `is-primary`, `is-success`, `is-danger`, `is-warning`, `is-info`, `is-link`, `is-white`, `is-black`, `is-light`, `is-dark`
- **Ukuran**: `is-small`, `is-medium`, `is-large`
- **State**: `is-active`, `is-focused`, `is-loading`, `is-disabled`
- **Style**: `is-outlined`, `is-inverted`, `is-rounded`

#### 3. Helpers

Kelas utilitas untuk **spacing, visibility, typography**, dan lain-lain. Sangat berguna untuk tweaking cepat tanpa custom CSS.

**Contoh Helpers Penting:**

```html
<!-- Typography -->
<p class="has-text-centered">Teks di tengah</p>
<p class="has-text-weight-bold">Tebal</p>
<p class="is-size-4">Ukuran heading 4</p>

<!-- Spacing (margin & padding) -->
<div class="mt-4">Margin top 4 (1.5rem)</div>
<div class="p-3">Padding 3 (0.75rem)</div>
<div class="mx-auto">Margin horizontal auto (centering)</div>

<!-- Visibility -->
<div class="is-hidden-mobile">Sembunyikan di mobile</div>
<div class="is-flex-desktop">Jadi flex di desktop</div>
```

**Sistem Spacing Bulma:**

- `mt-1` = margin-top: 0.25rem
- `mt-2` = margin-top: 0.5rem
- `mt-3` = margin-top: 0.75rem
- `mt-4` = margin-top: 1.5rem
- `mt-5` = margin-top: 3rem
- `mt-6` = margin-top: 4.5rem

#### 4. Responsiveness Breakpoints

Bulma menggunakan **mobile-first approach** dengan breakpoint standar:

| Breakpoint     | Lebar Layar | Prefix Class |
| :------------- | :---------- | :----------- |
| **mobile**     | < 768px     | (default)    |
| **tablet**     | >= 768px    | `tablet`     |
| **desktop**    | >= 1024px   | `desktop`    |
| **widescreen** | >= 1216px   | `widescreen` |
| **fullhd**     | >= 1408px   | `fullhd`     |

**Cara Menggunakan:**

```html
<!-- Sembunyikan di mobile, tampilkan di tablet ke atas -->
<div class="is-hidden-mobile">Konten desktop</div>

<!-- Hanya muncul di mobile -->
<div class="is-hidden-tablet">Konten mobile only</div>

-- Kolom berbeda per breakpoint -->
<div class="columns">
  <div class="column is-full-mobile is-half-tablet is-one-third-desktop">
    Responsif kolom
  </div>
</div>
```

#### 5. Flexbox Grid System

Sistem kolom Bulma dibangun dengan Flexbox. Struktur dasar:

```html
<div class="columns">
  <div class="column">Kolom 1</div>
  <div class="column">Kolom 2</div>
</div>
```

- `columns` = container flexbox
- `column` = item flex yang akan otomatis membagi lebar sama rata
- Anda bisa kontrol lebar dengan `is-3`, `is-half`, `is-one-third`

**Contoh Lebar Spesifik:**

```html
<div class="columns">
  <div class="column is-4">Lebar 4/12 (33%)</div>
  <div class="column is-8">Lebar 8/12 (67%)</div>
</div>

<div class="columns">
  <div class="column is-half">Setengah layar</div>
  <div class="column is-one-quarter">Seperempat layar</div>
  <div class="column">Sisa otomatis</div>
</div>
```

**Multiline Columns:**

```html
<div class="columns is-multiline">
  <div class="column is-half">Baris 1, Kolom 1</div>
  <div class="column is-half">Baris 1, Kolom 2</div>
  <div class="column is-half">Baris 2, Kolom 1 (auto wrap)</div>
</div>
```

---

## Praktik

_Tidak ada praktik koding di sesi ini. Fokus pada pemahaman konsep dasar._

---

## Challenge & Pertanyaan Pemikiran

Sebelum lanjut ke sesi berikutnya, pikirkan:

1. **Kenapa mobile-first approach penting di era modern?** (Hint: 60%+ traffic web berasal dari mobile)
2. **Kapan sebaiknya menggunakan modifier vs membuat custom CSS?** (Hint: Modifier untuk konsistensi design system)
3. **Bagaimana cara menentukan breakpoint yang tepat untuk proyek Anda?** (Hint: Cek analytics user device)

---

## Checklist Sebelum Sesi 2

- [ ] Buat file `index.html` kosong
- [ ] Tambahkan CDN Bulma di `<head>`
- [ ] Buka di browser untuk memastikan Bulma ter-load
- [ ] Siapkan text editor (VS Code recommended)

Di Sesi 2, kita langsung praktik membuat **form login fullscreen** dengan `hero`, `container`, dan `columns`. Pastikan Anda sudah siap!
