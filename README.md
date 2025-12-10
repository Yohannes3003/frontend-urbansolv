## Test Case Frontend — Urbansolv

Project ini merupakan implementasi Frontend menggunakan React.js, Shadcn UI, dan Lucide Icons, dengan struktur komponen yang modular untuk mempermudah pengembangan, pemeliharaan, dan scale-up.

## Cara Menjalankan Project

Ikuti langkah berikut untuk menjalankan project di local environment:

1. Download Repository Git / Atau Clone

2. Ekstrak File

Ekstrak file .zip atau .7z ke folder mana pun yang kamu inginkan.

3. Buka CMD lalu pindah ke direktori frontend-urbansolv

Masuk ke folder project:
frontend-urbansolv

4. Install Dependencies

Lalu anda buka projectnya, jalankan:

```
npm install
```

5. Jalankan Project

Setelah instalasi selesai, jalankan aplikasi dengan perintah:

```
npm run dev
```

6. Akses di Browser

```
http://localhost:5173
```

## Teknologi yang Digunakan

| Teknologi         |
| ----------------- |
| **React + Vite**  |
| **Tailwind CSS**  |
| **Recharts**      |
| **Lucide Reacts** |

## Struktur Folder

Berikut struktur folder utama dalam project:

```
src/
│
├── assets/                 # Berisi file gambar, ikon, atau asset statis lainnya
│
├── components/             # Kumpulan komponen UI
│   │
│   ├── apps/               # Komponen halaman/page dashboard
│   │   ├── Building3D.jsx
│   │   ├── EnergyCharts.jsx
│   │   ├── Navbar.jsx
│   │   └── RoomssTable.jsx
│   │   ├── StatusBadge.jsx
│   │   └── SummaryCard.jsx
│   │
├── data/                   # File data dummy JSON
│
├── App.jsx                 # Root component aplikasi
├── index.css               # Global stylesheet
└── main.jsx                # Entry point aplikasi
```
