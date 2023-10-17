# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🔥 Cara running di local
 
- npm install
- npm start

## 📦️ Spek singkat

- React 18 Typescript
- MUI sebagai framework UI-nya
- Axios sebagai data fetching-nya
- sass sebagai styling-nya

## 📝 Deskripsi singkat

Cinestory adalah sebuah database movie, yang dapat menampilkan sejumlah judul film beserta deskripsi lengkapnya. Mulai dari tahun perilisan, genre, director hingga aktornya. Desain website ini minimalis dengan hanya satu page.

- Fetching data dari API https://www.omdbapi.com
- Dapat searching menggunakan keyword nama movie
- Jika nama movie yang dicari tidak ada, maka akan menampilkan warning text dibawah input searching, dan akan hilang ketika searching mendapatkan result
- Dapat Menampilkan judul dan tahun pembuatan film ketika di hover pada Card movie dengan sedikit micro interaction
- Jika Card diklik, maka akan menampilkan detail movie via Dialog dengan cover image movie-nya full size.
- Pagination untuk pindah page, dan dapat menunjukkan posisi page saat itu
- Loading spinner muncul ketika sedang membuka detail movie dan pada saat awal load halaman website
- Anda dapat mengakses halaman dengan keyword dan page via url. Jika parameter rusak, maka akan otomatis kembali ke halaman utama
- Jika url yang dimasukkan salah, maka akan menampilkan halaman tersesat.
- Tampilan masih untuk Desktop (belum responsive)
- Anda dapat melihat web-vitals LCP dari console

