const Car = function (manufacturer, price, engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;

};

    Car.prototype.hasName = function() {
        return !!this.manufacturer;
};

    Car.prototype.setName = function(manufacturer){
        this.manufacturer = manufacturer;
};

    Car.prototype.hasPrice = function() {
    return !!this.price;
 };

    Car.prototype.setPrice = function(price){
    this.price = price;
};

    Car.prototype.hasEngine = function() {
        return !!this.engineType;
};

    Car.prototype.setEngine = function(engineType){
        this.manufacturer = engineType;
};




module.exports = Car;