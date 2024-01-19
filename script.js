inputName();
    function inputName() {
        var Nama = prompt("Masukkan Nama Anda");
        var greeting = "Selamat Datang "+Nama;
        document.getElementById("name").style.display="block";
        document.getElementById("name").innerHTML = greeting;
}