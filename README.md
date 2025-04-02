# 🚀 Panduan Menjalankan Proyek di Lokal

## 📌 Prasyarat
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (disarankan versi terbaru LTS)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

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
   npm install
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

## 🎉 Selesai!
Sekarang proyek berjalan di lokal. Happy coding! 🚀

