var servidor = require('http');

function arrancaServidor(requiere,respuesta){
	console.log('Alguien se ha conectado al servidor');
	respuesta.writeHead(200,{"Content-type":"text/html"});
	respuesta.write("<h1>El servidor funciona correctamente</h1>");
	respuesta.end;
}

servidor.createServer(arrancaServidor).listen(8888);