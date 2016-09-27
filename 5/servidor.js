var servidor = require('http'),
	url = require('url'),
	fs = require('fs');

function iniciar(enrutar, manejador){
	function arrancaServidor(requiere,respuesta){

		var ruta = url.parse(requiere.url).pathname;
		if (ruta == "/favicon.ico"){	
		}else{
			console.log('Alguien se ha conectado al servidor');
			var /*contenido = enrutar(manejador,ruta,respuesta),*/
				ruta = ((ruta == "/") ? "index.html" : ruta),
				index = fs.readFileSync("www/" + ruta),
				registro = fs.createWriteStream('registro.txt',{'flags':'a'});
			registro.write(ruta + "\n")
			respuesta.writeHead(200,{"Content-type":"text/html"});
			respuesta.write(index);
			respuesta.end;
		}
	}
	servidor.createServer(arrancaServidor).listen(8888);
}

exports.iniciar = iniciar;