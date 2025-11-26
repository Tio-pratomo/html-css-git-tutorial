# Tabel & Dropdown Selection

***

## Materi: Pengetahuan & Konsep

Data tabular adalah inti dari banyak aplikasi dashboard. Bulma menyediakan styling tabel yang bersih namun powerful, serta komponen dropdown untuk menu interaktif yang lebih kompleks daripada sekadar `<select>` biasa.

### Table Component

Tabel di Bulma hanyalah tabel HTML standar (`<table>`) yang diberi class `.table`.

**Modifier Penting:**
*   `is-bordered`: Menambahkan border di semua sel.
*   `is-striped`: Memberi warna selang-seling (zebra striping) agar mudah dibaca.
*   `is-narrow`: Mengurangi padding sel agar tabel lebih padat (cocok untuk data banyak).
*   `is-hoverable`: Highlight baris saat mouse melintas.
*   `is-fullwidth`: Memaksa tabel memenuhi lebar container 100%.

**Responsive Table (Wajib Tahu!):**
Secara default, tabel tidak responsif. Jika kolom terlalu banyak, layout di HP akan pecah. Solusinya adalah membungkus tabel dengan container khusus:

```html
<div class="table-container">
  <table class="table is-fullwidth">
    <!-- isi tabel -->
  </table>
</div>
```
*Wrapper ini akan otomatis memunculkan scrollbar horizontal jika tabel terlalu lebar untuk layar.*

### Dropdown Component

Berbeda dengan `<select>` (yang merupakan form input native), **Dropdown** di Bulma adalah komponen UI custom yang bisa berisi apa saja (link, text, divider). Dropdown membutuhkan sedikit JavaScript untuk berfungsi (klik untuk buka/tutup), atau bisa menggunakan CSS hover.

**Struktur Dropdown:**
```html
<div class="dropdown is-active"> <!-- Class 'is-active' mengontrol visibilitas -->
  <!-- 1. Trigger (Tombol Pemicu) -->
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>

  <!-- 2. Menu (Isi Dropdown) -->
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item"> Link Item </a>
      <a class="dropdown-item is-active"> Active Item </a>
      <hr class="dropdown-divider"> <!-- Garis Pemisah -->
      <div class="dropdown-item"> Custom Text </div>
    </div>
  </div>
</div>
```

**Varian Dropdown:**
*   `is-right`: Menu muncul rata kanan.
*   `is-up`: Menu muncul ke atas (dropup).
*   `is-hoverable`: Menu muncul saat di-hover (tanpa klik/JS).

***

## Praktik: Membuat Halaman Inventory (Tabel Data)

Kita akan membuat halaman baru `inventory.html` untuk menampilkan data buku dalam bentuk tabel yang detail, lengkap dengan fitur filter menggunakan dropdown.

### Langkah 1: Setup File `inventory.html`
Salin struktur dasar dari `dashboard.html`. Kosongkan area konten utama (kolom kanan).

### Langkah 2: Toolbar dengan Dropdown Filter
Di bagian atas kolom konten, buat toolbar level yang berisi judul dan **Dropdown Filter**.

```html
<nav class="level">
  <div class="level-left">
    <div class="level-item">
      <h1 class="title is-4">Book Inventory</h1>
    </div>
  </div>

  <div class="level-right">
    <div class="level-item">
      <!-- DROPDOWN FILTER -->
      <div class="dropdown is-hoverable is-right"> <!-- Pakai is-hoverable biar gampang tanpa JS -->
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
            <span>Filter by Status</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <p>Select status to view:</p>
            </div>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item is-active"> All Books </a>
            <a href="#" class="dropdown-item"> Published </a>
            <a href="#" class="dropdown-item"> Draft </a>
            <a href="#" class="dropdown-item"> Archived </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
```

### Langkah 3: Implementasi Tabel Data
Tambahkan tabel di bawah toolbar. Gunakan `table-container` agar aman di mobile.

```html
<div class="box p-0"> <!-- p-0 untuk menghilangkan padding box agar tabel mentok ke pinggir -->
  <div class="table-container">
    <table class="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th><abbr title="Position">ID</abbr></th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Status</th>
          <th>Price</th>
          <th class="has-text-right">Actions</th> <!-- Rata kanan untuk tombol aksi -->
        </tr>
      </thead>
      <tbody>
        <!-- Row 1 -->
        <tr>
          <th>1</th>
          <td><a href="#" class="has-text-weight-bold">Mastering Bulma</a></td>
          <td>Jeremy Thomas</td>
          <td>Design</td>
          <td><span class="tag is-success is-light">Published</span></td>
          <td>$29.99</td>
          <td class="has-text-right">
            <button class="button is-small is-info is-inverted">
              <span class="icon"><i class="fas fa-edit"></i></span>
            </button>
            <button class="button is-small is-danger is-inverted">
              <span class="icon"><i class="fas fa-trash"></i></span>
            </button>
          </td>
        </tr>

        <!-- Row 2 -->
        <tr>
          <th>2</th>
          <td>Learning React Native</td>
          <td>Bonnie Eisenman</td>
          <td>Mobile Dev</td>
          <td><span class="tag is-warning is-light">Draft</span></td>
          <td>$35.00</td>
          <td class="has-text-right">
             <button class="button is-small is-info is-inverted">
              <span class="icon"><i class="fas fa-edit"></i></span>
            </button>
            <button class="button is-small is-danger is-inverted">
              <span class="icon"><i class="fas fa-trash"></i></span>
            </button>
          </td>
        </tr>

        <!-- Row 3 -->
        <tr>
          <th>3</th>
          <td>Clean Code</td>
          <td>Robert C. Martin</td>
          <td>Engineering</td>
          <td><span class="tag is-danger is-light">Out of Stock</span></td>
          <td>$42.50</td>
          <td class="has-text-right">
             <button class="button is-small is-info is-inverted">
              <span class="icon"><i class="fas fa-edit"></i></span>
            </button>
            <button class="button is-small is-danger is-inverted">
              <span class="icon"><i class="fas fa-trash"></i></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- Pagination (Opsional, copy dari sesi 4) -->
<nav class="pagination is-centered is-small mt-4" role="navigation" aria-label="pagination">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li><a class="pagination-link is-current">1</a></li>
    <li><a class="pagination-link">2</a></li>
    <li><a class="pagination-link">3</a></li>
  </ul>
</nav>
```

***

## JS untuk Dropdown (Jika tidak pakai is-hoverable)

Jika Anda ingin dropdown terbuka dengan **klik** (bukan hover), hapus class `is-hoverable` dari HTML di atas, lalu tambahkan script ini di bagian bawah body:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Cari semua dropdown trigger
  const dropdowns = document.querySelectorAll('.dropdown:not(.is-hoverable)');

  if (dropdowns.length > 0) {
    dropdowns.forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.stopPropagation(); // Mencegah event bubbling
        el.classList.toggle('is-active');
      });
    });

    // Tutup dropdown jika klik di luar area
    document.addEventListener('click', function(e) {
      dropdowns.forEach(function(el) {
        el.classList.remove('is-active');
      });
    });
  }
});
```

***

## Challenge & Modifikasi

### Level 1: Basic
1.  **Selected Row**: Tambahkan class `is-selected` pada salah satu `<tr>` di tabel. Lihat efek warnanya (biasanya background jadi warna primary).
2.  **Status Colors**: Coba variasi tag status:
    *   Published -> `is-success` (Hijau)
    *   Draft -> `is-warning` (Kuning)
    *   Archived -> `is-dark` (Abu-abu)
    *   Deleted -> `is-danger` (Merah)

### Level 2: Intermediate
1.  **Action Dropdown**: Ganti tombol Edit/Delete di kolom Action dengan sebuah **Dropdown menu kecil** (titik tiga vertical). Ini pola UI yang sangat umum untuk menghemat ruang tabel.
    *   Gunakan dropdown dengan modifier `is-right` agar menu tidak keluar layar di sisi kanan.

### Level 3: Advanced
1.  **Sortable Header**: Tambahkan icon panah kecil (`fa-sort`, `fa-sort-up`, `fa-sort-down`) di header kolom "Price" atau "Title". (Secara visual saja dulu, karena fungsi sorting butuh JS logic yang lebih kompleks).

***

## Checklist Sebelum Sesi 7
*   [ ] Halaman `inventory.html` berhasil dibuat.
*   [ ] Tabel tampil rapi dengan zebra striping (`is-striped`).
*   [ ] Dropdown filter berfungsi (baik dengan hover atau klik).
*   [ ] Resize browser ke ukuran mobile: Tabel harus bisa di-scroll ke samping (horizontal scroll) berkat `table-container`, tidak merusak layout halaman.

**Catatan**: Di Sesi 7, kita akan melakukan *deep dive* ke **Tabel Lanjutan**. Kita akan mencoba teknik "Inline Editing" (Form dalam baris tabel) yang sering diminta untuk aplikasi admin yang cepat.
