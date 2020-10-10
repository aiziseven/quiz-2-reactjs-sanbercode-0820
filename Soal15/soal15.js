let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

const { penulis, tahunTerbit } = dataBukuTambahan;
const { nama, jumlahHalaman, warnaSampul } = buku;
warna = [...warnaSampul, ...warna];

buku = { nama, jumlahHalaman, warna, penulis, tahunTerbit };

console.log(buku);