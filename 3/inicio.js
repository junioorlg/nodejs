var servidor = require('./servidor'),
	enrutador = require('./enrutador'),
	peticiones = require('./peticiones'),
	manejador = {};

manejador['/'] = peticiones.inicio;
manejador['/pagina1'] = peticiones.pagina1;
manejador['/pagina2'] = peticiones.pagina2;

servidor.iniciar(enrutador.enrutar, manejador);