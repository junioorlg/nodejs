function inicio(){
	console.log('he entrado en la pagina de inicio');
	return "inicio";
}

function pagina1(){
	console.log('he entrado en la pagina 1');
	return "paginal1";
}

function pagina2(){
	console.log('he entrado en la pagina 2');
	return "paginal2";
}

function favicon(){
	console.log('se ha pedido el favicon');
	return "";
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;