# Flexbox
- Atur layout secara mudah dengan flexbox yang dapat diinisiasi dengan cara berikut
```css
.container { display: flex; /* or inline-flex */ }
```
- Flexbox lebih baik digunakan untuk komponen atau layout dalam skala kecil. Untuk layout skala besar lebih baik menggunakan sistem layout Grid
- Baca lebih jauh soal flexbox [disini](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Baca lebih jauh soal grid [disini](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-properties-for-the-parentgrid-container)
- Mau item dalam flexbox pas ditengah secara vertikal? Pakai attribut align-items
```css
.container { align-items: center; }
```
# Padding & Margin
- Setting padding kalau dideklrasikan empat sisinya maka akan urut clockwise dari atas
```css
.container{
	padding: 30px 40px 50px 100px /* atas kanan bawah kiri*/
}
```
- Kalau cuman 3, nilai pertama mewakili atas, nilai tengah mewakili kiri dan kanan, nilai akhir mewakili bawah
```css
.container{
padding: 30px 40px 100px /* atas kanan&kiri bawah */
}
```
- kalau cuman 2, nilai pertama mewakili atas +  bawah dan nilai kedua mewakili kanan dan kiri
```css
.container{
padding: 30px 40px /* atas&bawah kanan&kiri */
}
```