var servidor = require('http'),
	url = require('url'),
	fs = require('fs');

function iniciar(enrutar, manejador){
	function arrancaServidor(requiere,respuesta){

		var ruta = url.parse(requiere.url).pathname;
		if (ruta == "/favicon.ico"){	
		}else{
			console.log('Alguien se ha conectado al servidor');
			var contenido = enrutar(manejador,ruta),
				registro = fs.createWriteStream('registro.txt',{'flags':'a'});
			registro.write(ruta + "\n")
			respuesta.writeHead(200,{"Content-type":"text/html"});
			respuesta.write("<h1>" + contenido + "</h1>");
			respuesta.end;
		}
	}
	servidor.createServer(arrancaServidor).listen(8888);
}

exports.iniciar = iniciar;