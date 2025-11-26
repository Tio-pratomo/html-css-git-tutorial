# Navigasi Menu Vertikal

## Materi: Pengetahuan & Konsep

### Arsitektur Navigasi Bulma

Navigasi adalah tulang punggung aplikasi web. Bulma menyediakan dua komponen utama yang saling melengkapi untuk dashboard aplikasi:

1. **Navbar**: Menu horizontal di bagian atas untuk navigasi global, branding, dan user profile.
2. **Menu (Sidebar)**: Menu vertikal di sisi kiri untuk navigasi antar modul/halaman internal.

### 1. Navbar Component

Navbar Bulma sangat responsif. Di desktop, menu tampil horizontal. Di mobile, menu otomatis _collapse_ menjadi "hamburger menu" yang bisa di-toggle.

**Struktur Dasar Navbar:**

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <!-- 1. Brand: Logo & Hamburger (Selalu terlihat) -->
  <div class="navbar-brand">
    <a class="navbar-item" href="#"> LOGO </a>

    <!-- Hamburger Button (Mobile Only) -->
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

  <!-- 2. Menu: Link Navigasi (Hidden di mobile, Visible di desktop) -->
  <div id="myNavbar" class="navbar-menu">
    <!-- Kiri (Start) -->
    <div class="navbar-start">
      <a class="navbar-item"> Home </a>
    </div>

    <!-- Kanan (End) -->
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary"> Log out </a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

**Poin Penting:**

- `navbar-brand`: Bagian kiri yang selalu muncul (Logo + Hamburger).
- `navbar-burger`: Tombol garis tiga yang hanya muncul di mobile (`< 1024px`). **Wajib** ada `data-target` yang sesuai dengan ID `navbar-menu` agar JavaScript tahu menu mana yang dibuka.
- `navbar-menu`: Wrapper utama menu yang akan disembunyikan di mobile kecuali di-toggle.
- `navbar-start` vs `navbar-end`: Mengatur posisi menu (kiri vs kanan) menggunakan `justify-content: flex-start/end`.

**Varian Warna Navbar:**

- `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`, `is-black`, `is-dark`, `is-light`, `is-white`.
- Contoh: `<nav class="navbar is-link">`

### 2. Menu Component (Sidebar)

Komponen `menu` digunakan untuk membuat navigasi vertikal hierarkis, sangat umum untuk dashboard admin.

**Struktur Menu:**

```html
<aside class="menu">
  <p class="menu-label">General</p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>

  <p class="menu-label">Administration</p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <!-- Active State -->
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
      </ul>
    </li>
  </ul>
</aside>
```

**Styling Menu:**

- `menu-label`: Heading kecil warna abu-abu (uppercase).
- `menu-list`: List navigasi utama.
- `is-active`: Class untuk menandai halaman yang sedang dibuka (background biru default).

---

## Praktik: Membuat Layout Dashboard

Kita akan membuat file baru `dashboard.html` yang menggabungkan **Navbar** di atas dan **Layout 2 Kolom** (Sidebar kiri + Konten kanan).

### Langkah 1: Struktur Dasar Dashboard

Buat file `dashboard.html`. Kita gunakan struktur HTML standar Bulma seperti di sesi sebelumnya.

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard - Online Book Publisher</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
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

### Langkah 2: Implementasi Navbar

Letakkan kode ini tepat setelah `<body>`. Kita buat navbar warna putih dengan bayangan tipis (`has-shadow`).

```html
<!-- Navbar -->
<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
  <div class="container is-fluid">
    <!-- Pakai is-fluid agar full width tapi ada padding -->
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
        <a class="navbar-item"> Home </a>
        <a class="navbar-item"> Books </a>

        <!-- Dropdown Menu -->
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>
          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="login.html">
              <!-- Link ke file sesi 2 -->
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
```

### Langkah 3: JavaScript untuk Mobile Toggle

**Penting!** Navbar burger Bulma **tidak** otomatis jalan. Anda perlu menambahkan sedikit JS untuk mengaktifkan toggle `is-active`.

Tambahkan script ini tepat sebelum tag penutup `</body>`:

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Ambil semua elemen "navbar-burger"
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Cek jika ada navbar burger
    if ($navbarBurgers.length > 0) {
      // Tambahkan event click pada setiap burger
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Ambil target dari atribut "data-target"
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle class "is-active" pada "navbar-burger" dan "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
</script>
```

### Langkah 4: Layout Grid Utama (Sidebar & Content)

Di bawah Navbar, kita buat grid sistem 2 kolom.

- Kolom Kiri (3/12): Sidebar Menu
- Kolom Kanan (9/12): Konten Utama

```html
<div class="section">
  <!-- Section memberi padding atas-bawah -->
  <div class="container is-fluid">
    <div class="columns">
      <!-- Sidebar Column (Hidden di mobile agar rapi, atau bisa tetap dimunculkan) -->
      <div class="column is-3-tablet is-2-desktop">
        <aside class="menu">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li>
              <a class="is-active"
                ><span class="icon-text"
                  ><span class="icon"
                    ><i class="fas fa-tachometer-alt"></i></span
                  ><span>Dashboard</span></span
                ></a
              >
            </li>
            <li>
              <a
                ><span class="icon-text"
                  ><span class="icon"><i class="fas fa-users"></i></span
                  ><span>Customers</span></span
                ></a
              >
            </li>
          </ul>

          <p class="menu-label">Content</p>
          <ul class="menu-list">
            <li>
              <a
                ><span class="icon-text"
                  ><span class="icon"><i class="fas fa-book"></i></span
                  ><span>Books</span></span
                ></a
              >
            </li>
            <li>
              <a>Inventory</a>
              <ul>
                <li><a>Stocks</a></li>
                <li><a>Warehouses</a></li>
              </ul>
            </li>
            <li>
              <a
                ><span class="icon-text"
                  ><span class="icon"><i class="fas fa-tags"></i></span
                  ><span>Categories</span></span
                ></a
              >
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

      <!-- Content Column -->
      <div class="column is-9-tablet is-10-desktop">
        <!-- Placeholder Konten Dashboard -->
        <div class="box has-background-primary-light">
          <h1 class="title is-4">Welcome back, Admin!</h1>
          <p class="subtitle is-6">
            Here is what happening with your store today.
          </p>
        </div>

        <!-- Contoh Grid Statistik Sederhana -->
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

---

## Challenge & Modifikasi

### Level 1: Basic

```
1.  **Ganti warna Navbar**: Coba ubah `<nav class="navbar has-shadow">` menjadi `<nav class="navbar is-primary">`. Perhatikan warna teks otomatis berubah jadi putih.
```

2. **Navbar Fixed**: Tambahkan class `is-fixed-top` pada `<nav>`.
   - _Note_: Anda harus menambahkan class `has-navbar-fixed-top` pada tag `<html>` agar konten tidak tertutup navbar.

### Level 2: Intermediate

1. **Collapsible Sidebar**: Buat sidebar hilang total di mobile (`is-hidden-mobile` pada kolom sidebar) untuk menghemat ruang.
2. **Active State Logic**: Coba pindahkan class `is-active` dari menu Dashboard ke menu Customers secara manual di HTML untuk melihat efek visualnya.

### Level 3: Advanced (Pre-Sesi 9)

1. **JS Toggle Sidebar**: Buat tombol baru di Navbar yang bisa menyembunyikan/menampilkan sidebar di desktop (Toggle class `is-hidden` pada kolom sidebar).

---

## Checklist Sebelum Sesi 4

- [ ] Navbar tampil rapi di Desktop.
- [ ] Resize browser ke ukuran HP: Hamburger menu muncul?
- [ ] Klik Hamburger menu: Menu drop-down terbuka? (Jika tidak, cek script JS).
- [ ] Sidebar menu tampil di kiri, konten di kanan.

Di Sesi 4, kita akan mengisi area konten kosong tersebut dengan **Grid Responsif yang lebih kompleks** menggunakan komponen `level`, `card`, dan `pagination` untuk menampilkan data buku.
