jest.dontMock('../statistics');

describe('Average', function() {
 it('throws error due to empty list', function(){
   var stats = require('../statistics');
   var avg = stats.avg;
   var list = [];
  
   expect(function() {avg(list);}).toThrow(new Error("List length is zero"));
 });
});