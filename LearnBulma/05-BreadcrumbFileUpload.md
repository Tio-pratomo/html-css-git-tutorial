# Breadcrumb & File Upload (Form Lanjutan)**



## Materi: Pengetahuan & Konsep

Dalam aplikasi CRUD (Create, Read, Update, Delete), form input data adalah elemen krusial. Bulma menyediakan komponen khusus untuk meningkatkan UX form: **Breadcrumb** untuk navigasi hierarki dan **File Input** yang *stylable* (tidak seperti input file bawaan browser yang kaku).

### Breadcrumb Component

Breadcrumb menunjukkan lokasi user saat ini dalam hierarki website. Sangat penting untuk UX agar user bisa mundur satu langkah dengan mudah.

**Struktur Breadcrumb:**
```html
<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
```

**Variasi:**
- **Alignment**: `is-centered`, `is-right`
- **Separator Icon**: `has-arrow-separator`, `has-bullet-separator`, `has-dot-separator`
- **Size**: `is-small`, `is-medium`, `is-large`

### File Input Component

Input file default browser (`<input type="file">`) sulit di-style. Bulma membungkusnya dalam label agar bisa dikustomisasi sepenuhnya.

**Struktur File Input:**
```html
<div class="file is-primary">
  <label class="file-label">
    <input class="file-input" type="file" name="resume">
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Choose a file…
      </span>
    </span>
  </label>
</div>
```

**Penjelasan:**
- `file`: Wrapper utama.
- `file-input`: Input asli (disembunyikan secara visual tapi tetap berfungsi).
- `file-cta` (Call To Action): Bagian tombol yang terlihat.
- `file-name`: (Opsional) Menampilkan nama file yang dipilih di sebelah tombol.
- **Modifier**: `is-boxed` (kotak besar), `is-fullwidth` (lebar penuh), `is-right` (posisi tombol di kanan).

**Dengan Nama File (`has-name`):**
```html
<div class="file has-name">
  <label class="file-label">
    <input class="file-input" type="file">
    <span class="file-cta">...</span>
    <span class="file-name">Screen Shot 2025.png</span>
  </label>
</div>
```

***

## Praktik: Membuat Form "Add New Book"

Kita akan membuat halaman baru `add-book.html`. Halaman ini akan berisi navigasi breadcrumb dan form input lengkap termasuk upload cover buku.

### Langkah 1: Setup File Baru

Buat file `add-book.html`. Salin struktur dasar (Navbar + Layout 2 Kolom) dari `dashboard.html` agar konsisten. **Hapus** konten di dalam `column is-9` (bagian kanan).

### Langkah 2: Tambahkan Breadcrumb

Di dalam `column is-9`, tambahkan breadcrumb di paling atas:

```html
<!-- Breadcrumb Navigasi -->
<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
  <ul>
    <li><a href="dashboard.html">Dashboard</a></li>
    <li><a href="dashboard.html">Books</a></li>
    <li class="is-active"><a href="#" aria-current="page">Add New</a></li>
  </ul>
</nav>
```

### Langkah 3: Form Input Data

Di bawah breadcrumb, buat form dalam sebuah `box` atau `card`.

```html
<div class="box">
  <h2 class="title is-4">Add New Book</h2>
  
  <form>
    <!-- 1. Judul Buku (Text Input) -->
    <div class="field">
      <label class="label">Book Title</label>
      <div class="control">
        <input class="input" type="text" placeholder="e.g. Mastering Bulma" required>
      </div>
    </div>

    <div class="columns">
      <!-- 2. Penulis (Text Input - Setengah Lebar) -->
      <div class="column is-6">
        <div class="field">
          <label class="label">Author</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Author Name">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
      </div>
      
      <!-- 3. Kategori (Select Dropdown - Setengah Lebar) -->
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

    <!-- 4. Deskripsi (Textarea) -->
    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea class="textarea" placeholder="Brief summary of the book"></textarea>
      </div>
    </div>

    <!-- 5. Upload Cover (File Input Special) -->
    <div class="field">
      <label class="label">Cover Image</label>
      <div class="file has-name is-fullwidth is-primary">
        <label class="file-label">
          <input class="file-input" type="file" name="cover">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose file…
            </span>
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

### Langkah 4: JavaScript untuk File Input (Opsional)

Secara default, file input Bulma tidak otomatis menampilkan nama file yang dipilih. Kita perlu sedikit JS. Tambahkan script ini di bagian bawah halaman (sebelum `</body>`):

```html
<script>
  const fileInput = document.querySelector('.file-input');
  const fileName = document.querySelector('.file-name');
  
  if (fileInput) {
    fileInput.addEventListener('change', () => {
      // Jika ada file, tampilkan namanya. Jika tidak, revert text.
      if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
      } else {
        fileName.textContent = "No file selected";
      }
    });
  }
</script>
```

***

## Challenge & Modifikasi

### Level 1: Basic
1.  **Ganti Separator Breadcrumb**: Ubah `has-arrow-separator` menjadi `has-bullet-separator` atau `has-succeeds-separator`.
2.  **Boxed File Input**: Ubah class file input menjadi `file is-boxed is-primary has-name`. Lihat perbedaannya (tombol jadi kotak besar dengan icon di atas text).

### Level 2: Intermediate
1.  **Validasi Input**: Tambahkan atribut `required` pada input dan textarea. Tambahkan class `is-danger` pada input jika kosong (perlu JS tambahan untuk validasi real-time).
2.  **Date Picker**: Karena Bulma murni CSS, ia tidak punya datepicker bawaan. Tapi Anda bisa gunakan `<input type="date" class="input">`. Browser modern akan merendernya dengan native date picker yang sudah di-style oleh Bulma (border, padding, shadow).

### Level 3: Advanced
1.  **Preview Image**: Buat script JS agar saat file gambar dipilih, preview gambarnya muncul di bawah input file (gunakan `FileReader` API).

***

## Checklist Sebelum Sesi 6

*   [ ] Halaman `add-book.html` sudah dibuat.
*   [ ] Breadcrumb tampil di atas form.
*   [ ] Form memiliki input judul, penulis (2 kolom), kategori, deskripsi, dan file upload.
*   [ ] Input file menampilkan nama file saat user memilih gambar (jika script JS ditambahkan).
*   [ ] Tombol Cancel mengarahkan kembali ke `dashboard.html`.

**Catatan**: Di Sesi 6, kita akan mempelajari komponen **Tabel (Table)** yang sangat penting untuk dashboard, lengkap dengan fitur **Dropdown Selection** untuk filtering data.
