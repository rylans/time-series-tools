jest.autoMockOff();

var fs = require('fs')
  
describe('covariance', function(){
  var stats = require('../src/statistics');
  var cov = stats.cov;

  it('produces correct values', function(){
	var xcol = [2.1, 2.5, 4.0, 3.6];
	var ycol = [8, 12, 14, 10];
	var expected = 1.5333333333332;
	var actual = cov(xcol, ycol);

	expect(actual).toBeCloseTo(expected, 12);
  });
});
