"use strict";
var
  forma = document.getElementById("forma");

Node.prototype.error = function(mensaje) {
  this.className = "error";
  this.textContent = mensaje;
};
Node.prototype.info = function(mensaje) {
  this.className = "";
  this.textContent = mensaje;
};

function procesa() {
  var entero = forma["entero"].value,
    error = false;

  if (!error) {
    var entero = parseInt(entero);
    var aux = 1, fib = 0, init;
    if (entero > 0) {
      for (init = 1; init <= entero; init++) {
        document.getElementById('result').value = fib;
        aux = aux + fib;
        fib = aux - fib;

      }
    }
  }
}
