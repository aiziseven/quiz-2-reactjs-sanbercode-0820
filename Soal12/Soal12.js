class BangunDatar {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(x) {
        return this._name = x;
    }

    luas() {
        return '';
    }
    keliling() {
        return '';
    }
}

class Lingkaran extends BangunDatar {
    constructor(name) {
        super(name);
        this._pi = 0;
        this._jari = 0;
    }
    get pi() {
        return this._pi;
    }
    get jari() {
        return this._jari;
    }

    set pi(x) {
        return this._pi = x;
    }

    set jari(y) {
        return this._jari = y;
    }

    luas() {
        return parseFloat(this._pi) * parseFloat(this._jari) * parseFloat(this._jari);
    }
    keliling() {
        return parseFloat(this._pi) * (parseFloat(this._jari) * 2);
    }
}

class Persegi extends BangunDatar {
    constructor(name) {
        super(name);
        this._sisi = 0;
    }
    get sisi() {
        return this._sisi;
    }

    set sisi(x) {
        return this._sisi = x;
    }
    luas() {
        return parseFloat(this._sisi) * parseFloat(this._sisi);
    }
    keliling() {
        return parseFloat(this._sisi) * 4;
    }
}

var lingkaran = new Lingkaran("lingkaran baru");
lingkaran.pi = 3.14;
lingkaran.jari = 10;
console.log(lingkaran.name);
console.log(lingkaran.luas());
console.log(lingkaran.keliling());

var persegi = new Persegi("persegi baru");
persegi.sisi = 7;
console.log(persegi.name);
console.log(persegi.luas());
console.log(persegi.keliling());