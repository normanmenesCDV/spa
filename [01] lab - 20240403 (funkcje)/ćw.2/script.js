let array = [5, 8, 4, 3, 2];

function sum(arg) {
  let result = 0;
  if (array.length === 0) return NaN;
  arg.forEach((element) => {
    result += element;
  });
  return result;
}

console.log("Wynik");
console.log(sum(array));
