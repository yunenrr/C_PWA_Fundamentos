/**
 * Función que incrementa en uno el valor pasado por parámetros.
 * @param {number} numero Número que se desea incrementar.
 */
function sumarUno(numero) {
  // Se almacena la promesa
  // El resolve se ejecuta si todo sale bien.
  // El reject se ejecuta si ocurre un error.
  var promesa = new Promise( (resolve, reject) => {
    // Se muestra un mensaje en consola
    console.log(numero);

    // Se verifica que el monto no sea superior a 7.
    if(numero >= 7){
      // Se llama a la función reject.
      reject('El número es muy alto');
    }

    // Se ejecuta un Timer.
    // Se utiliza el resolve debido a que contiene el valor cuando toco ocurrió bien.
    setTimeout(() => resolve(numero + 1), 800);
  });
  // Se retorna la promesa
  return promesa;
}

// La función then se ejecuta cuando ya se haya terminado de ejecutar la promesa.
// console.log(sumarUno(5).then(nuevoNumero => {
//   console.log(nuevoNumero);
//   console.log("----------------------------------------------");
// }));

// // Función sumar uno con anidado
// sumarUno(5).then(nuevoNumero => {
//   console.log(nuevoNumero);
//   // Se retorna una promesa con el resultado de la primera operación.
//   return sumarUno(nuevoNumero);
// }).then(nuevoNumero => {
//   // Se ejecuta al obtener el resultado de la segunda petición.
//   console.log(nuevoNumero);
//   console.log("----------------------------------------------");
// });

// Función sumar uno con dos anidados
// sumarUno(8)
// .then(nuevoNumero => {
//   console.log(nuevoNumero);
//   console.log("--------------------------------------------------------");
// }).catch(error => {
//   console.log("Error: " + error);
// });

sumarUno(5)
.then(sumarUno)
.then(sumarUno)
.then(sumarUno)
.catch(error => {
  console.log("Error: " + error);
});


// .then(sumarUno)
// .then(nuevoNumero => {
//   // Se muestra en consola el resultado de la tercera operación.
//   console.log(nuevoNumero);
// });