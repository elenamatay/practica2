
const EventEmitter = require('./events');
const later = require ('later');

// Clase Programador.
// Permite configurar la temperatura que de la habitacion en todo momento

class Programador  extends EventEmitter {

	constructor(arrayProgramador) { 
		super();

		later.date.localTime();
		
		if (arrayProgramador instanceof Array){
			for (let i = 0 ; i < arrayProgramador.length ; i++){
				let a = arrayProgramador[i]; 
				const sched = later.parse.text('at' + a.hora);
				later.setInterval( () => console.log(this.emit('ideal', a.temperatura), sched) );	// console.log() writes a message to the console
			}
		}
	}
}

exports = module.exports = Programador;