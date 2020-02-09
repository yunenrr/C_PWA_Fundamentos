function sumarLento(numero) {
  // Se retorna la promesa.
  return new Promise(function (resolve, reject) {
    // Se ejecuta un time out.
    setTimeout(function(){
      // Se aumenta el número en uno.
      resolve(numero + 1);
      //reject('Sumar lento falló');
    }, 800)
  });
}

// Declaración de función usando estándares de ES6.
let sumarRapido = (numero) => {
  // Se retorna una promesa.
  return new Promise((resolve, reject) => {
    // Se define un Time out.
    setTimeout( () => {
      //resolve(numero+1)
      reject('Error en sumar rápido');
    }, 1000);
  });
}


// Ejecuta "n" promesas, las pone a compertir entre sí y retorna el resultado de la que se ejecuta primero.
Promise.race([sumarLento(5), sumarRapido(10)])
.then(respuesta => {
  console.log(respuesta);
})
.catch(console.log);