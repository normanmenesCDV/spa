// punkt 1-2
class Osoba {
  #imie;
  #wiek;
  constructor(imie, wiek) {
    this.#imie = Osoba.formatujImie(imie);
    this.#wiek = wiek;
  }
  get imie() {
    return this.#imie;
  }
  set imie(value) {
    this.#imie = Osoba.formatujImie(value);
  }
  get wiek() {
    return this.#wiek;
  }
  set wiek(value) {
    this.#wiek = value;
  }
  static formatujImie(imie) {
    return imie.charAt(0).toUpperCase() + imie.slice(1).toLocaleLowerCase();
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

// punkt 3
var pracownik = new Pracownik("maREk", 25, "portier");
console.log(pracownik.przedstaw());

pracownik.imie = "aDAm";
console.log(pracownik.przedstaw());
