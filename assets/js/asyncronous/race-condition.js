class Hewan {
    constructor(name, jenis) {
        this.name = name;
        this.jenis = jenis;
    }

    jenisMakanan(param) {
        this.makanan = param;
        return this
    }

    memakanWithProses(param, callback) {
        return setTimeout(() => {
            this.makanan = param;
            callback;
    })
    
    }

    tampilkanMakanan() {
        const tampilkan = `${this.name} memakan ${this.makanan}`;
        console.log(tampilkan);
        
        
    }
}

function hewani() {
    const sapi = new Hewan("Sapi", "Mamalia").jenisMakanan("Rumput")
    .tampilkanMakanan()
    
}

hewani()

