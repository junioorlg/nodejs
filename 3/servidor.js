var servidor = require('http'),
	url = require('url');

function iniciar(enrutar, manejador){
	function arrancaServidor(requiere,respuesta){

		var ruta = url.parse(requiere.url).pathname;
		
		console.log('Alguien se ha conectado al servidor');

		enrutar(manejador,ruta);
		respuesta.writeHead(200,{"Content-type":"text/html"});
		respuesta.write("<h1>El servidor funciona correctamente</h1>");
		respuesta.end;
	}
	servidor.createServer(arrancaServidor).listen(8888);
}

exports.iniciar = iniciar;