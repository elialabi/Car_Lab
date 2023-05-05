const Dealership = function (name, maxNoOfCars){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.stock = [Car];

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
        const manufacturers = this.stock.map(car => car.manufacturer); r
        return Array.from(new Set(manufacturers));
  };


//     Car.prototype.hasPrice = function() {
//     return !!this.price;
//  };

//     Car.prototype.setPrice = function(price){
//     this.price = price;
// };

//     Car.prototype.hasEngine = function() {
//         return !!this.engineType;
// };

//     Car.prototype.setEngine = function(engineType){
//         this.manufacturer = engineType;
// };

module.exports = Dealership;
module.exports = Car;