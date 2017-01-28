---
layout: post
title: Making your first HTTP Request!
---

Disclaimer
---
Artikel tutorial ini diharapkan dapat membantu menyelesaikan mission 3 oprec junior member NetSOS 2017.
Namun penulis menyadari kurangnya kemampuan menulis dengan baik.
Jika anda sudah mengerti cara membuat HTTP Request sebelumnya, maka membaca tutorial ini adalah sebuah 
kesia-sia-an, silahkan lanjutkan mengerjakan misi.

Untuk penjelasan yang lebih jelas, silahkan merujuk ke: <https://www.getpostman.com/docs/requests>

Background
---
Akan dijelaskan membuat sebuah HTTP Request sederhana, dengan spesifikasi sebagai berikut:

- Destination URL: <http://ristek.cs.ui.ac.id/_netsos/sample-endpoint>
- method: POST
- POST Form data:
  - `nama`: `Adam`
  - `npm`: `1406567536`
- headers: 
  - `Content-Type`: `text/HTML`
  - `Custom-Header`: `anything`

Terdapat berbagai cara membuat dan mengirimkan HTTP Request, misalnya menggunakan online tools di internet, atau 
menggunakan tools di CLI linux, atau menggunakan library di berbagai bahasa pemrograman.
Pada tutorial kali ini akan dijelaskan langkah membuat dan mengirimkan HTTP Request dengan menggunakan _Postman_

Step 1: Install Postman
---
Postman merupakan ekstensi Chrome browser.

Download di: <https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop>

Step 2: Build HTTP Request
---

1. Isi form `Enter requests URL` dengan destination URL, yaitu: `http://ristek.cs.ui.ac.id/_netsos/sample-endpoint`

   ![_config.yml]({{ site.baseurl }}/images/Making-your-first-HTTP-Request/postman1.png)


2. Pilih HTTP Method yang diinginkan, dari berbagai pilihan yang ada (misalnya: `GET`, `POST`, `PUT`). Dalam contoh ini, pilh `GET`

   ![_config.yml]({{ site.baseurl }}/images/Making-your-first-HTTP-Request/postman2.png)


3. Pilih tab `Headers`. Kemudian masukkan header sesuai contoh.

   ![_config.yml]({{ site.baseurl }}/images/Making-your-first-HTTP-Request/postman3.png)


4. Pilih tab `Body`. Kemudian masukkan pilih tipe data yang ingin dikirimkan (misalnya: `form-data`, `raw`, `binary`).
   Dalam contoh ini, dipilih `form-data` sesuai spesifikasi sebelumnya. Kemudian masukkan nilai yang diinginkan.

   ![_config.yml]({{ site.baseurl }}/images/Making-your-first-HTTP-Request/postman4.png)


Step 3: Send HTTP Request
---

1. Klik tombol `send`

2. SELESAI. Kemudian akan diterima sebuah response dari server tujuan. 

   Dalam contoh ini, response yang diberikan adalah sebuah text html error 404 Not Found 
   (dikarenakan URL tujuan memang tidak di handle oleh server RISTEK ._. )

   ![_config.yml]({{ site.baseurl }}/images/Making-your-first-HTTP-Request/postman5.png)


Conclusion
---
Membuat HTTP Request merupakan skill dasar yang seharusnya dimiliki oleh semua umat mahasiswa Fasilkom.
Pada contoh di atas, tipe data yang dikirimkan adalah `form-data`. Bagaimana kalau tipe data yang diinginkan 
harus mengikuti format `JSON`?
   
