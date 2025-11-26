# Form Login & Layout Dasar

## Materi: Pengetahuan & Konsep

### Struktur Layout Modern dengan Bulma

Dalam membangun UI yang profesional, 3 komponen dasar yang harus dipahami:

1. **Hero**: Section fullscreen untuk _landing page_, _login screen_, atau _call-to-action_
2. **Container**: Wrapper yang membatasi lebar konten agar tetap rapi di layar besar
3. **Columns**: Sistem grid berbasis Flexbox untuk membagi layout

### 1. Hero Component

`hero` adalah block-level element yang memenuhi seluruh viewport (layar). Sangat ideal untuk halaman login, landing page, atau banner utama.

**Struktur Hero:**

```html
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <!-- Konten di sini -->
    </div>
  </div>
</section>
```

**Penjelasan:**

- `hero`: Container utama
- `is-fullheight`: Modifier agar memenuhi tinggi layar (100vh)
- `hero-body`: Wrapper vertikal untuk konten (auto-centering)
- `container`: Membatasi lebar konten agar tidak terlalu lebar

**Varian Hero:**

- `is-primary`, `is-success`, `is-danger` (background color)
- `is-small` , `is-medium`, `is-large`, `is-fullheight`, `is-halfheight` (tinggi)
- `is-bold` (gradient effect)

### 2. Container

`container` adalah element kunci untuk **responsive width management**. Secara otomatis menyesuaikan lebar berdasarkan breakpoint.

**Tingkatan Container:**

```html
<!-- Max-width: 960px (mobile) -> 1152px (desktop) -->
<div class="container">....</div>

<!-- Full-width, padding 32px -->
<div class="container is-fluid">.....</div>

<!-- Max-width: 1152px -->
<div class="container is-max-desktop">.....</div>

<!-- Max-width: 1344px -->
<div class="container is-max-widescreen">........</div>
```

**Kapan Menggunakan:**

- Gunakan `container` untuk konten utama (form, tabel, teks panjang)
- Gunakan `is-fluid` untuk dashboard/data-heavy UI
- Jangan pakai container di dalam container

### 3. Form Elements di Bulma

Bulma memberikan styling modern untuk semua input HTML5 tanpa JavaScript.

**Struktur Form Standar:**

```html
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="your@email.com" />
  </div>
</div>
```

**Element Form:**

- `field`: Wrapper untuk setiap form group (label + input + help text)
- `label`: Tag label dengan styling Bulma
- `control`: Wrapper input untuk icon, loading state, validation
- `input`: Input field dengan modifier `is-primary`, `is-success`, `is-danger`

**Input dengan Icon:**

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

**Validasi State:**

```html
<input class="input is-success" placeholder="Valid input" />
<input class="input is-danger" placeholder="Error input" />
<p class="help is-success">This email is valid</p>
<p class="help is-danger">This email is invalid</p>
```

### 4. Button Elements

Button di Bulma sangat customizable dengan modifier.

**Struktur Button:**

```html
<button class="button is-primary is-medium is-fullwidth">Login</button>
```

**Modifier Button:**

- **Warna**: `is-primary`, `is-success`, `is-danger`, `is-link`
- **Ukuran**: `is-small`, `is-medium`, `is-large`
- **Style**: `is-outlined`, `is-inverted`, `is-rounded`
- **State**: `is-loading`, `is-active`, `is-disabled`
- **Lebar**: `is-fullwidth` (100%)

**Button Group:**

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

---

## Praktik: Membuat Form Login Fullscreen

### Langkah 1: Buat File `login.html`

Buat file baru di folder proyek Anda:

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
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
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

### Langkah 2: Tambahkan Hero Section

Tambahkan struktur hero di dalam `<body>`:

```html
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
```

**Penjelasan Kode:**

- `hero is-primary is-fullheight is-bold`: Hero biru, fullscreen, gradient
- `columns is-centered`: Kolom di tengah horizontal
- `column is-5-tablet is-4-desktop is-3-widescreen`: Responsif width
  - Tablet: 5/12 kolom
  - Desktop: 4/12 kolom
  - Widescreen: 3/12 kolom (lebih kecil)
- `box`: Card putih dengan shadow untuk form

### Langkah 3: Tambahkan Form Fields

Isi form di dalam `<div class="box">`:

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

### Langkah 4: Tambahkan Footer Hero

Tambahkan footer di dalam hero untuk copyright/info:

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
</section>
```

### **File Lengkap: `login.html`**

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
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />

    <!-- Font Awesome (untuk icon) -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </head>
  <body>
    <section class="hero is-primary is-fullheight is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <!-- Form Card -->
              <div class="box">
                <h1 class="title has-text-centered">Login</h1>

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
                      <input
                        class="input"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
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
                      <button
                        class="button is-success is-fullwidth is-medium"
                        type="submit"
                      >
                        <span class="icon">
                          <i class="fas fa-sign-in-alt"></i>
                        </span>
                        <span>Login</span>
                      </button>
                    </div>
                  </div>

                  <!-- Register Link -->
                  <div class="has-text-centered mt-4">
                    <p class="is-size-7">
                      Belum punya akun? <a href="#">Daftar di sini</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered">
            <p class="is-size-7">
              <strong>Online Book Publisher</strong> © 2025. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
```

---

## Challenge & Modifikasi

### Level 1: Basic

1. **Ganti warna hero** dari `is-primary` ke `is-success` atau `is-dark`
2. **Tambahkan icon** di kanan input untuk status validasi (checkmark/x)
3. **Ubah ukuran form**: coba `is-6-tablet` atau `is-8-desktop`

### Level 2: Intermediate

1. **Tambahkan loading state**: ganti class button jadi `is-loading` saat submit
2. **Implementasi validasi sederhana** dengan JavaScript:
   - Email harus mengandung "@"
   - Password minimal 6 karakter
   - Tampilkan `help is-danger` jika tidak valid
3. **Tambahkan social login buttons**: Google, Facebook (pakai `is-info`, `is-danger`)

### Level 3: Advanced

1. **Buat dua kolom**: di desktop, kiri = logo/info, kanan = form
2. **Tambahkan background image** di hero dengan custom CSS:

```html
<style>
  .hero.is-primary.is-bold {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d")
        center/cover;
  }
</style>
```

3. **Buat animasi fade-in** untuk form card saat page load

---

## Checklist Sebelum Sesi 3

- [ ] Form login berhasil di-render di browser
- [ ] Coba resize browser untuk test responsivitas
- [ ] Form tetap di tengah di semua ukuran layar
- [ ] Icon Font Awesome muncul di input fields

Di Sesi 3, kita akan membangun **navbar responsif** dengan dropdown menu dan sidebar untuk navigasi aplikasi. Simpan file `login.html` ini, kita akan hubungkan nanti!
