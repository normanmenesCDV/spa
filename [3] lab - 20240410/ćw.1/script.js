// punkt 1
var car = {
  marka: "Audi",
  cena: 120000.5,
  moc: 300,
  zwiekszMoc(wartosc) {
    this.moc += wartosc;
  },
};

// punkt 2
console.log("Punkt 2");
console.log(car);

// punkt 3
car.zwiekszMoc(10);

// punkt 4
console.log("Punkt 4");
console.log(car);

// punkty 5
function samochod(marka, cena, moc) {
  this.marka = marka;
  this.cena = cena;
  this.moc = moc;
  this.zwiekszMoc = function (wartosc) {
    this.moc += wartosc;
  };
}

// punkt 6
var array = [
  new samochod("Skoda", 25000, 100),
  new samochod("Opel", 50000, 150),
  new samochod("BMW", 75000, 180),
];

// punkt 7
console.log("Punkt 7");
for (var element of array) {
  console.log(element);
}

// punkt 8
array[1].zwiekszMoc(8);

// punkt 9
console.log("Punkt 9");
for (var element of array) {
  console.log(element);
}

// punkt 10
console.log("Punkt 10");
console.log(array[1].toString()); // [object Object]

// punkt 11
samochod.prototype.toString = function () {
  return `{marka: ${this.marka}, cena: ${this.cena}, moc: ${this.moc}}`;
};

// punkt 12
console.log("Punkt 12");
console.log(array[1].toString());
