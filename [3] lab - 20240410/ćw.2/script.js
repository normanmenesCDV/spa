// punkt 1
console.log("Punkt 1");
function samochod(marka, cena, moc) {
  this.marka = marka;
  this.cena = cena;
  this.moc = moc;
}
samochod.prototype.zwiekszMoc = function (wartosc) {
  this.moc += wartosc;
};
const car = new samochod("Opel", 50000, 150);
const carJson = JSON.stringify(car);
console.log(carJson);

console.log("Punkt 2");
const jsonString = '{"marka": "Opel", "cena": 50000, "moc": 158}';
const jsonParsed = JSON.parse(jsonString);
console.log(jsonParsed);
