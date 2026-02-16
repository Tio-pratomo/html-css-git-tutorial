---
title: Grid Responsif untuk Daftar Data (Toolbar, List, Pagination)
---

## Materi: Pengetahuan & Konsep

Di sesi ini kita fokus ke area konten kanan di `dashboard.html`: bagaimana menampilkan _daftar buku_ dengan layout yang rapi dan responsif, bukan lagi kotak statistik dummy.

Tiga komponen Bulma yang kita pakai:

- `level`: layout horizontal fleksibel untuk toolbar (judul + search + tombol aksi).
- `media`: _media object_ untuk list item dengan gambar di kiri, teks di tengah, aksi di kanan.
- `pagination`: navigasi halaman di bagian bawah daftar.

Kombinasi ini adalah pola umum untuk halaman “list data + aksi”: misalnya daftar buku, produk, pengguna, dll.

### 1. Level component sebagai toolbar

`level` dipakai saat kamu ingin membuat baris dengan konten kiri dan kanan yang otomatis sejajar secara vertikal.

Struktur dasar:

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

Karakteristik penting:

- `level` secara default melakukan vertical centering pada anak-anaknya (`align-items: center`).
- Di mobile, `level-left` dan `level-right` akan menjadi tumpuk vertikal (kolom) → ini bagus untuk keterbacaan pada layar kecil.
- Jika ingin memaksa tetap sejajar horizontal di mobile, kamu bisa menambahkan `is-mobile` di `nav class="level is-mobile"`.

Pada kasus “Book Inventory”, kiri berisi judul halaman, kanan berisi search + tombol “Add New”.

### 2. Pagination: navigasi halaman list

`pagination` adalah komponen standar untuk pindah halaman di list data.

Contoh:

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
      >
        46
      </a>
    </li>
    <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
  </ul>
</nav>
```

Modifier yang sering digunakan:

- Alignment: `is-centered`, `is-right`.
- Bentuk & ukuran: `is-rounded`, `is-small`, `is-medium`, `is-large`.

Nanti di sisi JavaScript kamu bisa menghubungkan pagination ini dengan query backend, tapi sekarang fokus dulu ke struktur HTML-nya.

### 3. Media object: pola list dengan gambar

`media` adalah komponen klasik untuk:

- Avatar/gambar di kiri.
- Konten (judul, deskripsi, tag) di tengah.
- Aksi (edit/delete) di kanan.

Struktur:

```html
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="book-cover.jpg" />
    </p>
  </figure>

  <div class="media-content">
    <div class="content">
      <p>
        <strong>Judul Buku</strong> <small>Author</small>
        <br />
        Deskripsi singkat...
      </p>
    </div>
  </div>

  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>
```

Biasanya tiap item list dibungkus lagi dengan `box` supaya ada background putih dan shadow ringan.

---

## Praktik: Mengisi Halaman Daftar Buku di `dashboard.html`

**Target:** kolom kanan (konten) yang sebelumnya berisi box “Welcome back, Admin!” + statistik akan kita ganti

**dengan:** toolbar + daftar buku + pagination.

Anggap kamu sudah punya struktur `dashboard.html` dari Sesi 3 (navbar + sidebar + kolom kanan).

### Langkah 1: Tambahkan toolbar `level`

Di dalam kolom konten (misalnya `div.column.is-9-tablet.is-10-desktop`), hapus konten dummy lama dan ganti dengan:

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

Perhatikan:

- `field has-addons` membuat input dan tombol nempel seperti _input group_.
- `level-right` memuat search dan tombol Add New sejajar di kanan pada layar besar.

### Langkah 2: Tambahkan daftar buku dengan `media` + `box`

Di bawah `<hr />`, tambahkan beberapa item buku contoh:

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

Beberapa pola yang perlu kamu tangkap:

- Setiap item list dibungkus `box` → tampil seperti kartu, tapi lebih ringan dari `card` penuh.
- Tag-tag kecil (`span.tag ...`) dipakai sebagai label kategori; warnanya menunjukkan kategori yang berbeda.
- Tombol aksi `is-small is-outlined` di kanan menjaga layout tetap ringan, tidak didominasi tombol besar.

### Langkah 3: Tambahkan pagination di bawah daftar

Letakkan di paling bawah kolom konten:

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
      >
        46
      </a>
    </li>
    <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
  </ul>
</nav>
```

`is-centered is-rounded` membuat pagination berada di tengah dan tampil membulat.

---

## Challenge & eksplorasi singkat

Kerjakan seperlunya, yang penting kamu mengutak-atik sendiri:

- Ganti URL gambar placeholder dengan cover buku asli (boleh dari Unsplash atau sumber legal lain).
- Ubah warna `tag` per kategori dan lihat kombinasi mana yang nyaman (misal: `is-danger` untuk “Bug”, `is-info` untuk “Docs”, dll.).
- Tambahkan `is-mobile` pada `<nav class="level">` dan lihat perbedaan perilaku toolbar di layar kecil.
- Kalau sudah nyaman, coba eksperimen “Card view”: pakai `columns is-multiline` + `column is-4` dan letakkan `card` di dalamnya sebagai alternatif layout grid.

Kalau `dashboard.html` kamu sekarang sudah punya toolbar, list buku, dan pagination yang tampak rapi dan responsif, kita siap lanjut ke Sesi 5 yang akan fokus pada halaman “Add New Book”: breadcrumb + form lanjutan + file upload.
