
class EventEmitter {

	constructor() {
		this.events = {} ;
	}
	
	on(event, listener) {
		if( !this.events[event]){	// si el valor pasado no es un array
			this.events[event] = [];
		}
		this.events[event].push(listener);
	}
	
	emit(event, args) {
		if(this.events[event] instanceof Array) { // si el evento es un array
			for (let i=0 ; i<this.events[event].length ; i++){
				this.events[event][i](args);
			}
		}
	}

}

exports = module.exports = EventEmitter;