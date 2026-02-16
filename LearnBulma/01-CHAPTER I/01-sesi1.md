---
title: Pengenalan Bulma & Terminologi Dasar
---

## Materi: Pengetahuan & Konsep

### 1. Apa itu Bulma?

Bulma adalah framework CSS modern yang semua sistem layout dan komponennya dibangun di atas Flexbox, bukan float atau grid tradisional seperti generasi lama Bootstrap.

Artinya, cara berpikir layout di Bulma sangat dekat dengan cara kerja Flexbox. Dimana itu terkait baris(row), kolom, alignment, dan wrapping.

Bulma bersifat **pure** CSS. Jadi, tidak ada JavaScript bawaan, sehingga kamu bebas pakai dengan vanilla JS atau framework apa pun (React, Vue, dsb.).

Seluruh style Bulma dikemas dalam satu file CSS yang relatif ringan, setelah dimininifikasi via CDN.

### 2. Kenapa memilih Bulma?

Beberapa alasan praktis memilih Bulma sebagai fondasi UI:

- **Berbasis Flexbox**. Sehingga membuat layout responsif (kolom, center, alignment) jauh lebih intuitif dibanding trik float lama.
- **Modular** .Kalau nanti pakai NPM, kamu bisa impor hanya bagian yang kamu butuh (misalnya cuma grid + form), sehingga CSS lebih ramping.
- **Tanpa dependency JS**. Jadi kecil risiko konflik dengan framework JavaScript lain dan lebih mudah dipahami pemula HTML/CSS.
- **Menggunakan fitur CSS3 modern** seperti CSS variables, sehingga kustomisasi warna dan tema bisa dilakukan lebih rapi.

Intinya, Bulma cocok sebagai “bahasa desain” yang konsisten: kamu fokus ke HTML + kelas-kelas Bulma, tanpa pusing JS dulu.

### 3. Instalasi cepat via CDN

Cara paling sederhana untuk mulai adalah lewat CDN di bagian `<head>` file HTML kamu.

**Contoh :**

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Belajar Bulma - Sesi 1</title>

    <!-- Bulma via CDN -->
    <!-- highlight-start -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"
    />
    <!-- highlight-end -->
  </head>
  <body>
    <h1 class="title">Halo Bulma</h1>
  </body>
</html>
```

:::note[Catatan]
**Selalu cek halaman instalasi resmi Bulma untuk versi terbaru dan contoh CDN terkini.**

https://bulma.io/documentation/start/installation/
:::

### 4. Elements vs Components

Bulma membedakan dua hal besar:

- **Elements**: tag HTML dasar yang sudah diberi styling, misalnya `button`, `input`, `title`, `box`.
- **Components**: kumpulan beberapa element yang dibentuk jadi blok UI utuh, misalnya `navbar`, `card`, `media object`.

Contoh singkat:

```html
<!-- ELEMENT: 1 tombol -->
<button class="button">Click me</button>

<!-- COMPONENT: navbar yang berisi beberapa element -->
<nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item">Logo</a>
  </div>
</nav>
```

**Pola ini penting**. Saat kamu lihat dokumentasi, kamu bisa bedakan “ini hanya styling untuk tag dasar” vs “ini blok UI kompleks”.

### 5. Modifiers

**Modifiers** adalah kelas tambahan yang mengubah variasi element/component: warna, ukuran, state, atau style khusus.

Polanya sangat konsisten: element utama + satu atau lebih kelas modifier.

Contoh:

```html
<button class="button is-primary is-large is-rounded">Button Modern</button>
```

- `button` → element dasar.
- `is-primary` → modifier warna utama (biru).
- `is-large` → modifier ukuran besar.
- `is-rounded` → modifier bentuk ujung membulat.

Kategori modifier yang sering kamu pakai:

- Warna: `is-primary`, `is-success`, `is-danger`, `is-warning`, `is-info`, `is-link`, `is-light`, `is-dark`, dll.
- Ukuran: `is-small`, `is-medium`, `is-large`.
- State: `is-active`, `is-focused`, `is-loading`, `is-disabled`.
- Style: `is-outlined`, `is-inverted`, `is-rounded`.

Nanti di semua komponen Bulma, pola ini muncul terus, jadi hafalkan polanya, tidak perlu menghafal semua nama classnya satu-satu. Cek kembali ke dokumentasi jika kesulitan atau lupa.

### 6. Helpers (utility classes)

**Helpers** adalah kelas utilitas kecil untuk kebutuhan umum seperti teks, spacing, dan visibility, sehingga kamu jarang perlu bikin CSS custom untuk hal-hal standar.

Beberapa contoh penting:

```html
<!-- Typography -->
<p class="has-text-centered">Teks di tengah</p>
<p class="has-text-weight-bold">Teks tebal</p>
<p class="is-size-4">Ukuran mirip heading 4</p>

<!-- Spacing -->
<div class="mt-4">Margin top 4</div>
<div class="p-3">Padding 3</div>
<div class="mx-auto">Margin horizontal auto (center)</div>

<!-- Visibility -->
<div class="is-hidden-mobile">Sembunyi di mobile</div>
<div class="is-flex-desktop">Jadi flex di desktop</div>
```

Sistem spacing Bulma memakai skala angka, misalnya `mt-1` sampai `mt-6` untuk `margin-top` dengan nilai rem yang makin besar. Ini nanti sangat berguna saat kamu merapikan layout tanpa nulis CSS baru.

### 7. Responsiveness & breakpoints

Bulma memakai pendekatan mobile-first, artinya gaya default ditujukan untuk layar kecil (mobile), lalu di-_override_ untuk layar lebih besar dengan breakpoint standar.

Ringkasan breakpoint:

| Breakpoint | Lebar layar | Prefix class |
| ---------- | ----------- | ------------ |
| mobile     | < 768px     | (default)    |
| tablet     | ≥ 768px     | `tablet`     |
| desktop    | ≥ 1024px    | `desktop`    |
| widescreen | ≥ 1216px    | `widescreen` |
| fullhd     | ≥ 1408px    | `fullhd`     |

Contoh:

```html
<!-- Sembunyikan di mobile, tampil di tablet ke atas -->
<div class="is-hidden-mobile">Konten untuk layar besar</div>

<!-- Hanya muncul di mobile -->
<div class="is-hidden-tablet">Konten khusus mobile</div>
```

Nanti pola yang sama akan dipakai di columns: misalnya `is-full-mobile is-half-tablet is-one-third-desktop` untuk mengatur lebar per breakpoint.

### 8. Sekilas sistem grid (columns) di Bulma

Detail grid dan columns akan kita bedah di beberapa sesi khusus, tapi di Sesi 1 kamu perlu tahu gambaran besarnya dulu.

Struktur umum:

```html
<div class="columns">
  <div class="column">Kolom 1</div>
  <div class="column">Kolom 2</div>
</div>
```

- `columns` adalah container Flexbox (baris).
- `column` adalah item flex yang otomatis membagi lebar sama rata jika tidak diberi ukuran spesifik.

Nanti kamu bisa memberi ukuran seperti `is-4`, `is-8`, `is-half`, `is-one-third`, dsb., untuk membuat kombinasi 12 kolom yang fleksibel.
Di sesi-sesi grid berikutnya, kita akan bedah pola-pola ini pelan-pelan sampai kamu benar-benar nyaman.

---

## Praktik

Di Sesi 1, praktiknya ringan: fokus menyiapkan lingkungan kerja dan merasakan dasar-dasar Bulma tanpa masuk layout rumit.

### Langkah 1: Siapkan file HTML dasar

Buat file `index.html` kosong, lalu isi dengan skeleton berikut:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Belajar Bulma - Sesi 1</title>

    <!-- TODO: Tambahkan Bulma di langkah 2 -->
  </head>
  <body>
    <h1>Belajar Bulma</h1>
    <p>Kalau teks ini tampil, HTML dasar sudah jalan.</p>
  </body>
</html>
```

Buka di browser untuk memastikan file bisa diload dengan benar.

### Langkah 2: Tambahkan CDN Bulma

Ganti bagian `<head>` dengan yang sudah berisi Bulma:

```html
<head>
  <meta charset="UTF-8" />
  <title>Belajar Bulma - Sesi 1</title>

  <!-- Bulma via CDN -->
  <!-- highlight-start -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"
  />
  <!-- highlight-end -->
</head>
```

Refresh browser dan tambahkan sedikit kode untuk menguji Bulma:

```html
<body>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">Selamat Datang di Bulma</h1>
      <p class="subtitle has-text-centered">
        Ini halaman pertama kamu dengan Bulma.
      </p>

      <div class="has-text-centered mt-5">
        <button class="button is-primary is-large is-rounded">
          Tombol Utama
        </button>
      </div>
    </div>
  </section>
</body>
```

Perhatikan:

- `section` + `container` adalah pola layout dasar Bulma yang akan sering kita pakai.
- `title`, `subtitle`, `has-text-centered`, `mt-5` adalah kombinasi element dan helpers.
- `button is-primary is-large is-rounded` menunjukkan pola modifiers yang akan muncul di seluruh dokumentasi Bulma.

### Langkah 3: Coba beberapa helpers sendiri

Tanpa mengubah struktur besar, tambahkan beberapa elemen uji di bawah tombol:

```html
<div class="mt-6">
  <p class="has-text-weight-bold">Contoh teks tebal.</p>
  <p class="is-size-4 has-text-info">
    Contoh teks ukuran besar dengan warna info.
  </p>
  <p class="is-hidden-mobile">
    Teks ini hanya terlihat di tablet/desktop ke atas.
  </p>
  <p class="is-hidden-tablet">Teks ini hanya terlihat di mobile.</p>
</div>
```

Lalu:

- Resize jendela browser (atau gunakan dev tools: mode mobile/desktop) untuk melihat efek `is-hidden-mobile` dan `is-hidden-tablet`.
- Ubah modifier warna (`has-text-info` menjadi `has-text-danger`, `is-primary` menjadi `is-success`, dll.) untuk membiasakan diri dengan pola nama kelas Bulma.

### Checklist sebelum Sesi 2

Pastikan sebelum lanjut:

- [x] Kamu punya `index.html` dengan Bulma CDN terpasang dan berhasil di-load di browser.
- [x] Kamu sudah mencoba minimal 1 tombol dengan beberapa modifier (`is-primary`, `is-danger`, `is-large`, dll.).
- [x] Kamu sudah bermain dengan minimal 3 helpers: satu typography, satu spacing, satu visibility.

Di Sesi 2, kita mulai masuk ke layout yang sedikit lebih serius: membuat form login fullscreen menggunakan `hero`, `container`, dan `columns`, tapi dengan penjelasan “ini cara pakai layout-nya”, bukan cuma ikut tempel kode.
