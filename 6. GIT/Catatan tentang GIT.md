- Sebelum mulai segala tentang segala sesuatu jangan lupa di init dulu pada direktori yang mau di push
```GIT
git init
```
- Connect ke remote repository caranya adalah dengan 
```GIT
git remote add origin <link>
```
	- Satu Repo bisa konek ke banyak repo dengan cara ini

- Kalau mau copy dari remote repo yang kemungkinan sudah ada isinya caranya dengan
```GIT
git clone <link>
```
- Sebelum commit tambahkan dulu perubahan yang ada dengan 
```GIT
git add .
git add README.md
```
	- (.) Menggambarkan add semua perubahan yang terjadi
	- Bisa dengan panggil fil tertentu aja
- Selanjutnya commitkan perubahan itu dengan 
```GIT
git commit -m "pesan"
```
- Aturan commit yang baik bisa dilihat di [web](https://cheatography.com/albelop/cheat-sheets/conventional-commits/)
- Untuk memaksa sebuah branch ke starting point dapat dilakukan dengan 
```GIT
git branch -M main
```
- Git branch juga digunakan untuk pindah-pindah branch
- Setelah semua beres maka push ke remote repo dengan 
```GIT
git push -u origin <nama-branch>
```
- untuk tahu lebih lanjut mengenai -u dapat dilihat [disini](https://stackoverflow.com/questions/5697750/what-exactly-does-the-u-do-git-push-u-origin-master-vs-git-push-origin-ma)
- Kalau ada masalah karena misalnya password ganti, pakai instruksi ini untuk ubah password
```GIT
git remote set-url origin https://<uname>@<web>.com/satya2221/im-sanbercode-laravel-web-dev.git
```
