---
title: Notifikasi & Card Component
---

## Materi: Pengetahuan & Konsep

Aplikasi bukan cuma “tampil data”, tapi juga harus **berkomunikasi** dengan user (feedback sukses/gagal) dan mengemas konten dalam blok-blok rapi yang enak dilihat.

Di Bulma, dua komponen kuncinya:

- `notification`: blok pesan singkat berwarna (alert/feedback).
- `card`: container modular untuk satu potong konten (satu buku, satu promo, satu artikel, dll.).

### 1. Notification: pesan singkat yang bisa ditutup

**Struktur dasar:**

```html
<div class="notification is-primary">
  <button class="delete"></button>
  <strong>Selamat!</strong> Data buku berhasil disimpan.
</div>
```

Poin penting:

- `notification`: wrapper utama, punya **padding** + **background**.
- **Tambah modifier warna:**
  - `is-success` → sukses.
  - `is-danger` → error.
  - `is-warning` → peringatan.
  - `is-info` / `is-primary` → info umum.
  - `is-light` → versi pastel yang lebih lembut.
- `<button class="delete">` hanya icon silang, **belum ada perilaku**; kamu yang harus menambahkan JS untuk menghapus/hide notifikasi.

### 2. Card: blok konten modular

Card memecah satu item konten menjadi bagian-bagian jelas: gambar, teks, dan aksi.

**Struktur lengkap:**

```html
<div class="card">
  <!-- 1. Gambar/Header -->
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="cover.jpg" alt="Cover" />
    </figure>
  </div>

  <!-- 2. Konten Utama -->
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="author.jpg" alt="Author" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Judul Buku</p>
        <p class="subtitle is-6">@penulis</p>
      </div>
    </div>

    <div class="content">
      Deskripsi singkat buku di sini.
      <br />
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

Bagian-bagian ini fleksibel. Kamu bisa pakai semua, atau hanya `card-content` + `card-footer`, atau bahkan ganti `card-image` dengan `card-header` berwarna solid untuk promo.

### 3. Sekilas Tiles (layout alternatif advanced)

Selain `columns`, Bulma punya sistem `tile` untuk layout “kartu-kartu” yang tidak simetris (mirip Pinterest / Metro UI).

Konsep dasar:

- `tile is-ancestor` → container utama.
- `tile is-parent` → kolom besar.
- `tile is-child` → konten di dalamnya (sering digabung dengan `notification` atau `box`).

Kita pakai tiles di praktik sebagai “quick stats” dashboard.

---

## Praktik: Menyempurnakan Dashboard dengan Notifikasi & Cards

Kamu bisa:

- Modifikasi `dashboard.html` langsung, atau
- Buat `overview.html` copy dari `dashboard.html` lalu tambahkan komponen di bawah ini.

Fokus di kolom konten kanan (`column is-9-tablet is-10-desktop`).

### Langkah 1: Notifikasi selamat datang yang bisa ditutup

Letakkan di bagian paling atas kolom konten:

```html
<!-- Notifikasi -->
<div id="welcome-notification" class="notification is-info is-light">
  <button
    class="delete"
    onclick="document
      .getElementById('welcome-notification')
      .remove()"
  ></button>
  <div class="icon-text">
    <span class="icon has-text-info">
      <i class="fas fa-info-circle"></i>
    </span>
    <span>
      <strong>Welcome back, Admin!</strong>
      Anda memiliki 3 pesanan baru yang perlu diproses hari ini.
    </span>
  </div>
</div>
```

:::note[Catatan]

- `is-info is-light` → info lembut, cocok untuk pesan non-error.
- Inline JS di `onclick` adalah cara tercepat: menghapus elemen dari DOM saat tombol silang diklik.
- Di sesi JS khusus nanti, kita akan refactor cara ini jadi event listener yang lebih rapi.

:::

### Langkah 2: Grid card “Latest Additions”

**Di bawah notifikasi:**

```html
<h3 class="title is-4 mt-5">Latest Additions</h3>

<div class="columns is-multiline">
  <!-- Card 1 -->
  <div class="column is-4-desktop is-6-tablet">
    <div class="card">
      <div class="card-image">
        <figure class="image is-2by1">
          <img
            src="https://bulma.io/assets/images/placeholders/640x320.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media mb-2">
          <div class="media-content">
            <p class="title is-5">Modern CSS</p>
            <p class="subtitle is-7">@alexander</p>
          </div>
        </div>
        <div class="content is-size-7">
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
          <img
            src="https://bulma.io/assets/images/placeholders/640x320.png"
            alt="Placeholder image"
          />
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

  <!-- Card 3: promo tanpa gambar -->
  <div class="column is-4-desktop is-6-tablet">
    <div class="card">
      <header class="card-header has-background-primary">
        <p class="card-header-title has-text-white">Special Promo</p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <p class="title is-3 has-text-primary">50% OFF</p>
          <p>Untuk semua buku kategori Programming minggu ini!</p>
        </div>
      </div>
      <footer class="card-footer">
        <a
          href="#"
          class="card-footer-item is-uppercase has-text-weight-bold has-text-primary"
        >
          Claim Now
        </a>
      </footer>
    </div>
  </div>
</div>
```

**Perhatikan:**

- `columns is-multiline` + `column is-4-desktop is-6-tablet`:
  - Desktop: 3 kolom per baris.
  - Tablet: 2 kolom per baris.
  - Mobile: otomatis 1 kolom.
- Card 1 & 2 memakai `card-image` dengan rasio 2:1 (`image is-2by1`), cocok untuk banner kecil.
- Card 3 menunjukkan bahwa card bisa juga punya `card-header` berwarna sebagai pengganti gambar — bagus untuk promo atau ringkasan singkat.

### Langkah 3: Tile system untuk quick stats (opsional tapi bagus)

Di bawah grid kartu, tambahkan:

```html
<h3 class="title is-4 mt-5">Quick Stats (Tile System)</h3>

<div class="tile is-ancestor">
  <!-- Kiri vertical -->
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

  <!-- Kanan besar -->
  <div class="tile is-parent">
    <article class="tile is-child notification is-info">
      <p class="title">Middle Tile</p>
      <p class="subtitle">Dengan gambar background</p>
      <figure class="image is-4by3">
        <img src="https://bulma.io/assets/images/placeholders/640x480.png" />
      </figure>
    </article>
  </div>
</div>
```

Tile cocok untuk menampilkan beberapa statistik penting atau ringkasan cepat dalam layout yang lebih dinamis dari sekadar grid biasa.

---

## Challenge singkat sebelum Sesi 9

Kalau mau melatih pemahaman:

- Buat notifikasi auto-hide: pakai `setTimeout(() => element.remove(), 5000)` di script sederhana, tanpa menghapus fungsi tombol silang.
- Tambahkan efek hover di card dengan CSS custom: sedikit `transform: translateY(-5px)` dan menambah `box-shadow` saat `:hover`, supaya terasa clickable.
- Coba variasikan card: satu card berisi list kecil (pakai `media` + `content`), satu card berisi statistik angka besar di tengah.

Kalau notifikasi sudah muncul di atas, bisa ditutup, grid kartu tampil rapi di berbagai ukuran layar, dan tile system sudah kamu coba, kita siap ke **Sesi 9**: mengikat semua ini dengan **interaktivitas Vanilla JavaScript** (modal, toggle state, konfirmasi hapus, dll.).
