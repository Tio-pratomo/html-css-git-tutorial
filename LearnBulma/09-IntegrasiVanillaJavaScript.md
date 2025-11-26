# Integrasi Vanilla JavaScript (Interaktivitas)

***

## Materi: Pengetahuan & Konsep

Bulma adalah **framework CSS-only**, artinya ia tidak menyertakan file JavaScript sama sekali. Ini memberikan fleksibilitas total bagi developer untuk memilih cara menangani interaktivitas. Untuk pemula, cara terbaik memahaminya adalah dengan menulis **Vanilla JavaScript** (JS murni tanpa library tambahan) untuk menghidupkan komponen-komponen UI.

3 Pola Interaksi Utama di Bulma:
1.  **Toggling Modifier**: Menambah/menghapus class `is-active` (untuk modal, dropdown, burger menu).
2.  **Dismissal**: Menghapus elemen dari DOM (untuk notifikasi).
3.  **Tab Switching**: Mengubah konten aktif berdasarkan tab yang dipilih.

***

## Praktik: Membuat Modal & Tab System

Kita akan membuat file final `interactive.html` (atau update dashboard Anda) yang memiliki fitur **Modal Pop-up** dan **Tab Navigation**.

### Langkah 1: Modal Component (Pop-up)

Modal adalah overlay yang menutupi halaman untuk menampilkan konten penting.

**Struktur Modal (Hidden by default):**
Letakkan kode ini di bagian paling bawah `<body>`, sebelum script JS.

```html
<!-- MODAL STRUCTURE -->
<div id="modal-buku" class="modal">
  <!-- Background gelap transparan -->
  <div class="modal-background"></div>

  <!-- Konten Modal (Card Style) -->
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Detail Buku</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Isi Modal -->
      <div class="content">
        <h3>Mastering Bulma CSS</h3>
        <p>Buku ini membahas tuntas cara membuat layout responsif tanpa pusing.</p>
        <p><strong>Harga:</strong> Rp 150.000</p>
        <p><strong>Stok:</strong> 25 Eksemplar</p>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Beli Sekarang</button>
      <button class="button">Batal</button>
    </footer>
  </div>
</div>
```

**Trigger Button:**
Buat tombol di halaman utama untuk memanggil modal ini.
```html
<button class="button is-primary is-large js-modal-trigger" data-target="modal-buku">
  Lihat Detail Buku
</button>
```

### Langkah 2: JavaScript untuk Modal

Script universal untuk menangani *semua* modal di halaman Anda.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // 1. Buka Modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  // 2. Tutup Modal
  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  // 3. Tutup Semua Modal
  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // --- Event Listeners ---

  // Klik tombol trigger -> Buka modal target
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Klik tombol background, close, atau cancel -> Tutup modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Tekan tombol ESC -> Tutup semua modal
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});
```

### Langkah 3: Tabs Navigation

Tab berguna untuk mengganti tampilan konten tanpa reload halaman.

**HTML Struktur Tab:**
```html
<div class="box">
  <!-- Tab Header -->
  <div class="tabs is-boxed">
    <ul>
      <li class="is-active" data-tab="tab-1">
        <a>
          <span class="icon is-small"><i class="fas fa-image"></i></span>
          <span>Pictures</span>
        </a>
      </li>
      <li data-tab="tab-2">
        <a>
          <span class="icon is-small"><i class="fas fa-music"></i></span>
          <span>Music</span>
        </a>
      </li>
      <li data-tab="tab-3">
        <a>
          <span class="icon is-small"><i class="fas fa-film"></i></span>
          <span>Videos</span>
        </a>
      </li>
    </ul>
  </div>

  <!-- Tab Content -->
  <div id="tab-content">
    <div class="is-active" data-content="tab-1">
      <h1 class="title">Pictures</h1>
      <p>Ini adalah konten galeri foto.</p>
    </div>
    <div class="is-hidden" data-content="tab-2">
      <h1 class="title">Music</h1>
      <p>Daftar lagu favorit Anda ada di sini.</p>
    </div>
    <div class="is-hidden" data-content="tab-3">
      <h1 class="title">Videos</h1>
      <p>Koleksi video tutorial pemrograman.</p>
    </div>
  </div>
</div>
```

**JavaScript untuk Tab:**

```javascript
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // 1. Hapus active dari semua tab
    tabs.forEach(item => item.classList.remove('is-active'));
    // 2. Hapus active (sembunyikan) semua konten
    tabContentBoxes.forEach(box => {
      box.classList.add('is-hidden'); // Atau display: none
      box.classList.remove('is-active'); // Styling opsional
    });

    // 3. Aktifkan tab yang diklik
    tab.classList.add('is-active');

    // 4. Tampilkan konten yang sesuai target
    const target = tab.dataset.tab;
    const targetContent = document.querySelector(`[data-content="${target}"]`);
    targetContent.classList.remove('is-hidden');
  });
});
```
*Catatan: Pastikan Anda punya CSS helper `.is-hidden { display: none !important; }` (Bawaan Bulma sudah ada).*

***

## Rangkuman Akhir Pembelajaran

Selamat! Anda telah menyelesaikan **9 Sesi Bootcamp Bulma CSS**. Anda sekarang memiliki bekal teknis yang solid:

1.  **Konsep Inti**: Paham Flexbox grid, modifier system, dan responsiveness.
2.  **Layouting**: Bisa membuat landing page (Hero), dashboard (Sidebar+Navbar), dan form complex.
3.  **Komponen Data**: Mahir menggunakan Table, Card, Media Object, dan Level.
4.  **Interaktivitas**: Mampu menghidupkan UI statis dengan Vanilla JS (Modal, Tabs, Dropdown).

**Langkah Selanjutnya untuk Anda:**
*   **Proyek Riil**: Coba cloning tampilan website populer (misal: Twitter/X atau Gmail) menggunakan Bulma.
*   **Framework Integration**: Jika sudah siap, pelajari cara integrasi Bulma dengan React atau Vue (menggunakan library wrapper seperti [react-bulma-components](https://couds.github.io/react-bulma-components/?path=/story/welcome--page) atau [buefy](https://buefy.org/documentation/start) jika ingin jalan pintas, atau manual integration seperti yang kita pelajari).
*   **Customization**: Pelajari SASS/SCSS untuk mengubah variabel default Bulma (ganti warna primary, font default, border radius global) agar desain Anda unik.

Terima kasih telah mengikuti panduan ini. *Happy Coding!*
