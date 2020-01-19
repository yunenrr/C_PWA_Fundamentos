/**
 * Función que incrementa en uno el valor pasado por parámetros.
 * @param {number} numero Número que se desea incrementar.
 * @param {function} _callback Función a ejecutar cuando se obtenga el resultado
 */
function sumarUno(numero, _callback) {
  // Se ejecuta un Timer.
  // Se llama al Callback con el nuevo valor
  setTimeout(() => _callback(numero + 1), 800);
}

// Una ejecución
// sumarUno(5, function (nuevoValor) {
//   console.log(nuevoValor);
// });

// Dos ejecuciones
sumarUno(5, function (nuevoValor) {
  // Se ejecuta por segunda vez, pero ahora con el valor de la primera iteración
  sumarUno(nuevoValor, function (nuevoValorDos) {
    console.log(nuevoValorDos);
  });
});
