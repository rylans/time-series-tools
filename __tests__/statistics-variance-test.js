jest.autoMockOff();

var fs = require('fs')
  
describe('variance', function(){
  var stats = require('../src/statistics');
  var variance = stats.variance;
 
  it('produces correct values', function(){
	var list = [206,76,-224,36,-94];
	var expected = 21704.0;
	var actual = variance(list);

	expect(actual).toBeCloseTo(expected, 12);
  });
  
  it('throws error when list is empty', function(){
	
	var list = [];
	var expected_err = "List length is zero";
	
    expect(function() {variance(list);}).toThrow(new Error(expected_err));
 });
});
