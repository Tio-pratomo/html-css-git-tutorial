---
title: Layout Dasar (Hero, Container, dan Form Login)
---

## Materi: Pengetahuan & Konsep

### 1. Gambaran layout yang akan kita buat

Di sesi ini kamu akan bikin layout login fullscreen yang rapi dengan tiga blok utama Bulma:

- `hero`: membungkus seluruh layar untuk area utama (background + pusat konten).
- `container`: membatasi lebar konten agar tidak melebar sampai pinggir layar di desktop.
- `columns` + `column`: mengatur posisi form agar berada di tengah secara horizontal dan responsif di berbagai ukuran layar.

Tujuannya bukan sekadar “jadi halaman login”, tapi kamu paham kenapa butuh hero, kenapa pakai container, dan bagaimana columns mengatur lebar form.

### 2. Hero: section fullscreen

`hero` adalah section besar yang biasanya dipakai untuk landing page, login screen, atau call-to-action utama. Dengan modifier `is-fullheight`, tinggi hero akan sama dengan tinggi viewport (100vh).

Struktur dasar:

```html
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <!-- Konten di sini -->
    </div>
  </div>
</section>
```

Penjelasan singkat:

- `hero`: blok utama dengan background dan warna.
- `is-fullheight`: memaksa tinggi = tinggi layar, cocok untuk login fullscreen.
- `hero-body`: area isi hero yang otomatis membantu centering vertikal konten.
- `container`: supaya isi di dalamnya tidak terlalu lebar di layar besar.

Varian penting hero:

- Warna: `is-primary`, `is-success`, `is-danger`, `is-dark`, dll.
- Tinggi: `is-small`, `is-medium`, `is-large`, `is-fullheight`, `is-halfheight`.
- Style: `is-bold` menambahkan efek gradient/kontras lebih kuat untuk background.

### 3. Container: mengatur lebar konten

`container` dipakai untuk mengatur max-width konten secara otomatis mengikuti breakpoint, sehingga teks dan form tetap nyaman dibaca di layar lebar.

Contoh variasi:

```html
<div class="container">...</div>
<!-- container standar -->
<div class="container is-fluid">...</div>
<!-- full width, ada padding -->
<div class="container is-max-desktop">...</div>
<!-- max 1152px -->
<div class="container is-max-widescreen">...</div>
<!-- max 1344px -->
```

Guideline praktis:

- Pakai `container` biasa untuk area utama halaman (form, artikel, konten inti).
- Pakai `is-fluid` untuk layout yang butuh full width seperti dashboard/data-heavy UI.
- Hindari nesting `container` di dalam `container` karena akan bikin lebar konten terlalu sempit dan tidak natural.

Di halaman login ini, kita pakai `container` biasa di dalam `hero-body`, karena kita mau form-nya fokus di tengah, bukan melebar menyentuh tepi.

### 4. Form elements: pola field–control–input

Bulma mendefinisikan pola struktural untuk form:

```html
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="your@email.com" />
  </div>
</div>
```

Makna tiap bagian:

- `field`: satu blok form group (label + input + help text), jadi satu baris logis.
- `label`: label dengan style Bulma.
- `control`: wrapper untuk input, dipakai saat menambah ikon, state loading, dsb.
- `input`: elemen HTML input dengan style Bulma, bisa diberi modifier seperti `is-primary`, `is-success`, `is-danger`.

Untuk input dengan ikon di kiri/kanan:

```html
<div class="control has-icons-left has-icons-right">
  <input class="input" type="email" />
  <span class="icon is-small is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-small is-right">
    <i class="fas fa-check"></i>
  </span>
</div>
```

- `has-icons-left` / `has-icons-right` mengatur posisi ikon di dalam input.
- `icon is-small is-left` adalah wrapper ikon standar Bulma.

Untuk state validasi:

```html
<input class="input is-success" placeholder="Valid input" />
<input class="input is-danger" placeholder="Error input" />

<p class="help is-success">This email is valid</p>
<p class="help is-danger">This email is invalid</p>
```

Di sini `is-success` dan `is-danger` mengubah border/warna input, sementara `help` menampilkan teks bantuan kecil di bawah field.

### 5. Button: warna, ukuran, lebar

Button Bulma mengikuti pola kelas + modifier:

```html
<button class="button is-primary is-medium is-fullwidth">Login</button>
```

Beberapa modifier penting:

- Warna: `is-primary`, `is-success`, `is-danger`, `is-link`.
- Ukuran: `is-small`, `is-medium`, `is-large`.
- Style: `is-outlined`, `is-inverted`, `is-rounded`.
- State: `is-loading`, `is-active`, `is-disabled`.
- Lebar: `is-fullwidth` menjadikan tombol selebar container-nya.

Untuk grup tombol:

```html
<div class="field is-grouped">
  <div class="control">
    <button class="button is-primary">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link">Cancel</button>
  </div>
</div>
```

`field is-grouped` membuat beberapa tombol berjajar secara horizontal dan rapi.

### 6. Columns: membuat form login di tengah

Di layout login, kita pakai struktur:

```html
<div class="columns is-centered">
  <div class="column is-5-tablet is-4-desktop is-3-widescreen">
    <!-- box dengan form -->
  </div>
</div>
```

- `columns is-centered` akan membuat anak-anak `column` berada di tengah horizontal, bukan mepet kiri.
- `column is-5-tablet is-4-desktop is-3-widescreen` mengontrol lebar form untuk tiap breakpoint:
  - Tablet: lebar 5/12 dari baris (sedikit lebih lebar).
  - Desktop: 4/12 (1/3 lebar layar).
  - Widescreen: 3/12 (lebih sempit agar tetap proporsional).

Kombinasi hero + container + columns seperti ini adalah “pattern klasik” untuk screen login modern.

---

## Praktik: Membangun Form Login Fullscreen

### Langkah 1: Buat file `login.html`

Buat file baru:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login - Online Book Publisher</title>

    <!-- Bulma CDN -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"
    />

    <!-- Font Awesome (untuk icon) -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </head>
  <body>
    <!-- Konten akan di sini -->
  </body>
</html>
```

Versi di materi aslinya memakai Bulma `0.9.4`; kamu boleh tetap pakai itu, atau langsung pakai `1.0.4` seperti contoh di atas, selama konsisten.

### Langkah 2: Tambahkan hero + container + columns

Masukkan struktur hero ke dalam `<body>`:

```html
<body>
  <section class="hero is-primary is-fullheight is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <!-- Form Card -->
            <div class="box">
              <h1 class="title has-text-centered">Login</h1>

              <!-- Form akan di sini -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
```

Perhatikan relasi layout:

- `hero is-primary is-fullheight is-bold`: background warna utama, tinggi full layar, efek visual kuat.
- `hero-body` + `columns is-centered`: form tetap di tengah vertikal dan horizontal.
- `column is-...`: mengatur lebar form di masing-masing breakpoint agar tampak seimbang.
- `box`: memberi background putih, border radius, dan shadow ringan untuk memisahkan form dari background hero.

Coba buka di browser: harusnya kamu sudah lihat box kosong dengan judul “Login” di tengah layar.

### Langkah 3: Tambahkan field-field form

Isi bagian `<!-- Form akan di sini -->` dengan form:

```html
<form>
  <!-- Email Field -->
  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left">
      <input
        class="input"
        type="email"
        placeholder="admin@example.com"
        required
      />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
    </div>
  </div>

  <!-- Password Field -->
  <div class="field">
    <label class="label">Password</label>
    <div class="control has-icons-left">
      <input class="input" type="password" placeholder="••••••••" required />
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </div>
  </div>

  <!-- Remember Me & Forgot Password -->
  <div class="field is-grouped is-grouped-multiline">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox" />
        Remember me
      </label>
    </div>
    <div class="control ml-auto">
      <a href="#" class="is-size-7">Forgot password?</a>
    </div>
  </div>

  <!-- Submit Button -->
  <div class="field">
    <div class="control">
      <button class="button is-success is-fullwidth is-medium">
        <span class="icon">
          <i class="fas fa-sign-in-alt"></i>
        </span>
        <span>Login</span>
      </button>
    </div>
  </div>

  <!-- Register Link -->
  <div class="has-text-centered mt-4">
    <p class="is-size-7">Belum punya akun? <a href="#">Daftar di sini</a></p>
  </div>
</form>
```

Hal yang perlu kamu sadari di sini:

- Setiap input dibungkus `field` → `label` + `control` → `input`.
- `has-icons-left` + `icon is-left` digunakan untuk menaruh ikon di dalam input.
- `field is-grouped is-grouped-multiline` membuat checkbox dan link bisa berjajar, tapi tetap responsif saat layar mengecil.
- Tombol `button is-success is-fullwidth is-medium` menjadi tombol hijau, ukuran medium, dan selebar form.

### Langkah 4: Tambahkan hero-foot (opsional tapi bagus)

Tambahkan footer di dalam `<section class="hero ...">`, setelah `hero-body`:

```html
<div class="hero-foot">
  <div class="container">
    <div class="content has-text-centered">
      <p class="is-size-7">
        <strong>Online Book Publisher</strong> © 2025. All rights reserved.
      </p>
    </div>
  </div>
</div>
```

`hero-foot` adalah bagian bawah hero, cocok untuk informasi hak cipta atau link tambahan.

### Langkah 5: Cek responsif dan alignment

Lakukan beberapa pengecekan:

- Resize browser ke lebar kecil (mobile) dan besar (desktop), lihat apakah form tetap di tengah dan lebar terasa wajar.
- Ubah `is-5-tablet is-4-desktop is-3-widescreen` menjadi kombinasi lain (misal `is-6-tablet is-5-desktop`) dan amati perubahan lebar form.
- Coba ganti `is-primary` di hero menjadi `is-dark` atau `is-success` untuk melihat perbedaan nuansa halaman login.

---

## Challenge ringkas sebelum Sesi 3

Boleh kamu kerjakan semua atau sebagian, yang penting kamu mengutak-atik layout sendiri:

- Ubah ukuran kolom form dan rasakan efeknya di tablet vs desktop (coba 2–3 kombinasi berbeda).
- Tambahkan satu field baru, misalnya “Company Code”, mengikuti pola field–control–input yang sama.
- Buat varian kedua: salin file jadi `login-dark.html` dan ubah hero jadi `is-dark`, tombol jadi `is-primary`, serta teks jadi lebih terang, untuk merasakan kombinasi modifier warna.

Kalau sudah nyaman dengan pola hero–container–columns–form ini, di Sesi 3 nanti kita bisa mulai masuk ke navigasi (navbar/menu vertikal) dan mulai membangun kerangka aplikasi yang lebih nyata.
