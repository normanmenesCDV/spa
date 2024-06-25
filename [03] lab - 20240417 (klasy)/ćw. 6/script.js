// punkt 1
class Osoba {
  #imie;
  #wiek;
  constructor(imie, wiek) {
    this.#imie = Osoba.formatujImie(imie);
    this.ustawWiek(wiek);
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
    this.ustawWiek(value);
    this.#wiek = value;
  }
  static formatujImie(imie) {
    return imie.charAt(0).toUpperCase() + imie.slice(1).toLocaleLowerCase();
  }
  static sprawdzWiek(wiek) {
    if (typeof wiek !== "number") throw TypeError("Wiek musi być liczbą");
    else if (wiek <= 0)
      throw RangeError("Nie można ustawić wieku osoby jako liczbę niedodatnią");
  }
  ustawWiek(wiek) {
    try {
      Osoba.sprawdzWiek(wiek);
      this.#wiek = wiek;
    } catch (e) {
      console.log(e.message);
    }
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

pracownik.wiek = "xxxx";
pracownik.wiek = true;
pracownik.wiek = 0;
pracownik.wiek = 30;
