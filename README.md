# 🚀 Panduan Menjalankan Proyek di Lokal

## 📌 Prasyarat
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (disarankan versi terbaru LTS)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL]()

## 📂 Struktur Proyek
```
festmed-app/
│── festmed-backend/     # Folder untuk backend (Express.js)
│── festmed-frontend/    # Folder untuk frontend (Next.js)
│── README.md    # Panduan ini
```

---

## 🔥 Menjalankan Backend (Express.js)

1. **Masuk ke folder backend**
   ```sh
   cd backend
   ```
2. **Install dependencies**
   ```sh
   npm install @prisma/client cors dotenv express prisma nodemon
   ```
3. **Jalankan server**
   ```sh
   nodemon .
   ```
4. **Cek apakah server berjalan**
   Buka browser atau gunakan Postman untuk mengakses:
   ```
   http://localhost:1725
   ```

---

## 🌟 Menjalankan Frontend (Next.js)

1. **Masuk ke folder frontend**
   ```sh
   cd ../frontend
   ```
2. **Install dependencies**
   ```sh
   npm install @chakra-ui/react @emotion/react @emotion/styled @tanstack/react-query axios formik framer-motion next next-themes react react-dom react-icons yup

   ```
3. **Jalankan Next.js**
   ```sh
   npm run dev
   ```
4. **Buka di browser**
   ```
   http://localhost:3000
   ```
---
## 📌 Setup Database

1. **Buat database kosong dengan nama yang sama (`festmed-backend`)**
   ```sh
   CREATE DATABASE "festmed-backend";
   ```
2. **Buka file `.env.development` dan pastikan koneksi database sudah sesuai** 
   ```
   DATABASE_URL=postgres://postgres:yourpassword@localhost:1725/festmed-backend
   ```
   *(Ganti `yourpassword` dengan password PostgreSQL di komputer Anda)*

3. **Jalankan migrasi Prisma**
   ```sh
   npx prisma migrate dev
   ```

4. **Jalankan backend**
   ```sh
   nodemon .
   ```
---
## 🎉 Selesai!
Sekarang proyek berjalan di lokal. Happy coding! 🚀

