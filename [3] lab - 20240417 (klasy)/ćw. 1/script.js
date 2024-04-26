// punkt 1
class Osoba {
  constructor(imie, wiek) {
    this.imie = imie;
    this.wiek = wiek;
  }
  przedstaw() {
    return `Jestem ${this.imie}, mam ${this.wiek} lat.`;
  }
}

// punkt 2
var osoba = new Osoba("Marek", 25);
console.log(osoba.przedstaw());

// punkt 3
osoba.imie = "Adam";
osoba.wiek = 18;

// punkt 4
console.log(osoba.przedstaw());
