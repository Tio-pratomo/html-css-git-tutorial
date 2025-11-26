# Tabel Lanjutan & Form dalam Baris (Inline Editing)

***

## Materi: Pengetahuan & Konsep

Pada aplikasi admin produktivitas tinggi (seperti Excel atau Google Sheets), user seringkali ingin mengedit data langsung di tabel tanpa harus membuka halaman form terpisah. Teknik ini disebut **Inline Editing**.

Tantangan utama membuat form di dalam tabel adalah **layout**. Input field standar Bulma (`input`, `select`) memiliki tinggi dan padding default yang bisa membuat baris tabel menjadi "gemuk" dan tidak rapi.

### Teknik Komponen Penting

1.  **Input Modifier**: Gunakan `is-small` pada semua input dan button agar pas dengan tinggi baris tabel.
2.  **No Padding Table**: Kadang kita perlu menghilangkan padding sel tabel agar input field terlihat menyatu penuh (`p-0` helper).
3.  **Field Grouping**: Menggunakan `field has-addons` untuk menggabungkan input harga dengan simbol mata uang dalam satu baris yang rapat.

***

## Praktik: Membuat Tabel "Quick Edit Inventory"

Kita akan memodifikasi tabel dari Sesi 6 (atau buat file baru `quick-edit.html`). Skenarionya: User ingin mengubah **Stock** dan **Harga** buku dengan cepat.

### Langkah 1: Struktur Tabel Khusus

Buat tabel baru. Perhatikan penggunaan input field langsung di dalam `<td>`.

```html
<div class="box">
  <h2 class="title is-4 mb-4">Quick Update Stock</h2>
  
  <div class="table-container">
    <table class="table is-fullwidth is-hoverable is-vcentered">
      <thead>
        <tr>
          <th style="width: 5%;">ID</th> <!-- Lebar kolom fix -->
          <th style="width: 30%;">Product Name</th>
          <th style="width: 20%;">Category</th>
          <th style="width: 15%;">Stock</th>
          <th style="width: 20%;">Price</th>
          <th style="width: 10%;" class="has-text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        
        <!-- ROW 1: Normal Display (Belum mode edit) -->
        <tr>
          <th>1</th>
          <td>
            <strong>Mastering Bulma</strong>
            <br>
            <small class="has-text-grey">SKU-8829</small>
          </td>
          <td>
             <div class="select is-small is-fullwidth">
              <select>
                <option>Design</option>
                <option>Programming</option>
              </select>
            </div>
          </td>
          <td>
            <!-- Input Stock -->
            <input class="input is-small" type="number" value="150" style="width: 80px;">
          </td>
          <td>
            <!-- Input Price dengan Addon Currency -->
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static is-small">
                  $
                </a>
              </p>
              <p class="control is-expanded">
                <input class="input is-small" type="number" value="29.99">
              </p>
            </div>
          </td>
          <td class="has-text-right">
            <button class="button is-small is-success">
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
            </button>
          </td>
        </tr>

        <!-- ROW 2: Contoh State "Out of Stock" (Visual feedback) -->
        <tr class="has-background-warning-light">
          <th>2</th>
          <td>
            <strong>React for Beginners</strong>
            <br>
            <small class="has-text-grey">SKU-1029</small>
          </td>
           <td>
             <div class="select is-small is-fullwidth">
              <select>
                <option>Programming</option>
                <option>Design</option>
              </select>
            </div>
          </td>
          <td>
            <input class="input is-small is-danger" type="number" value="0" style="width: 80px;">
            <p class="help is-danger m-0" style="font-size: 0.65rem;">Restock needed!</p>
          </td>
          <td>
             <div class="field has-addons">
              <p class="control">
                <a class="button is-static is-small">
                  $
                </a>
              </p>
              <p class="control is-expanded">
                <input class="input is-small" type="number" value="45.00">
              </p>
            </div>
          </td>
          <td class="has-text-right">
            <button class="button is-small is-success">
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
            </button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
  
  <!-- Bulk Action Bar di bawah tabel -->
  <div class="level mt-4">
    <div class="level-left">
       <p class="is-size-7 has-text-grey">Showing 2 of 145 items</p>
    </div>
    <div class="level-right">
      <button class="button is-primary">
        Save All Changes
      </button>
    </div>
  </div>
</div>
```

**Analisis Kode:**
1.  **`is-vcentered`**: Class pada `<table>` untuk memastikan konten vertikal rata tengah (sangat penting saat mencampur text dan input).
2.  **`input is-small`**: Kunci agar tabel tidak meledak tingginya.
3.  **`field has-addons`**: Digunakan di kolom Price untuk menempelkan simbol "$" dengan input angka.
4.  **Visual Feedback**: Row 2 diberi background kuning tipis (`has-background-warning-light`) dan input merah (`is-danger`) untuk menandai stok kosong.

***

## Teknik Lanjutan: "Invisible" Input

Kadang Anda ingin tampilan seperti teks biasa, tapi saat diklik berubah jadi input. Cara termudah di Bulma tanpa JS berat adalah membuat input borderless.

Tambahkan CSS custom sedikit di `<head>`:

```html
<style>
  .input-borderless {
    border: none;
    background: transparent;
    box-shadow: none;
    padding: 0;
    height: auto;
  }
  .input-borderless:focus {
    background: white;
    border: 1px solid #dbdbdb;
    box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
    padding: 4px 8px;
  }
</style>
```

Lalu aplikasikan di tabel:
```html
<td>
  <input class="input input-borderless has-text-weight-bold" value="Mastering Bulma">
</td>
```
*Efek: Terlihat seperti teks biasa, tapi bisa langsung diketik saat di-klik.*

***

## Challenge & Modifikasi

### Level 1: Basic
1.  **Checkbox Row**: Tambahkan kolom baru paling kiri berisi `<input type="checkbox">` untuk memilih multiple rows.
2.  **Status Toggle**: Buat tombol status "Active/Inactive" di tabel. Gunakan elemen `<button class="button is-small is-rounded is-success is-outlined">Active</button>`.

### Level 2: Intermediate
1.  **Delete Confirmation**: Modifikasi tombol delete agar saat diklik, row tersebut berubah background menjadi merah (`has-background-danger-light`) dan tombol berubah jadi "Confirm?". (Butuh JS sederhana untuk toggle class).

### Level 3: Advanced
1.  **Total Calculation**: (JS Challenge) Buat script sederhana agar ketika input **Stock** atau **Price** berubah, kolom baru "Total Value" (Stock * Price) otomatis terupdate secara real-time.

***

## Checklist Sebelum Sesi 8
*   [ ] Tabel "Quick Edit" tampil rapi.
*   [ ] Input field tidak membuat baris tabel menjadi terlalu tinggi.
*   [ ] Kolom Price memiliki addon simbol mata uang ($).
*   [ ] Tombol "Save All Changes" ada di bawah tabel.

**Catatan**: Sesi 7 ini sangat padat teknik layout tabel. Pastikan Anda nyaman dengan konsep `is-vcentered` dan penggunaan input di dalam `td`. Di **Sesi 8**, kita akan beralih ke komponen **Notifikasi & Card** untuk mempercantik dashboard dan memberikan feedback ke user.
