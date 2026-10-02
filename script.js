console.log("Bismillah Praktikum Euy!");

//Aktivitas 1 : DOM Selection / Seleksi Elemen
// Kenapa kita harus seleksi karena menangkap atau mengambil id/class
// Mengambil elemen html di simpan di variabel javascript

// 1. mengambil Elemen Judul Utama dan Sub Judul
//document.getElementById() => Mengambil elemen berdasarkan id

const JudulUtama = document.getElementById("judul-utama"); //menangkap <h1 id=judul-utama"> 

//document.queryselector() => Mengambil elemen berdasarkan selector 
// tanda # artinya ID

const subJudul = document.querySelector("#sub-judul"); //menangkap <p id="sub-judul">

//2. MEngambil Elemen pada kartu 1 (kartu manipulasi teks dan style)
const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");

//3. Mengambil elemen tombol - tombol aksi pada kartu 1
const BtnUbahTeks = document.getElementById("btn-ubah-teks");
const BtnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");

//4. Mengambil Elemen pada Kartu 2 (Fitur Catatan dinamis/To Do List Sederhana)
const InputCatatan = document.getElementById("input-catatan");
const BtnTambah = document.getElementById("btn-tambah");
const DaftarCatatan = document.getElementById("daftar-catatan");
const jumlahCatatan = document.getElementById("jumlah-catatan");
const pesanKosong = document.getElementById("pesan-kosong");


//Aktivitas 2. Manipulasi Teks dan Style (Card 1)
// addEventListener("click", function() {...}) artinya Tolong dengarkan dulu/ tunggu
// sampai di klik user, jika di klik jalankan perintah di dalam function

//A. Megubah teks dan warna ecara langsung 
BtnUbahTeks.addEventListener("click", function(){
    //.innertext = mengganti atau mengisi secara langsung teks yang ada di dalam elemen html
    //consol
    teksPreview.innerText = "Hebat! Teks ini berhasil diubah menggunakan DOM";

    //.Stylecolor = mengubah warna teks secara langsung (inlin estyle)
    teksPreview.style.color = "#ff0303"

    //cosole.log = mencatata pesan di console browser
    console.log("[DOM] Teks ini telah diperbaharui!");

})


//B. Manipulasi Class CSS menggunakan classlist.toggle()
BtnToggleWarna.addEventListener("click", function() {
    //classlist.toggle("nama-class") = fitur saklar otomatis (ON?OFF)
    boxPreview.classList.toggle("active-mode");
    cardManipulasi.classList.toggle("highlight");
   
    console.log("DOM Berhasil di switch!")
})

//C. Mengembalikan (Reset) Teks ke kondisi semula
btnReset.addEventListener("click", function () {
    //1. Kembalikan teks semula ke teks asli
    teksPreview.innerText = "Halo!, Teks ini siap diubah oleh Javascript";

    //2. kosongkan warna agar kembali ke warna css bawaan
    teksPreview.style.color = "";

    //3. Hapus Class kusus menggunakan .classlist.remove("")
    boxPreview.classList.remove("active-mode");
    cardManipulasi.classList.remove("highlight");

    console.log("DOM tampilan di reset!");
    
    
})

//Altivitas 3 dan 4 : Elemen dinamis dan event handling (to do list)
//Di aktivitas ini kita belajar elemen HTML baru (<li>) secara otomatis di dalam javascript 
//mengisi teksnya, memberi tombol hapus, lalu menempelkan di layar (<ul>)

//Langkah 1 : embuat variabel penampung angka jumlah catatan
//Let dipakai untuk nilai variabel yang akan berubah-ubah, bisa bertambah bisa berkurang (counting)
let totalCatatan = 0;

//Langkah 2 : Fungsi angka counter dan pesan status 
function perbaharuiJumlah() {
    //Masukkan angka total catatan terbaru ke dalam tag <span id="jumlah-catatan">
    jumlahCatatan.innerText = totalCatatan;

    //Conditional statement berupa apakah cararannya itu kosong/0?
    if (totalCatatan === 0) {
        //Jika 0: Hapus class "Hidden", supaya teks "Belum ada catatan" muncul ke layar
        pesanKosong.classList.remove("hidden");
    } else{
        //jika  > 0; Tambahkan class "hidden" agar teks "belum ada catatan" tersembunyi 
        pesanKosong.classList.add("hidden");
    }
    //Langkah 3 : Fungsi utama logika tambah catatan baru
    function tambahCatatan() {
        //3.1. InputCatatan.value fungsinya untuk mengambil teks yagn telah diketik oleh user
        //.trim()= menghapus spasi diawal dan diakhir
        const isiTeks = InputCatatan.value.trim();

        //3.2. Validasi input : jika isi teks kosong maka tampilkan alert 
        if(isiTeks ==="") {
            alert("Catatan kamu tidak boleh kosong");
            return;
        }
    }
    
    //3.3. document.createElement("li") membuat memori di javascript secara dinamis
    const liBaru = document.createElement("li");
    liBaru.className = "note-item"; // menambahkan pada tag li

    //3.4. ,innerHTML mengisi struktur didalam <li> dengan teks catatan dan tombol hapus
    //Tanda backstick ()
    liBaru.innerHTML = `<span>$(isiTeks)</span> <button class="btn-hapus">Hapus</button>`;

    //3.5. Menambahkan telinga / event listener untuk tombol hapus pada cararan dinamis
    //llbaru.queryselector(."btn-hapus") = mengambil tombol ber class "btn-hapus" khusus yang ada di li
    const btnHapus = liBaru.querySelector("btn-hapus");
    btnHapus.addEventListener("click", function() {
        liBaru.remove(); // menghapus elemen list dari layar html
        totalCatatan--; //totalcatatan sikurangin sebanyak 1x
        perbaharuiJumlah(); //Panggil fungsi perbaruijumlah untuk update angkad di layar
        console.log(`Dom Catatan "$(isiTeks)" dihapus.`)
        
    })

    //3.6. appendchild = memasukkan elemen li kedalam wadah <ul id="daftar-catatan">
    DaftarCatatan.appendChild(liBaru);

    //3.7. Mengosongkan kembali isi kolom input (inputcatatan.value ="") supaya bisa diketik lagi
    InputCatatan.value = "";

    //3.8. totalCatatan artinya tambah nilai total catatan sebanyak 1, lalu updat eangka ke layar
    totalCatatan++;
    perbaharuiJumlah();

    console.log (`DOM catatan baru ditambahkan: $(isiTeks)`)

}

//Langkah 4 Event LIstener klik tombol tambah +
//ketika tombol tambah di klik oleh user, maka jalankan jalankan fungsi tambah catatan()
BtnTambah.addEventListener("click", function() {
    tambahCatatan();
});

//Langkah 5: Event Listener keyboard enter pada kolom input
//ketika user mengetik di kolom input dan melepas tombol keyboard (`event keyup)
InputCatatan.addEventListener("keyup", function (event) {
    //Periksa apakah tombol keyboard yang ditekan user adalah enter?
    if(event.key === "Enter"){
        tambahCatatan(); //jika ya, jalankan fungsi tambahCatatan()
    }
    
});
