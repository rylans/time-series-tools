jest.dontMock('../statistics');

describe('Average', function() {
 it('four numbers to equal 2.0', function() {
   var stats = require('../statistics');
   var avg = stats.avg;
   var list = [1.2, 4.4, 1.1, 1.3];
  
   expect(avg(list)).toBeCloseTo(2.0, 12);
 });
});