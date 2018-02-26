jest.autoMockOff();

var fs = require('fs');
  
describe('simple moving average', function(){
  var filtering = require('../src/filtering');
  var sma = filtering.simple_moving_average;
 
  it('returns correct results for range = 1', function(){
	var list = [2, 4.5, 10.5, 21.5];
	var expected = [5.666666666666667, 12.166666666666666];
	var actual = sma(list, 1);

	for(var i = 0; i < expected.length; i++){
		expect(actual[i]).toBeCloseTo(expected[i], 12);
	}
  });
  
   it('returns correct results for range = 2', function(){
	
	var list = [];
	for(var j = 0; j < 11; j++){
		list.push(j);
	}
	var expected = [2,3,4,5,6,7,8];
	var actual = sma(list, 2);

	for(var i = 0; i < expected.length; i++){
		expect(actual[i]).toBeCloseTo(expected[i], 12);
	}
  });
 
   it('throws error due to empty list', function(){

    var list = [];
    var expected_err = "List length is zero";

    expect(function() {sma(list,1);}).toThrow(new Error(expected_err));
 });  
});
