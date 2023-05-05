const Car = require('./car');

describe(`Car`, () => {
  let car;

  beforeEach(() => {
    car = new Car('Tesla', 20000, 'electric');
  });

  describe('hasName()', () => {
    test('returns true if has name', () => {
      expect(car.hasName()).toBe(true);
    });
  });

  describe('setName()', () => {
    test('sets car manufacturer name', () => {
      car.setName('Toyota');
      expect(car.manufacturer).toBe('Toyota');
    });
  });

  describe('hasPrice()', () => {
    test('returns true if has Price', () => {
      expect(car.hasPrice()).toBe(true);
    });
  });

  describe('setPrice()', () => {
    test('sets car manufacturer price', () => {
      car.setPrice('30000');
      expect(car.price).toBe('30000');
    });
  });

  describe('hasEngine()', () => {
    test('returns true if has engine', () => {
      expect(car.hasEngine()).toBe(true);
    });
  });

  describe('setEngine()', () => {
    test('sets car engine type', () => {
      car.setName('gas');
      expect(car.manufacturer).toBe('gas');
    });
  });

});

