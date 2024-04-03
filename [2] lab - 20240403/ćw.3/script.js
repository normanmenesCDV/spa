let array = [5, 8, 4, 3, 2];

let result = (function () {
  let variable = true;
  return function () {
    variable = !variable;
    return variable;
  };
})();

console.log("Wynik");
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
