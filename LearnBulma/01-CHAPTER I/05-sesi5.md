---
title: Breadcrumb & File Upload (Form Lanjutan)
---

## Materi: Pengetahuan & Konsep

Di sesi ini kita lengkapi alur CRUD: dari list buku (Sesi 4) ke halaman **Add New Book** dengan navigasi breadcrumb dan input upload cover yang proper.

### 1. Breadcrumb: navigasi hierarki

Breadcrumb dipakai untuk menunjukkan “posisi” user di dalam hierarki halaman, misalnya: **Dashboard → Books → Add New**. Ini membantu user paham konteks dan mudah mundur satu level.

Struktur dasar:

```html
<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active">
      <a href="#" aria-current="page">Breadcrumb</a>
    </li>
  </ul>
</nav>
```

Beberapa variasi penting:

- Alignment: `is-centered`, `is-right`.
- Separator: `has-arrow-separator`, `has-bullet-separator`, `has-dot-separator`.
- Size: `is-small`, `is-medium`, `is-large`.

Untuk kasus kita, pattern praktis adalah panah (`has-arrow-separator`) karena paling umum di aplikasi admin.

### 2. File input Bulma: membungkus `<input type="file">`

Input file bawaan browser susah di-style; Bulma mengatasinya dengan membungkus input di dalam label dan beberapa span.

Struktur dasar:

```html
<div class="file is-primary">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">Choose a file…</span>
    </span>
  </label>
</div>
```

Elemen penting:

- `file`: wrapper utama komponen file Bulma.
- `file-input`: input asli yang disembunyikan visualnya tapi tetap berfungsi.
- `file-cta`: area tombol (call-to-action) yang terlihat dan bisa di-style.
- `file-name`: opsional, untuk menampilkan nama file yang dipilih.

Saat kamu ingin menampilkan nama file:

```html
<div class="file has-name">
  <label class="file-label">
    <input class="file-input" type="file" />
    <span class="file-cta">...</span>
    <span class="file-name">Screen Shot 2025.png</span>
  </label>
</div>
```

Modifier penting:

- `is-boxed`: tampilan kotak besar (ikon di atas, teks di bawah).
- `is-fullwidth`: lebar mengisi container.
- `is-primary` / `is-info` / `is-danger`: warna.
- `is-right`: posisi tombol di kanan saat memakai `has-name`.

---

## Praktik: Halaman `add-book.html` (Add New Book)

Tujuan: buat halaman **Add New Book** dengan:

- Navbar + Sidebar sama seperti `dashboard.html` (biar konsisten).
- Breadcrumb di atas form.
- Form lengkap: judul, author, category, description, cover image (file upload), tombol submit/cancel.

### Langkah 1: Setup file baru dari `dashboard.html`

1. Buat file `add-book.html`.
2. Copy seluruh struktur HTML dari `dashboard.html` (termasuk `<head>`, navbar, layout 2 kolom, dan script burger navbar).
3. Di kolom kanan (`column is-9-tablet is-10-desktop`), **hapus** konten lama (toolbar + list + pagination) sehingga area kanan kosong.

Kita akan isi area kosong itu dengan breadcrumb + form.

### Langkah 2: Tambahkan breadcrumb di atas form

Di dalam kolom kanan, paling atas:

```html
<!-- Breadcrumb Navigasi -->
<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
  <ul>
    <li><a href="dashboard.html">Dashboard</a></li>
    <li><a href="dashboard.html">Books</a></li>
    <li class="is-active">
      <a href="#" aria-current="page">Add New</a>
    </li>
  </ul>
</nav>
```

Pattern ini jelas: “kamu di halaman Add New, tapi konteksnya adalah modul Books di dalam Dashboard”.

### Langkah 3: Bangun form “Add New Book”

Di bawah breadcrumb, buat kotak form:

```html
<div class="box">
  <h2 class="title is-4">Add New Book</h2>

  <form>
    <!-- 1. Judul Buku -->
    <div class="field">
      <label class="label">Book Title</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="e.g. Mastering Bulma"
          required
        />
      </div>
    </div>

    <div class="columns">
      <!-- 2. Author (setengah lebar) -->
      <div class="column is-6">
        <div class="field">
          <label class="label">Author</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Author Name" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
      </div>

      <!-- 3. Category (setengah lebar) -->
      <div class="column is-6">
        <div class="field">
          <label class="label">Category</label>
          <div class="control has-icons-left">
            <div class="select is-fullwidth">
              <select>
                <option>Select category</option>
                <option>Programming</option>
                <option>Design</option>
                <option>Business</option>
              </select>
            </div>
            <span class="icon is-small is-left">
              <i class="fas fa-tag"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. Description -->
    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Brief summary of the book"
        ></textarea>
      </div>
    </div>

    <!-- 5. Cover Image (file input) -->
    <div class="field">
      <label class="label">Cover Image</label>
      <div class="file has-name is-fullwidth is-primary">
        <label class="file-label">
          <input class="file-input" type="file" name="cover" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Choose file…</span>
          </span>
          <span class="file-name" id="file-name-display">
            No file selected
          </span>
        </label>
      </div>
      <p class="help">Allowed formats: .jpg, .png (Max 2MB)</p>
    </div>

    <!-- 6. Tombol Aksi -->
    <div class="field is-grouped mt-5">
      <div class="control">
        <button class="button is-primary">Submit Book</button>
      </div>
      <div class="control">
        <a href="dashboard.html" class="button is-light">Cancel</a>
      </div>
    </div>
  </form>
</div>
```

Pola penting:

- Kombinasi `columns` untuk membagi form jadi dua kolom (author dan category) di layar lebar, tapi otomatis bertumpuk di mobile.
- `select is-fullwidth` di dalam `control has-icons-left` menjaga dropdown selebar kolom dan ikon rata kiri.
- `file has-name is-fullwidth is-primary` menghasilkan file input berwarna dengan area nama file di kanan.

### Langkah 4: JS sederhana untuk menampilkan nama file

Agar `span.file-name` menampilkan nama file yang dipilih, tambahkan script ini sebelum `</body>` (setelah script navbar burger):

```html
<script>
  const fileInput = document.querySelector(".file-input");
  const fileName = document.querySelector(".file-name");

  if (fileInput) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
      } else {
        fileName.textContent = "No file selected";
      }
    });
  }
</script>
```

Ini contoh integrasi _ringan_ antara Bulma (pure CSS) dengan vanilla JavaScript: kita hanya memanipulasi teks berdasarkan state input file, tanpa menyentuh style-nya.

---

## Challenge singkat sebelum Sesi 6

- Ubah separator breadcrumb: coba `has-bullet-separator` atau `has-dot-separator` dan pilih yang paling nyaman untuk dashboard kamu.
- Ubah file input menjadi `file is-boxed is-primary has-name` dan amati perbedaan layout.
- Tambahkan `<input type="date" class="input">` untuk field “Published Date”, letakkan di sebelah Category pakai `columns` yang sama.

Kalau `add-book.html` sudah jadi (breadcrumb tampil, form lengkap, upload cover bekerja dan nama file muncul), kita siap masuk Sesi 6 yang akan membahas **Table + Dropdown** untuk data grid di dashboard.
