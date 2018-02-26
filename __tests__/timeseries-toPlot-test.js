jest.autoMockOff();

var fs = require('fs');
  
describe('toPlot', function(){
  var ts = require('../src/timeseries');
  
  it('returns correct list for synthetic time', function(){
	
	var list = [9, 5, 2, 1, 14];
	var expected = [[0,9], [1, 5], [2, 2], [3, 1], [4, 14]];
	var series = ts.Timeseries(list, null);
	var actual = series.toPlot();

	expect(actual).toEqual(expected);
  });
 
  it('returns correct list for real time', function(){
	
	var list = [1, 2, 4, 8, 16];
	var time = [20, 30, 40, 50, 60];
	var expected = [[20,1], [30,2], [40,4], [50,8], [60,16]];
	var series = ts.Timeseries(list, time);
	var actual = series.toPlot();

	expect(actual).toEqual(expected);
  });  
});
