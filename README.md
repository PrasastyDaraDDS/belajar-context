Soal 1
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
Jawaban :menggunakan komponen React,Menggunakan prop untuk mengontrol perilaku komponen,Menerapkan struktur hierarkis untuk organisasi konten,Menggunakan switch statement untuk menentukan jenis komponen,Menggunakan komponen React untuk tata letak halaman yang terstruktur.

Soal 2
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

Jika terjadi error, silakan perbaiki, Mengapa hal itu bisa terjadi? Jelaskan!
Jawaban:Error tersebut terjadi karena Next.js memiliki konsep Server Components dan Client Components. createContext dari React hanya dapat digunakan di Client Components, namun dalam konteks yang diberikan, file tersebut tidak ditandai sebagai Client Component.Ketika Anda menggunakan createContext di Next.js, Anda perlu memastikan bahwa file tempat Anda menggunakan createContext berada dalam Client Component. Ini dapat dilakukan dengan cara menandainya menggunakan hook useClient di file yang memanggil createContext.

setelah diperbaiki hasilnya seperti ini:
Title
Heading
Heading
Heading
Sub-heading
Sub-heading
Sub-heading
Sub-sub-heading
Sub-sub-heading
Sub-sub-heading

Soal 3
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
Jawaban: untuk hasilnya sama saja. ketika createContext digunakan di file tersebut, itu dianggap sebagai bagian dari Server Component oleh Next.js secara default, yang menyebabkan kesalahan yang Anda alami.Untuk memperbaiki kesalahan ini, Anda perlu memastikan bahwa file yang memanggil createContext berada dalam Client Component dengan menambahkan hook useClient. 

Soal 4
Capture hasilnya dan buatlah laporan di README.md. Tambahkan teks Nama dan NIM pada bagian komponen Post agar menunjukkan itu hasil kerja Anda!
Jawaban: sudah menambahkan ada di image.

Soal 5
Silakan save semua dan lakukan running di browser Anda. Capture hasilnya dan buatlah laporan di README.md. Tambahkan teks Nama dan NIM pada setiap page routing agar menunjukkan itu hasil kerja Anda sendiri!

Apakah toggle button tema sudah berfungsi ? jika belum, silakan perbaiki!
Jawaban: iya, berfungsi dengan baik.
Mengapa ketika refresh atau berpindah halaman tema tidak permanen ? Buatlah menjadi permanen walaupun page sudah direfresh dan pindah halaman!
Jawaban:

