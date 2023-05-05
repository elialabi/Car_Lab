const  Dealership = require('./dealership');
const Car = require('./car');


describe(`Dealership`, () => {
  let dealership;

  beforeEach(() => {
    dealership = new Dealership(`Alabi's Auto`, 2, )
  });

describe('stockCount()', () => {
    test(`stock count is 0 when dealership created`, () => {
        expect(dealership.stockCount()).toBe(0);
  });
  });
});


    

