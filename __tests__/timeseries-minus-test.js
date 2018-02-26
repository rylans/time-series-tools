jest.autoMockOff();

var fs = require('fs')
  
describe('minus', function(){
  var ts = require('../src/timeseries');
  
  it('returns correct values', function(){
	
	var list1 = [9, 5, 2, 1, 14];
	var list2 = [2, -4, 9, 4, 1];
	var ts1 = ts.Timeseries(list1, null);
	var ts2 = ts.Timeseries(list2, null);
	var actual = ts1.minus(ts2);
	var expected = ts.Timeseries([7, 9, -7, -3, 13], null);

	expect(actual).toEqual(expected);
  });
  
  it('returns correct values for real times', function(){
	var list1 = [9, 5, 2, 1, 14];
	var list2 = [2, -4, 9, 4, 1];
	var ts1 = ts.Timeseries(list1, null);
	var ts2 = ts.Timeseries(list2, [5,10,15,20,25]);
	var actual = ts1.minus(ts2);
	var expected = ts.Timeseries([7, 9, -7, -3, 13], [5,10,15,20,25]);

	expect(actual).toEqual(expected);
  });
});
