---
title: Integrasi Vanilla JavaScript
---

## Materi: Pengetahuan & Konsep

Bulma adalah framework **CSS-only**. Artinya, tidak ada file JS bawaan sama sekali.

Jadi, semua interaktivitas (modal buka/tutup, dropdown klik, tab switching, dismiss notifikasi) kamu kendalikan sendiri dengan JavaScript.

Tiga pola interaksi utama yang perlu kamu kuasai:

1. **Toggling modifier**: menambah/menghapus class seperti `is-active` untuk mengubah state komponen (modal, dropdown, burger navbar, tab, dsb.).
2. **Dismissal**: menghapus elemen dari DOM (misalnya menutup notifikasi).
3. **Tab switching**: memindahkan kelas aktif antar tab dan menyembunyikan/menampilkan konten yang sesuai.

Di sesi ini kita akan praktik dua hal yang mencakup hampir semua pola di atas:

- Modal pop-up (pakai toggle `is-active`).
- Tabs navigation (pakai toggle `is-active` dan `is-hidden`).

---

## Praktik: File `interactive.html` – Modal & Tabs

Kamu bisa:

- Buat file baru `interactive.html` yang berisi layout sederhana (navbar minimal + section), lalu tambahkan modal + tabs, atau
- Tambahkan komponen ini ke salah satu halaman existing (misal `dashboard.html`) untuk menguji integrasi.

Di sini saya tulis dalam bentuk blok-blok yang bisa kamu gabungkan.

### Langkah 1: Struktur modal Bulma + tombol pemicu

Letakkan struktur modal **di bagian bawah `<body>`**, sebelum script JS:

```html
<!-- MODAL STRUCTURE -->
<div id="modal-buku" class="modal">
  <!-- Background gelap -->
  <div class="modal-background"></div>

  <!-- Konten Modal (Card Style) -->
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Detail Buku</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <h3>Mastering Bulma CSS</h3>
        <p>
          Buku ini membahas tuntas cara membuat layout responsif tanpa pusing.
        </p>
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

Modal Bulma bekerja seperti ini:

- Secara default, `div.modal` **tanpa** `is-active` → tidak tampil.
- Kalau elemen `modal` diberi class `is-active` → overlay dan konten modal muncul di atas halaman.

Buat tombol pemicu modal di area konten, misalnya di dashboard:

```html
<button
  class="button is-primary is-large js-modal-trigger"
  data-target="modal-buku"
>
  Lihat Detail Buku
</button>
```

Kunci di sini:

- Kelas `js-modal-trigger` → kita gunakan sebagai hook JS.
- `data-target="modal-buku"` → nama ini harus sama dengan `id` modal (`id="modal-buku"`).

### Langkah 2: JavaScript generik untuk semua modal

Tambahkan script ini sebelum `</body>` (boleh digabung dengan script navbar burger asalkan tetap di dalam `DOMContentLoaded`).

Atau kamu bisa buat file javascript terpisah lalu hubungkan dengan halaman HTML-nya (Jangan lupa tag `script` di hapus dalam file `.js`).

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // 1. Buka modal: tambah is-active
    function openModal($el) {
      $el.classList.add("is-active");
    }

    // 2. Tutup modal: hapus is-active
    function closeModal($el) {
      $el.classList.remove("is-active");
    }

    // 3. Tutup semua modal (untuk ESC)
    function closeAllModals() {
      (document.querySelectorAll(".modal") || []).forEach(($modal) => {
        closeModal($modal);
      });
    }

    // --- Event listeners ---

    // Klik trigger -> buka modal target
    (document.querySelectorAll(".js-modal-trigger") || []).forEach(
      ($trigger) => {
        const modalId = $trigger.dataset.target;
        const $target = document.getElementById(modalId);

        $trigger.addEventListener("click", () => {
          openModal($target);
        });
      },
    );

    // Klik background, tombol close, dan tombol footer -> tutup modal
    (
      document.querySelectorAll(
        ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button",
      ) || []
    ).forEach(($close) => {
      const $target = $close.closest(".modal");

      $close.addEventListener("click", () => {
        closeModal($target);
      });
    });

    // ESC -> tutup semua modal
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeAllModals();
      }
    });
  });
</script>
```

Pola yang harus kamu pahami:

- Kita tidak menulis JS khusus “untuk modal ini saja”; script ini bekerja untuk **semua** `.modal` dan `.js-modal-trigger` di halaman, asalkan `data-target` cocok dengan `id`.
- Semua interaksi hanya dengan menambah/menghapus class `is-active` (pola “toggling modifier”).

### Langkah 3: Tabs navigation – struktur HTML

Tabs berguna untuk mengganti konten tanpa reload halaman (misal: Statistik / Orders / Logs dalam satu box).

Struktur:

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

**Kunci:**

- Setiap `<li>` tab punya `data-tab="tab-1"`, `tab-2`, dst.
- Setiap konten punya `data-content="tab-1"`, `tab-2`, dst., sehingga kita bisa _match_ dengan mudah di JS.
- Tab aktif diberi `class="is-active"`, konten yang disembunyikan diberi `is-hidden` (helper Bulma untuk `display: none`).

### Langkah 4: JavaScript untuk tabs

Tambahkan script (boleh di file yang sama dengan script modal, di bawahnya):

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs li");
    const tabContentBoxes = document.querySelectorAll("#tab-content > div");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // 1. Hapus is-active dari semua tab
        tabs.forEach((item) => item.classList.remove("is-active"));

        // 2. Sembunyikan semua konten
        tabContentBoxes.forEach((box) => {
          box.classList.add("is-hidden");
          box.classList.remove("is-active");
        });

        // 3. Aktifkan tab yang diklik
        tab.classList.add("is-active");

        // 4. Tampilkan konten dengan data-content yang cocok
        const target = tab.dataset.tab;
        const targetContent = document.querySelector(
          `[data-content="${target}"]`,
        );
        targetContent.classList.remove("is-hidden");
        targetContent.classList.add("is-active");
      });
    });
  });
</script>
```

Pola yang penting:

- Lagi-lagi kita hanya bermain di level class: `is-active` untuk styling aktif, `is-hidden` untuk menyembunyikan.
- Kita menggunakan `data-*` attribute (`data-tab`, `data-content`) untuk menghubungkan header tab dan konten, bukan ID hard-coded per tab.

---

## Setelah Sesi 9: Apa yang sudah kamu kuasai & langkah lanjut

Dengan selesai Sesi 9, secara garis besar kamu sudah bisa:

1. Memahami konsep inti Bulma: Flexbox grid (`columns` dan `grid`), sistem modifier, breakpoints.
2. Membuat layout lengkap: hero login, dashboard dengan navbar + sidebar, halaman list + form CRUD, tabel inventory, dan quick edit.
3. Menggunakan komponen data: table, card, media object, level, pagination, breadcrumb, form elements, notification, dropdown, file upload.
4. Menghidupkan UI statis dengan Vanilla JS: navbar burger, dropdown klik, file input name, modal, tabs, dismiss notification.

Langkah lanjut yang realistis:

- Pilih satu proyek kecil (misal: “Mini Admin Buku” atau “Dashboard Penjualan”) dan bangun full UI-nya pakai Bulma + Vanilla JS seperti pola di atas.
- Setelah itu, baru mulai pikirkan integrasi dengan framework (React/Vue/Svelte) dan kustomisasi Bulma via Sass (ganti warna primary, font, dsb.).

Kalau kamu mau, sesi berikutnya di luar seri ini bisa kita pakai untuk:

- Merapikan file-file jadi satu proyek utuh.
- Atau mulai bikin “Final Project”: satu halaman dashboard lengkap dari nol, tapi sekarang kamu sudah tahu **cara pakai** masing-masing komponen, bukan hanya menyalin contoh.
