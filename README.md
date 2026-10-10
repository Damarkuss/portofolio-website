# Website Portofolio (React + Vite)

## Menjalankan di VS Code

1. Install Node.js (versi 18 atau lebih baru) dari https://nodejs.org
2. Ekstrak folder ini, lalu buka di VS Code (File → Open Folder).
3. Buka terminal VS Code (Ctrl + `) dan jalankan:

```bash
npm install
npm run dev
```

4. Buka alamat yang muncul di terminal (biasanya http://localhost:5173).

## Cara mengedit

| Yang ingin diubah | File |
| --- | --- |
| Nama, intro, tentang saya, link CV, foto | `src/data/profile.js` → `profile` |
| Link sosial media (GitHub, LinkedIn, dll.) | `src/data/profile.js` → `socials` |
| Daftar keahlian | `src/data/profile.js` → `skills` |
| Proyek / website yang pernah dibuat | `src/data/profile.js` → `projects` |
| Pengalaman & pendidikan | `src/data/profile.js` → `experience` |
| Warna dan font | bagian `:root` di `src/styles.css` |
| Tata letak per bagian | `src/components/*.jsx` |

Foto, CV, dan screenshot proyek: taruh di folder `public/`, lalu tulis path-nya,
misalnya `photo: "/foto.jpg"` atau `image: "/proyek-toko.png"`, `cvUrl: "/cv.pdf"`.

## Menaruh online (gratis)

```bash
npm run build
```

Hasilnya ada di folder `dist/`. Folder ini bisa di-upload ke Netlify, Vercel,
atau GitHub Pages. Dengan Vercel/Netlify cukup hubungkan repo GitHub Anda;
build command: `npm run build`, output directory: `dist`.
