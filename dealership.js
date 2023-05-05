const Dealership = function (name, maxNoOfCars){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.stock = [];

};

    Dealership.prototype.stockCount = function() {
        return this.stock.length;

};
    Dealership.prototype.addCarToStock = function(newCar){
        if(this.stockCount()< this.maxNoOfCars){
            this.stock.push(newCar);
            return true
        } else {
            return false;
        }
};

    Dealership.prototype.getAllCarManufacturers = function() {
        const manufacturers = this.stock.map(car => car.manufacturer); 
        return Array.from(new Set(manufacturers));
  };


module.exports = Dealership;
