jest.autoMockOff();

var fs = require('fs');
  
describe('median', function(){
  var stats = require('../src/statistics');
  var median = stats.median;
 
  it('calculates results for even number of elements', function(){
	var list = [20, 10, 30, 4];
	var expected = 25.0;
	var actual = median(list);

	expect(actual).toBeCloseTo(expected, 12);
  });
  
  it('calculates results for odd number of elements', function(){
	
	var list = [59,-12,11];
	var expected = 11;
	var actual = median(list);

	expect(actual).toBeCloseTo(expected, 12);
  });
  
  it('throws error when list is empty', function(){
	var list = [];
	var expected_err = "List length is zero";
	

    expect(function() {median(list);}).toThrow(new Error(expected_err));
 });
});
