// punkt 1
class Osoba {
  #imie;
  #wiek;
  constructor(imie, wiek) {
    this.#imie = imie;
    this.#wiek = wiek;
  }
  get imie() {
    return this.#imie;
  }
  set imie(value) {
    this.#imie = value;
  }
  get wiek() {
    return this.#wiek;
  }
  set wiek(value) {
    this.#wiek = value;
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
