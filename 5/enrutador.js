function enrutar(manejador, ruta, respuesta){
	if (ruta == "/favicon.ico"){
	}else{
		console.log('Voy a rutear algo para ' + ruta);
		if( typeof manejador[ruta] === "function"){
			return manejador[ruta](respuesta);
		}else{
			console.log("no existe una funcion para " + ruta);
		}
	}
}

exports.enrutar = enrutar;