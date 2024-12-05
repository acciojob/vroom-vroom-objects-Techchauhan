// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

//Adding the methord to a Car;
Car.prototype.getMakeModal = function (){
	return `${this.make} ${this.modal}`
}


function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	this.topSpeed = topSpeed;
}

SportsCar.prototype.Object.create(car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function (){
	return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
