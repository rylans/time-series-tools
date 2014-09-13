jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('diff-test.log'));

describe('Average', function() {
 it('four numbers to equal 2.0', function() {
   var stats = require('../statistics');
   var avg = stats.avg;
   var list = [1.2, 4.4, 1.1, 1.3];
  
   expect(avg(list)).toBeCloseTo(2.0, 12);
 });
 
 it('throws error due to empty list', function(){
   var stats = require('../statistics');
   var avg = stats.avg;
   var list = [];
  
   expect(function() {avg(list);}).toThrow(new Error("List length is zero"));
 });
});