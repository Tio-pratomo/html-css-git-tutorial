# Notifikasi & Card Component

***

## Materi: Pengetahuan & Konsep

Sebuah aplikasi tidak hanya menampilkan data, tapi juga perlu berkomunikasi dengan user. Bulma menyediakan dua komponen visual yang sangat penting untuk tujuan ini: **Notification** (untuk pesan/feedback) dan **Card** (untuk mengemas konten modular).

### Notification Component

`notification` adalah blok pesan sederhana yang berwarna. Biasa digunakan untuk *alert messages* (Sukses, Error, Info).

**Struktur Notification:**
```html
<div class="notification is-primary">
  <button class="delete"></button>
  <strong>Selamat!</strong> Data buku berhasil disimpan.
</div>
```

**Varian Warna:**
- `is-primary`, `is-link`, `is-info` (Informasi)
- `is-success` (Berhasil)
- `is-warning` (Peringatan)
- `is-danger` (Error/Gagal)
- `is-light` (Versi warna pastel, lebih lembut di mata)

**Penting**: Tombol `<button class="delete">` secara default **tidak berfungsi**. Anda harus menambahkan JavaScript untuk menghilangkan notifikasi saat tombol ini diklik (akan kita bahas di bagian Praktik).

### Card Component

Card adalah komponen container serbaguna yang paling sering digunakan di desain web modern (seperti Facebook feed, Pinterest, listing produk).

**Struktur Lengkap Card:**
```html
<div class="card">
  <!-- 1. Gambar Header -->
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="cover.jpg" alt="Cover">
    </figure>
  </div>
  
  <!-- 2. Konten Utama -->
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="author.jpg" alt="Author">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Judul Buku</p>
        <p class="subtitle is-6">@penulis</p>
      </div>
    </div>

    <div class="content">
      Deskripsi singkat buku di sini.
      <br>
      <time datetime="2025-01-01">11:09 PM - 1 Jan 2025</time>
    </div>
  </div>

  <!-- 3. Footer Actions -->
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
```

***

## Praktik: Dashboard Overview dengan Notifikasi & Cards

Kita akan menyempurnakan `dashboard.html` (atau buat file `overview.html`) untuk menampilkan **Notifikasi Selamat Datang** dan **Grid Kartu Buku Terbaru**.

### Langkah 1: Tambahkan Notifikasi (Dismissable)

Letakkan kode ini di bagian paling atas kolom konten (`column is-9`), sebelum konten lainnya.

```html
<!-- Notifikasi -->
<div id="welcome-notification" class="notification is-info is-light">
  <button class="delete" onclick="document.getElementById('welcome-notification').remove()"></button>
  <div class="icon-text">
    <span class="icon has-text-info">
      <i class="fas fa-info-circle"></i>
    </span>
    <span>
      <strong>Welcome back, Admin!</strong> Anda memiliki 3 pesanan baru yang perlu diproses hari ini.
    </span>
  </div>
</div>
```
*Perhatikan: Kita menambahkan inline JS `onclick` sederhana untuk menghapus elemen saat tombol silang diklik. Ini cara tercepat.*

### Langkah 2: Grid Kartu "Latest Books"

Di bawah notifikasi, kita buat grid 3 kolom yang berisi card buku.

```html
<h3 class="title is-4 mt-5">Latest Additions</h3>

<div class="columns is-multiline">
  
  <!-- Card 1 -->
  <div class="column is-4-desktop is-6-tablet">
    <div class="card">
      <div class="card-image">
        <figure class="image is-2by1"> <!-- Aspect ratio 2:1 -->
          <img src="https://bulma.io/assets/images/placeholders/640x320.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media mb-2"> <!-- mb-2 mengurangi jarak -->
          <div class="media-content">
            <p class="title is-5">Modern CSS</p>
            <p class="subtitle is-7">@alexander</p>
          </div>
        </div>
        <div class="content is-size-7"> <!-- Font kecil -->
          Buku panduan CSS modern dengan Flexbox & Grid.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item has-text-info">View</a>
        <a href="#" class="card-footer-item has-text-grey">Edit</a>
      </footer>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="column is-4-desktop is-6-tablet">
    <div class="card">
      <div class="card-image">
        <figure class="image is-2by1">
          <img src="https://bulma.io/assets/images/placeholders/640x320.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
         <div class="media mb-2">
          <div class="media-content">
            <p class="title is-5">Vue Mastery</p>
            <p class="subtitle is-7">@evanyou</p>
          </div>
        </div>
        <div class="content is-size-7">
          Pelajari framework VueJS dari dasar hingga mahir.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item has-text-info">View</a>
        <a href="#" class="card-footer-item has-text-grey">Edit</a>
      </footer>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="column is-4-desktop is-6-tablet">
    <div class="card">
      <!-- Header warna solid pengganti gambar -->
      <header class="card-header has-background-primary">
        <p class="card-header-title has-text-white">
          Special Promo
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <p class="title is-3 has-text-primary">50% OFF</p>
          <p>Untuk semua buku kategori Programming minggu ini!</p>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item is-uppercase has-text-weight-bold has-text-primary">Claim Now</a>
      </footer>
    </div>
  </div>

</div>
```

### Langkah 3: Tile System (Advanced Layout)

Bulma punya sistem layout unik bernama **Tiles** (mirip Pinterest/Metro UI) untuk menyusun grid yang tidak simetris. Ini alternatif keren selain `columns`.

Coba tambahkan ini di bawah grid kartu tadi:

```html
<h3 class="title is-4 mt-5">Quick Stats (Tile System)</h3>

<div class="tile is-ancestor">
  <!-- Kiri Vertical -->
  <div class="tile is-parent is-vertical is-4">
    <article class="tile is-child notification is-primary">
      <p class="title">Vertical...</p>
      <p class="subtitle">Top tile</p>
    </article>
    <article class="tile is-child notification is-warning">
      <p class="title">...tiles</p>
      <p class="subtitle">Bottom tile</p>
    </article>
  </div>
  
  <!-- Kanan Besar -->
  <div class="tile is-parent">
    <article class="tile is-child notification is-info">
      <p class="title">Middle Tile</p>
      <p class="subtitle">Dengan gambar background</p>
      <figure class="image is-4by3">
        <img src="https://bulma.io/assets/images/placeholders/640x480.png">
      </figure>
    </article>
  </div>
</div>
```

***

## Challenge & Modifikasi

### Level 1: Basic
1.  **Notification Auto-hide**: Buat script JS agar notifikasi hilang otomatis setelah 5 detik (`setTimeout`).
2.  **Card Hover Effect**: Tambahkan custom CSS agar card sedikit terangkat (`transform: translateY(-5px)`) dan bayangan menebal saat di-hover.

### Level 2: Intermediate
1.  **Collapsible Card**: Tambahkan icon panah di header card. Saat diklik, bagian `card-content` tersembunyi (toggle `is-hidden`), menyisakan header saja. Ini berguna untuk widget dashboard.

### Level 3: Advanced
1.  **Modal Card**: Buat agar saat tombol "View" di card diklik, muncul **Modal** yang menampilkan detail buku tersebut. (Modal akan dibahas detail di Sesi 9, tapi Anda bisa intip dokumentasi `modal-card`).

***

## Checklist Sebelum Sesi 9

*   [ ] Notifikasi muncul di atas halaman dan bisa ditutup.
*   [ ] Grid kartu buku tampil rapi (3 kolom di desktop, 2 di tablet, 1 di mobile).
*   [ ] Mencoba sistem Tile untuk layout yang lebih variatif.

**Catatan**: Anda sekarang sudah menguasai hampir seluruh komponen visual utama Bulma! Di **Sesi 9 (Terakhir)**, kita akan fokus pada **Interaktivitas Vanilla JavaScript** untuk membuat UI hidup: Modal Pop-up, Toggle Menu, dan Delete Confirmation. Ini adalah "lem" yang menyatukan semua komponen UI Anda menjadi aplikasi yang berfungsi.
