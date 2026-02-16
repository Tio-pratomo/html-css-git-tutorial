---
title: Navbar & Menu Vertikal (Sidebar)
---

## Materi: Pengetahuan & Konsep

### 1. Arsitektur navigasi di Bulma

Untuk aplikasi model dashboard (seperti admin panel), Bulma menyediakan dua komponen utama:

- `navbar`: navigasi horizontal di bagian atas untuk brand, menu umum, dan user session (login/logout, profile).
- `menu`: navigasi vertikal di samping (sidebar) untuk pindah antar modul: Dashboard, Books, Customers, dll.

Pola umum yang akan kamu pakai berulang kali:

- Atas: `navbar` (global).
- Tengah: `columns` → kiri `aside.menu` (sidebar), kanan konten utama.

Di sesi ini fokus kita: paham struktur dan cara pakai `navbar` dan `menu` secara detil, bukan cuma copy–paste.

### 2. Navbar: struktur dan perilaku responsif

Navbar Bulma otomatis berubah perilaku antara desktop dan mobile:

- Desktop: menu horizontal penuh.
- Mobile: menu utama disembunyikan dan diganti tombol `navbar-burger` (hamburger).

**Struktur dasar:**

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <!-- Brand: Logo & Hamburger -->
  <div class="navbar-brand">
    <a class="navbar-item" href="#">LOGO</a>

    <!-- Hamburger (mobile only) -->
    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="myNavbar"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <!-- Menu utama -->
  <div id="myNavbar" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">Home</a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">Log out</a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

Konsep kunci:

- `navbar-brand`: area kiri yang selalu terlihat, biasanya berisi logo + hamburger.
- `navbar-burger`: tombol garis tiga yang muncul di mobile `< 1024px`; `data-target="myNavbar"` harus cocok dengan `id` di `navbar-menu`.
- `navbar-menu`: container untuk konten navigasi yang akan di-_toggle_ (ditampilkan/ disembunyikan) di mobile.
- `navbar-start` dan `navbar-end`: memposisikan item menu di kiri/kanan dengan Flexbox.

Varian warna navbar:

```html
<nav class="navbar is-primary">...</nav>
<nav class="navbar is-dark">...</nav>
<nav class="navbar is-light">...</nav>
```

Bulma menyediakan modifier warna yang sama seperti komponen lain (`is-primary`, `is-link`, `is-info`, dll.).

### 3. Sidebar: komponen `menu` untuk navigasi vertikal

Sidebar di Bulma biasanya dibangun dengan komponen `menu` di dalam `aside`.

Struktur dasar:

```html
<aside class="menu">
  <p class="menu-label">General</p>
  <ul class="menu-list">
    <li><a class="is-active">Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>

  <p class="menu-label">Administration</p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a>Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
      </ul>
    </li>
  </ul>
</aside>
```

Makna tiap bagian:

- `aside.menu`: container sidebar.
- `menu-label`: judul kecil, uppercase, warna abu-abu (sektionisasi menu).
- `menu-list`: list link.
- `is-active` di `<a>`: menandai menu yang sedang aktif (background biru, teks putih).

Sidebar hampir selalu ditempatkan di kolom kiri dalam layout `columns`, misalnya `column is-3-tablet is-2-desktop`.

### 4. Menggabungkan navbar + sidebar + konten

Kita akan bentuk pola dashboard sederhana:

- `navbar` di atas (full width).
- Di bawahnya, `section` → `container` → `columns`:
  - Kolom kiri: sidebar (`aside.menu`).
  - Kolom kanan: konten (box dan grid statistik sederhana dengan `columns`).

Struktur dasar layout utama:

```html
<div class="section">
  <div class="container is-fluid">
    <div class="columns">
      <!-- Sidebar -->
      <div class="column is-3-tablet is-2-desktop">
        <!-- aside.menu -->
      </div>

      <!-- Konten -->
      <div class="column is-9-tablet is-10-desktop">
        <!-- isi dashboard -->
      </div>
    </div>
  </div>
</div>
```

- `section` memberi padding vertikal yang nyaman.
- `container is-fluid` membuat konten full width tapi tetap ada padding kiri-kanan.
- Proporsi `3/9` (tablet) atau `2/10` (desktop) adalah pola wajar untuk sidebar vs konten.

---

## Praktik: Membuat `dashboard.html` dengan Navbar + Sidebar

### Langkah 1: Buat kerangka `dashboard.html`

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard - Online Book Publisher</title>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </head>
  <body>
    <!-- Navbar akan di sini -->

    <!-- Layout Utama (Sidebar + Content) akan di sini -->
  </body>
</html>
```

Versi aslinya menggunakan Bulma `0.9.4`, tapi prinsip strukturnya sama di `1.x`.

### Langkah 2: Tambahkan navbar di atas

Tempel setelah `<body>`:

```html
<!-- Navbar -->
<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
  <div class="container is-fluid">
    <!-- is-fluid: full width + padding -->
    <div class="navbar-brand">
      <a class="navbar-item has-text-weight-bold is-size-4" href="#">
        <span class="icon-text">
          <span class="icon has-text-primary">
            <i class="fas fa-book-open"></i>
          </span>
          <span>BookPublisher</span>
        </span>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Home</a>
        <a class="navbar-item">Books</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>
          <div class="navbar-dropdown">
            <a class="navbar-item">About</a>
            <a class="navbar-item">Contact</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Report an issue</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="login.html"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
```

Beberapa hal yang perlu kamu sadari:

- `navbar has-shadow` menambah bayangan tipis di bawah, memberi pemisah visual dari konten.
- `container is-fluid` di dalam navbar memastikan konten penuh lebar tapi tetap ada padding.
- `navbar-item has-dropdown is-hoverable` membentuk dropdown sederhana tanpa JS (hanya di desktop).

### Langkah 3: Tambahkan JavaScript untuk toggle navbar di mobile

Bulma tidak menyertakan JS, jadi toggle burger harus kamu tulis sendiri.

Tambahkan sebelum `</body>`:

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0,
    );

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
</script>
```

Pola ini akan kamu ulang nanti untuk komponen lain (modal, tabs, dsb.): toggle kelas `is-active` di elemen tertentu untuk mengubah state visual.

### Langkah 4: Tambahkan layout utama (sidebar + konten)

Di bawah navbar, tambahkan:

```html
<div class="section">
  <div class="container is-fluid">
    <div class="columns">
      <!-- Sidebar -->
      <div class="column is-3-tablet is-2-desktop">
        <aside class="menu">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li>
              <a class="is-active">
                <span class="icon-text">
                  <span class="icon"
                    ><i class="fas fa-tachometer-alt"></i
                  ></span>
                  <span>Dashboard</span>
                </span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon-text">
                  <span class="icon"><i class="fas fa-users"></i></span>
                  <span>Customers</span>
                </span>
              </a>
            </li>
          </ul>

          <p class="menu-label">Content</p>
          <ul class="menu-list">
            <li>
              <a>
                <span class="icon-text">
                  <span class="icon"><i class="fas fa-book"></i></span>
                  <span>Books</span>
                </span>
              </a>
            </li>
            <li>
              <a>Inventory</a>
              <ul>
                <li><a>Stocks</a></li>
                <li><a>Warehouses</a></li>
              </ul>
            </li>
            <li>
              <a>
                <span class="icon-text">
                  <span class="icon"><i class="fas fa-tags"></i></span>
                  <span>Categories</span>
                </span>
              </a>
            </li>
          </ul>

          <p class="menu-label">Transactions</p>
          <ul class="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>
      </div>

      <!-- Konten -->
      <div class="column is-9-tablet is-10-desktop">
        <div class="box has-background-primary-light">
          <h1 class="title is-4">Welcome back, Admin!</h1>
          <p class="subtitle is-6">
            Here is what happening with your store today.
          </p>
        </div>

        <div class="columns is-multiline mt-4">
          <div class="column is-4">
            <div class="box">
              <p class="heading">Orders</p>
              <p class="title">3,456</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="box">
              <p class="heading">Revenue</p>
              <p class="title">$12,000</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="box">
              <p class="heading">Visitors</p>
              <p class="title">56,789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

Hal yang perlu kamu perhatikan:

- Sidebar: `column is-3-tablet is-2-desktop` + `aside.menu` adalah pattern dashboard klasik di Bulma.
- Setiap link menu memakai kombinasi `icon-text` supaya ikon dan teks rapi berjajar.
- Konten memakai `box` + `columns is-multiline` untuk membuat grid statistik sederhana (ini akan nyambung ke sesi tentang grid yang lebih lanjut).

---

## Challenge singkat sebelum Sesi 4

Ambil waktu 10–15 menit untuk eksplorasi:

- Ganti warna navbar jadi `is-primary` atau `is-dark` dan amati bagaimana teks/icon otomatis menyesuaikan kontras.
- Tambahkan `is-hidden-mobile` ke kolom sidebar jika kamu ingin sidebar menghilang di layar kecil, supaya fokus di konten utama.
- Pindahkan `class="is-active"` dari Dashboard ke menu lain (misal Books) dan biasakan diri: “satu halaman = satu link aktif”.

Kalau `dashboard.html` sudah tampil rapi (navbar di atas, sidebar di kiri, konten di kanan, burger jalan di mobile), kita bisa lanjut ke Sesi 4 untuk mulai bermain dengan grid responsif dan komponen umum seperti toolbar dan pagination.
