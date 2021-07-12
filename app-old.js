// Web Server
// Puedes probarlo entrando a localhost:8080
const http = require('http');

http.createServer((request, response) => {

     // console.log(request);

     const persona = {
          id: 1,
          nombre: 'Alexis Rojas'
     }

     // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');

     // Permite enviar codigos de respuesta y el tipo de contenido
     // response.writeHead(200, {'Content-Type': 'application/json'});
     // response.writeHead(200, {'Content-Type': 'application/csv'});
     // response.writeHead(200, {'Content-Type': 'text/plain'});

     // Imprime un mensaje en pantalla, en el navegador web
     // response.write(JSON.stringify(persona));
     // response.write('Id \n');
     // response.write('Nombre \n');
     // Indicamos la finalizacion de la respuesta

     response.write('Hola Mundo')
     response.end();
}).listen(8080);

console.log('Escuchando el puerto', 8080);