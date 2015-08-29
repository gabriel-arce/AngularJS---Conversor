var FACTOR_CONVERSION = 1.609344;

function Conversor(){
	this.kilometros = NaN;
	this.millas = NaN;
	
	this.convertir = function() {
		this.kilometros = this.millas * FACTOR_CONVERSION;
	};

	this.convertirAMillas = function(){
		this.millas = this.kilometros * FACTOR_CONVERSION;
	};

	this.convertirAKilometros = function(){
		this.kilometros = this.millas / FACTOR_CONVERSION;
	};	
}
