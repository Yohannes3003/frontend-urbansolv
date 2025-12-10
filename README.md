## Test Case Frontend — Urbansolv

Project ini merupakan implementasi Frontend menggunakan React + Vite, Tailwind CSS, Lucide Reacts dan Recharts untuk menampilkan pemanantuan Smart Building Dashboard.

## Cara Menjalankan Project

Ikuti langkah berikut untuk menjalankan project di local environment:

1. Download Repository Git / Atau Clone

2. Ekstrak file .zip ke folder mana pun yang kamu inginkan.

3. Masuk ke folder project: frontend-urbansolv

4. Lalu anda buka projectnya, jalankan:

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
http://localhost:5174
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
├── assets/                 # Berisi file gambar atau asset lainnya
│
├── components/
│   │
│   ├── apps/               # Komponen halaman/page dashboard
│   │   ├── Building3D.jsx
│   │   ├── EnergyCharts.jsx
│   │   ├── Navbar.jsx
│   │   └── RoomssTable.jsx
│   │   ├── StatusBadge.jsx
│   │   └── SummaryCard.jsx
│   │
├── data/                   # Data Json
│    └── building.json      # Data dummy gedung & ruangan
├── App.jsx                 # Root UI component
├── index.css               # Global CSS configuration
└── main.jsx                # React initializer
```
