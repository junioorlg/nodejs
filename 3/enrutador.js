function enrutar(manejador, ruta){
	console.log('Voy a rutear algo para ' + ruta);
	return manejador[ruta]();
}

exports.enrutar = enrutar;