// Se declara una variable para ejecutar la petición.
var request = new XMLHttpRequest();

// Se abre una conexión/petición
// Se le indica el tipo de petición, la URL y si debe ser asíncrona o no.
request.open('GET', 'https://reqres.in/api/users', true);

// Por si se desea enviar información.
request.send(null);

// Se escuchan los cambios de estado del request.
request.onreadystatechange = function (state) {
  // Se verifica si el estado del request es finalizado.
  if(request.readyState === 4){
    // Se obtiene la información.
    var resp = request.response;

    // Se transforma la respuesta es un objeto.
    var respObj = JSON.parse(resp);

    console.log(respObj);
    console.log(respObj.page);
  }// Fin del if que verifica si el estado del request es finalizado.
}