// Petición GET
// https://reqres.in/api/users

// Se llama a la función fetch. Brinda opciones de llamar a promesas si todo ocurre bien o si ocurre algo un error.
// fetch('https://reqres.in/api/users')
// .then(resp => {
//   // La respuesta brindada puede ser de diversos tipos: texto, JSON, etc.
//   // Se convierte el ReadableStream del body en un JSON.
//   // El método que se utiliza retorna una promesa.
//   resp.json().then(console.log);
// });

// Misma promesa pero con menos código.
fetch('https://reqres.in/api/users')
.then(resp => resp.json()) // Se recibe la respuesta de la primer promesa y se ejecuta la segunda promesa.
.then(respObj =>{ // Se recibe la respuesta de la segunda promesa.
  console.log(respObj);
  console.log(respObj.page);
  console.log(respObj.per_page);
});