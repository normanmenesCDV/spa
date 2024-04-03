let array = [5, 8, 4, 3, 2];

function pow(liczba) {
  return liczba * liczba;
}

function function2a(arg) {
  let result = [];
  for (let index = 0; index < arg.length; index++) {
    result.push(pow(arg[index]));
  }
  return result;
}

function function2b(arg) {
  let result = [];
  for (let element of arg) {
    result.push(pow(element));
  }
  return result;
}

function function2c(arg) {
  let result = [];
  for (let index in arg) {
    result.push(pow(arg[index]));
  }
  return result;
}

function function2d(arg) {
  let result = [];
  arg.forEach((element) => {
    result.push(pow(element));
  });
  return result;
}

function function3(arg) {
  let result = arg.map((element) => element * element);
  return result;
}

console.log("Ćwiczenie 1");
console.log(pow(5));

console.log("Ćwiczenie 2a");
console.log(function2a(array));

console.log("Ćwiczenie 2b");
console.log(function2b(array));

console.log("Ćwiczenie 2c");
console.log(function2c(array));

console.log("Ćwiczenie 2d");
console.log(function2d(array));

console.log("Ćwiczenie 3");
console.log(function3(array));
