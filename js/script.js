function hitungLuasPersegi() {
    // Ambil nilai panjang dari input
    var luas = document.getElementById("inputluas").value;

    // Validasi apakah input adalah angka
    if (isNaN(luas)) {
        alert("Cuman bisa masukan Angka aja ehehe!");
        return;
    }

    // Hitung luas persegi
    var hluas = luas * luas;

    // Tampilkan hasil
    document.getElementById("hasilLuas").innerHTML = "Luas Persegi: " + hluas;
}

function hitungKelilingPersegi() {
    // Ambil nilai panjang dari input
    var keliling = document.getElementById("inputkel").value;

    // Validasi apakah input adalah angka
    if (isNaN(keliling)) {
        alert("Cuman bisa masukan Angka aja ehehe!");
        return;
    }

    // Hitung keliling persegi
    var hkeliling = 4 * keliling;

    // Tampilkan hasil
    document.getElementById("hasilKeliling").innerHTML = "Keliling Persegi: " + hkeliling;
}