---
title: Tabel Lanjutan & Inline Editing
---

## Materi: Pengetahuan & Konsep

Di Sesi 6 kamu sudah punya tabel “baca saja”. Di Sesi 7 ini kita naik level: user bisa mengubah data **langsung di baris tabel** tanpa pindah ke halaman form terpisah (inline editing).

**Masalah utamanya:**

kalau kita sembarangan taruh `input` atau `select` di dalam `<td>`, tinggi baris tabel bisa jadi terlalu besar dan kelihatan berantakan. Kita atasi dengan:

1. `is-small` di semua input dan button dalam tabel.
2. Mengatur padding/width supaya compact (pakai helper seperti `p-0`, style inline width kecil, dll.).
3. Menggunakan `field has-addons` untuk input harga + simbol mata uang.

### 1. Kunci tampilan inline editing

Beberapa teknik penting:

- `table is-vcentered`: konten di baris tabel rata tengah secara vertikal, penting saat mencampur teks dan input dalam satu baris.
- `input is-small`, `select is-small`, `button is-small`: menyamakan tinggi semua kontrol form dengan tinggi baris tabel.
- `field has-addons`: menggabungkan tombol/label kecil (misal simbol mata uang) dengan input di sebelahnya.
- Background & state:
  - `has-background-warning-light` untuk baris yang butuh perhatian (misal stok 0).
  - `is-danger` pada input + `help is-danger` untuk pesan error kecil seperti “Restock needed!”.

---

## Praktik: Tabel “Quick Update Stock” (`quick-edit.html` atau di halaman existing)

Kamu bisa:

- Buat file baru `quick-edit.html` dengan struktur layout yang sama seperti `dashboard.html`, atau
- Taruh contoh ini sementara di `inventory.html` menggantikan tabel lama untuk latihan.

### Langkah 1: Struktur tabel dengan input di dalam `<td>`

Masukkan blok ini ke area konten utama (kolom kanan):

```html
<div class="box">
  <h2 class="title is-4 mb-4">Quick Update Stock</h2>

  <div class="table-container">
    <table class="table is-fullwidth is-hoverable is-vcentered">
      <thead>
        <tr>
          <th style="width: 5%;">ID</th>
          <th style="width: 30%;">Product Name</th>
          <th style="width: 20%;">Category</th>
          <th style="width: 15%;">Stock</th>
          <th style="width: 20%;">Price</th>
          <th style="width: 10%;" class="has-text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- ROW 1 -->
        <tr>
          <th>1</th>
          <td>
            <strong>Mastering Bulma</strong>
            <br />
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
            <input
              class="input is-small"
              type="number"
              value="150"
              style="width: 80px;"
            />
          </td>
          <td>
            <!-- Input Price + Currency -->
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static is-small"> $ </a>
              </p>
              <p class="control is-expanded">
                <input class="input is-small" type="number" value="29.99" />
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

        <!-- ROW 2: Out of Stock -->
        <tr class="has-background-warning-light">
          <th>2</th>
          <td>
            <strong>React for Beginners</strong>
            <br />
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
            <input
              class="input is-small is-danger"
              type="number"
              value="0"
              style="width: 80px;"
            />
            <p class="help is-danger m-0" style="font-size: 0.65rem;">
              Restock needed!
            </p>
          </td>
          <td>
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static is-small"> $ </a>
              </p>
              <p class="control is-expanded">
                <input class="input is-small" type="number" value="45.00" />
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

  <!-- Bulk Action Bar -->
  <div class="level mt-4">
    <div class="level-left">
      <p class="is-size-7 has-text-grey">Showing 2 of 145 items</p>
    </div>
    <div class="level-right">
      <button class="button is-primary">Save All Changes</button>
    </div>
  </div>
</div>
```

Hal yang perlu kamu pahami dari contoh ini:

- `table is-vcentered`: sel-sel menjadi rata tengah secara vertikal, membuat input dan teks terlihat sejajar.
- Semua kontrol (select, input, button) memakai `is-small` agar tinggi baris tabel tetap tipis.
- Kolom Price memakai `field has-addons` + `button is-static` untuk simbol `$` sehingga layout rapat dan konsisten.
- Baris kedua memakai `has-background-warning-light` + input `is-danger` + `help is-danger` untuk memberikan _visual feedback_ stok 0 (perlu restock).

### 2. Teknik lanjutan: “invisible” input (kelihatan seperti teks)

Kadang kamu ingin tampilan seperti teks biasa, tapi saat diklik langsung bisa diketik tanpa muncul border besar. Ini bisa dilakukan dengan input “borderless”.

Tambahkan CSS custom di `<head>`:

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

Lalu di dalam tabel:

```html
<td>
  <input
    class="input input-borderless has-text-weight-bold"
    value="Mastering Bulma"
  />
</td>
```

Efeknya:

- Saat tidak fokus: tampil seperti teks biasa (tanpa border, tanpa padding).
- Saat fokus: berubah jadi input normal dengan border dan padding kecil, siap diketik.

Ini trik yang sangat berguna untuk inline editing yang tidak mau tampak “berat” secara visual.

---

## Challenge & latihan singkat

Kalau mau memastikan sudah paham konsepnya, coba:

- Tambahkan kolom paling kiri berisi checkbox (`<input type="checkbox">`) di setiap baris untuk multi-select, dan atur lebar dengan `style="width: 4%;"` agar tetap rapat.
- Tambahkan kolom baru “Total Value” (Stock × Price) dan gunakan JS ringan untuk menghitung ulang tiap kali input Stock atau Price berubah (step advanced di materi).

Kalau tabel “Quick Edit” ini sudah terasa nyaman (tinggi baris tetap tipis, input tidak mengacaukan layout), kita bisa lanjut ke Sesi 8 untuk membahas **Notifikasi & Card** agar dashboard lebih informatif dan enak dipakai.
