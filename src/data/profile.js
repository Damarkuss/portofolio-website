
export const profile = {
  name: "Paska Damarkus Sinaga",
  role: "Web Developer, Cyber Security",
  location: "Bandung, Jawa Barat",
  availability: "Terbuka untuk posisi full-time",
  intro:
    "Saya membangun website yang rapi, dapat berguna, dan mudah dipakai. Fokus saya di sisi frontend dengan React, dan saya nyaman bekerja sampai ke sisi backend bila diperlukan.",
  about: [
    "Saya lulusan Teknik Informatika dari Universitas Komputer Indonesia. Sejak 2022 saya mulai belajar pemrograman web dan sudah mengerjakan beberapa proyek, baik untuk tugas kuliah, klien kecil, maupun proyek pribadi.",
    "Saya terbiasa bekerja dengan Git, membaca dokumentasi, dan menyelesaikan masalah langkah demi langkah. Di luar coding, saya suka Main Game.",
  ],
  cvUrl: "/Paska Damarkus Sinaga_CV.pdf", // taruh file CV Anda di folder public/ dengan nama cv.pdf
  photo: "/Profil.jpeg", // contoh: "/foto.jpg" (taruh file di folder public/). Kosongkan jika tidak ada.
};

export const socials = [
  { label: "GitHub", handle: "github.com/damarkuss", url: "https://github.com/damarkuss" },
  { label: "LinkedIn", handle: "PaskaDamarkusSinaga", url: "https://linkedin.com/in/paska-damarkus-sinaga" },
  { label: "Instagram", handle: "@paska.damar123", url: "https://instagram.com/paska.damar123" },
  { label: "Email", handle: "paskadamarkus@gmail.com", url: "mailto:email@contoh.com" },
  { label: "WhatsApp", handle: "+62 813 6428 7016", url: "https://wa.me/6281364287016" },
];

export const skills = [
  { group: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"] },
  { group: "Backend", items: ["Node.js", "Express", "REST API", "MySQL", "MongoDB","Laravel"] },
  { group: "Alat Kerja", items: ["Git & GitHub", "Cursor", "Figma", "Postman", "Vite"] },
  { group: "Kemampuan Lain", items: ["Kerja tim", "Manajemen waktu", "Komunikasi", "Problem solving"] },
];

// Tambah / hapus proyek sesuka Anda. Field `image` boleh dikosongkan.
export const projects = [
  {
    title: "Sistem Pencatatan Penyakit Dan Vaksin Hewan Menggunakan Blockchain",
    year: "2026",
    type: "Full-stack",
    description:
      "Website toko online dengan katalog produk, keranjang, checkout, dan panel admin untuk mengelola stok serta pesanan.",
    stack: ["Node.js", "Go", "MySQL", "Hyperledger Fabric v2.5.16", "di-deploy di VPS dengan Nginx dan SSL"],
    live: "https://contoh.com",
    repo: "https://github.com/username/toko-online",
    image: "",
  },
  {
    title: "Company Profile UMKM",
    year: "2025",
    type: "Frontend",
    description:
      "Website profil perusahaan untuk UMKM lokal. Fokus pada tampilan responsif, kecepatan muat, dan SEO dasar.",
    stack: ["React", "CSS", "Vite"],
    live: "https://contoh.com",
    repo: "https://github.com/username/company-profile",
    image: "",
  },
  {
    title: "Aplikasi Catatan Keuangan",
    year: "2025",
    type: "Proyek pribadi",
    description:
      "Aplikasi pencatat pemasukan dan pengeluaran harian dengan grafik ringkasan bulanan. Data tersimpan di browser.",
    stack: ["React", "JavaScript", "LocalStorage"],
    live: "",
    repo: "https://github.com/username/catatan-keuangan",
    image: "",
  },
];

export const experience = [
  // {
  //   period: "2025 — Sekarang",
  //   title: "Freelance Web Developer",
  //   place: "Mandiri",
  //   detail: "Mengerjakan website untuk klien kecil: company profile, landing page, dan sistem sederhana.",
  // },
  {
    period: "JULI - SEPTEMBER 2025",
    title: "Magang Web Developer",
    place: "Kesatuan Bangsa Dan Politik Bandung",
    detail: "Mengerjakan project website backend, memperbaiki bug, dan menulis dokumentasi.",
  },
  {
    period: "2022 — 2026",
    title: "S1 Teknik Informatika",
    place: "Universitas Komputer Indonesia",
    detail: "IPK 3.26. Aktif di organisasi/komunitas [BEM, HMIF, UKM KMK].",
  },
];
