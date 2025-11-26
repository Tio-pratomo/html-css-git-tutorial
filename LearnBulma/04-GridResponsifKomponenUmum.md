# Grid Responsif & Komponen Umum (Toolbar & Pagination)

## Materi: Pengetahuan & Konsep

### Mengelola Data Tampilan dengan Bulma

Setelah memiliki layout dasar (Navbar + Sidebar), tantangan berikutnya adalah menampilkan data dengan rapi. Bulma menyediakan 3 komponen kunci untuk ini:

### 1. Level Component (Toolbar)

`level` adalah komponen **horizontal layout** yang sangat fleksibel. Sering digunakan untuk **toolbar**, **statistic bar**, atau header bagian yang berisi judul di kiri dan tombol aksi di kanan.

**Struktur Level:**

```html
<nav class="level">
  <!-- Kiri -->
  <div class="level-left">
    <div class="level-item">
      <h1 class="title">All Books</h1>
    </div>
  </div>

  <!-- Kanan -->
  <div class="level-right">
    <div class="level-item">
      <button class="button">Add New</button>
    </div>
  </div>
</nav>
```

- Secara otomatis vertikal-center (`align-items: center`).
- Di mobile, `level-left` dan `level-right` akan otomatis stack (bertumpuk vertikal) kecuali Anda pakai modifier `is-mobile`.

### 2. Pagination Component

Navigasi halaman untuk data list. Sangat mudah diimplementasikan.

```html
<nav class="pagination is-centered" role="navigation" aria-label="pagination">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
  </ul>
</nav>
```

- Modifier: `is-centered`, `is-right`, `is-rounded`, `is-small`, `is-medium`, `is-large`.

### 3. Media Object

Komponen klasik untuk menampilkan list item seperti komentar, tweet, atau **daftar produk** (gambar di kiri, teks di kanan).

```html
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="book-cover.jpg" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p><strong>Judul Buku</strong> <small>Author</small></p>
    </div>
  </div>
  <div class="media-right">
    <button class="delete"></button>
    <!-- Tombol hapus -->
  </div>
</article>
```

---

## Praktik: Membuat Halaman Daftar Buku

Kita akan memodifikasi file `dashboard.html` dari Sesi 3. Fokus kita sekarang adalah mengisi kolom kanan (`column is-9`) dengan **Daftar Buku** yang memiliki toolbar pencarian dan pagination.

### Langkah 1: Tambahkan Toolbar (Level)

Hapus konten placeholder (kotak statistik) di dalam `column is-9`, dan ganti dengan kode ini:

```html
<!-- TOOLBAR: Judul & Pencarian -->
<nav class="level">
  <!-- Judul Halaman -->
  <div class="level-left">
    <div class="level-item">
      <h1 class="title is-4">Book Inventory</h1>
    </div>
  </div>

  <!-- Tools Kanan: Search & Add Button -->
  <div class="level-right">
    <div class="level-item">
      <div class="field has-addons">
        <!-- Input Group -->
        <p class="control">
          <input class="input" type="text" placeholder="Find a book..." />
        </p>
        <p class="control">
          <button class="button">Search</button>
        </p>
      </div>
    </div>
    <div class="level-item">
      <a class="button is-success">
        <span class="icon is-small"><i class="fas fa-plus"></i></span>
        <span>Add New</span>
      </a>
    </div>
  </div>
</nav>

<hr />
<!-- Garis pemisah -->
```

### Langkah 2: Tambahkan Daftar Buku (Media Object)

Di bawah `<hr>`, tambahkan daftar buku menggunakan `box` dan `media object`. Kita buat 3 contoh item dummy.

```html
<!-- Item Buku 1 -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img
          src="https://bulma.io/assets/images/placeholders/128x128.png"
          alt="Image"
        />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Mastering Bulma CSS</strong> <small>@jeremythomas</small>
          <br />
          Panduan lengkap membuat antarmuka modern dengan framework CSS berbasis
          Flexbox.
          <br />
          <span class="tag is-info is-light">Frontend</span>
          <span class="tag is-warning is-light">CSS</span>
        </p>
      </div>
    </div>
    <div class="media-right">
      <div class="buttons">
        <a class="button is-small is-info is-outlined">
          <span class="icon"><i class="fas fa-edit"></i></span>
        </a>
        <a class="button is-small is-danger is-outlined">
          <span class="icon"><i class="fas fa-trash"></i></span>
        </a>
      </div>
    </div>
  </article>
</div>

<!-- Item Buku 2 -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img
          src="https://bulma.io/assets/images/placeholders/128x128.png"
          alt="Image"
        />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>JavaScript: The Good Parts</strong>
          <small>@douglascrockford</small>
          <br />
          Mengupas tuntas fitur-fitur terbaik JavaScript dan cara menghindari
          bad practices.
          <br />
          <span class="tag is-warning is-light">JavaScript</span>
          <span class="tag is-success is-light">Programming</span>
        </p>
      </div>
    </div>
    <div class="media-right">
      <div class="buttons">
        <a class="button is-small is-info is-outlined">
          <span class="icon"><i class="fas fa-edit"></i></span>
        </a>
        <a class="button is-small is-danger is-outlined">
          <span class="icon"><i class="fas fa-trash"></i></span>
        </a>
      </div>
    </div>
  </article>
</div>

<!-- Item Buku 3 -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img
          src="https://bulma.io/assets/images/placeholders/128x128.png"
          alt="Image"
        />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Clean Code</strong> <small>@unclebob</small>
          <br />
          Buku wajib bagi developer profesional untuk menulis kode yang mudah
          dibaca dan dipelihara.
          <br />
          <span class="tag is-primary is-light">Software Engineering</span>
        </p>
      </div>
    </div>
    <div class="media-right">
      <div class="buttons">
        <a class="button is-small is-info is-outlined">
          <span class="icon"><i class="fas fa-edit"></i></span>
        </a>
        <a class="button is-small is-danger is-outlined">
          <span class="icon"><i class="fas fa-trash"></i></span>
        </a>
      </div>
    </div>
  </article>
</div>
```

### Langkah 3: Tambahkan Pagination

Letakkan kode ini di bagian paling bawah kolom konten (setelah daftar buku).

```html
<nav
  class="pagination is-centered is-rounded"
  role="navigation"
  aria-label="pagination"
>
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
  </ul>
</nav>
```

---

## Challenge & Modifikasi

### Level 1: Basic

1. **Ganti Placeholder Image**: Coba ganti `src` gambar dengan URL cover buku asli dari internet (misal: Amazon atau Google Books).
2. **Tag Warna-Warni**: Modifikasi class `tag` pada setiap buku agar warnanya berbeda-beda sesuai kategori.

### Level 2: Intermediate

1. **Level Mobile**: Tambahkan class `is-mobile` pada `<nav class="level">` agar tombol search dan add new tetap sejajar horizontal di layar HP, tidak bertumpuk.
   - Code: `<nav class="level is-mobile">`

### Level 3: Advanced

1. **Card View**: Ubah tampilan dari `media object` (list view) menjadi `grid card` (gallery view) menggunakan `columns is-multiline`.
   - Buat grid 3 kolom (`column is-4`).
   - Di dalam setiap kolom, masukkan komponen `card` Bulma.

---

## Checklist Sebelum Sesi 5

- [ ] Halaman Dashboard sekarang menampilkan daftar buku.
- [ ] Ada toolbar di atas dengan tombol Search dan Add New.
- [ ] Pagination muncul di bagian bawah.
- [ ] Resize browser: Cek apakah toolbar berantakan di mobile? (Hint: Toolbar standar Bulma akan stack di mobile, ini normal. Gunakan `is-mobile` jika ingin tetap sejajar).

**Catatan**: Di Sesi 5, kita akan membuat halaman **"Add New Book"** yang fokus pada penggunaan form lanjutan seperti **Breadcrumb Navigation** dan **File Upload** yang cantik.
