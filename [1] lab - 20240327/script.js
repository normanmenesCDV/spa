function silniaRekurencyjnie(number) {
  return number > 1 ? number * silniaRekurencyjnie(number - 1) : 1;
}

function getNumberInt() {
  return parseInt(document.getElementById("number").value);
}

function validation() {
  if (document.getElementById("number").value < 0) {
    alert("Liczba ujemna");
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  document
    .getElementById("button-iteracyjnie")
    .addEventListener("click", function () {
      validation();
      let number = getNumberInt();
      let result = 1;
      for (let i = number; i > 1; i--) {
        result *= i;
      }
      document.getElementById("result").value = result;
    });

  document
    .getElementById("button-rekurencyjnie")
    .addEventListener("click", function () {
      document.getElementById("result").value = silniaRekurencyjnie(
        getNumberInt()
      );
    });
});
