jest.autoMockOff();

var fs = require('fs');
  
describe('simple exponential', function(){
  var filtering = require('../src/filtering');
  var ses = filtering.simple_exponential_smoothing;
 
  it('returns correct results for series', function(){
	var list = [6.4, 5.6, 7.8, 8.8, 11.0, 11.6, 16.7, 15.3, 21.6, 22.4];
	var elst = [6.4, 6.2, 6.7, 7.3, 8.4, 9.4, 11.6, 12.7, 15.4];
	var actual = ses(list, 0.3);
	for(var i = 0; i < elst.length; i++){
		expect(actual[i]).toBeCloseTo(elst[i], 1);
	}
  });
});
