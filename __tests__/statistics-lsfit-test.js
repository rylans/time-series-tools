jest.autoMockOff();

var fs = require('fs')
  
describe('lsfit', function(){
  var stats = require('../src/statistics');
  var lsfit = stats.lsfit;

  it('produces correct values', function(){

	var xcol = [6,3,6,9,3,9,6,3,9,6,3,9];
	var ycol = [526, 421, 581, 630, 412, 560, 434, 443, 590, 570, 346, 672];
	var expected_intercept = 307.91666666666663;
	var expected_slope = 34.5833333333336;
	var actual = lsfit(xcol, ycol);

	expect(actual[0]).toBeCloseTo(expected_intercept, 12);
	expect(actual[1]).toBeCloseTo(expected_slope, 12);
  });
});
