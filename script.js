inputName();
function inputName() {
    var Nama = prompt("Masukkan Nama Anda");
    var greeting = "Selamat Datang "+Nama;
    document.getElementById("name").style.display = "block";
    document.getElementById("name").innerHTML = greeting;
}
function tambah() {
    // untuk ambil nilai pada input
    var nama = document.getElementById('nama').value;
    var paket = document.getElementById('paket').value;
    var lama = document.getElementById('lama').value;
    // 0 = baris awal pada tabel
    var table = document.getElementsByTagName('table')[0]
    // tambah baris kosong pada tabel
    // 0 = dihitung dari awal
    //table.rows.length = menambahkan pada akhir baris
    //table.rows.length/2 = menambahkan data pada baris tengah tabel
    var newRow = table.insertRow(table.rows.length / 2);
    //tambah cell pada baris baru
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    //tambah value ke dalam cell
    cell1.innerHTML = nama;
    cell2.innerHTML = paket;
    cell3.innerHTML = lama;
}