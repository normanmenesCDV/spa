// punkt 1
class Osoba {
  constructor(imie, wiek) {
    this.imie = imie;
    this.wiek = wiek;
  }
  przedstaw() {
    return `Jestem ${this.imie}, mam ${this.wiek} lat`;
  }
}

class Pracownik extends Osoba {
  constructor(imie, wiek, zawod) {
    super(imie, wiek);
    this.zawod = zawod;
  }
  przedstaw() {
    return `${super.przedstaw()} i pracuję jako ${this.zawod}.`;
  }
}

// punkt 2
var pracownik = new Pracownik("Marek", 25, "portier");
console.log(pracownik.przedstaw());

// punkt 3
pracownik.imie = "Adam";
pracownik.wiek = 18;

// punkt 4
console.log(pracownik.przedstaw());
