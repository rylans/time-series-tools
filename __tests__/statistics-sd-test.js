jest.autoMockOff();

var fs = require('fs')
  
describe('sd', function(){
  var stats = require('../src/statistics');
  var sd = stats.sd;
	
  it('produces correct values', function(){

	var list = [206,76,-224,36,-94];
	var expected = 147.32277488562318;
	var actual = sd(list);

	expect(actual).toBeCloseTo(expected, 12);
  });
});
