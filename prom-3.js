function sumarLento(numero) {
  // Se retorna la promesa.
  return new Promise(function (resolve, reject) {
    // Se ejecuta un time out.
    setTimeout(function(){
      // Se aumenta el número en uno.
      resolve(numero + 1);
    }, 800)
  });
}

// Declaración de función usando estándares de ES6.
let sumarRapido = (numero) => {
  // Se retorna una promesa.
  return new Promise((resolve, reject) => {
    // Se define un Time out.
    setTimeout( () => resolve(numero+1), 300);
  });
}

// Se llama a ambas funciones y se imprime el resultado en consola.
sumarLento(5).then(console.log);
sumarRapido(10).then(console.log);

// Ejecutar "n" promesas de manera simultanea.
// El resultado se retorna en el orden de las promesas pasadas por parámetros, es decir, de primero se retorna el resultado de sumarLento.
Promise.all([sumarLento(5), sumarRapido(10)])
.then(respuestas => {
  console.log(respuestas);
})
.catch(console.log);