jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('timeseries-minus-test.log'));
  
describe('minus', function(){
  var ts = require('../src/timeseries');
  
  it('returns correct values', function(){
    log.info('SPEC: minus returns correct values');
	
	var list1 = [9, 5, 2, 1, 14];
	var list2 = [2, -4, 9, 4, 1];
	var ts1 = ts.Timeseries(list1, null);
	var ts2 = ts.Timeseries(list2, null);
	var actual = ts1.minus(ts2);
	var expected = ts.Timeseries([7, 9, -7, -3, 13], null);

	log.info("Input: " + list1 + " " + list2);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	expect(actual).toEqual(expected);
  });
  
  it('returns correct values for real times', function(){
    log.info('SPEC: minus returns correct values for real times');
	
	var list1 = [9, 5, 2, 1, 14];
	var list2 = [2, -4, 9, 4, 1];
	var ts1 = ts.Timeseries(list1, null);
	var ts2 = ts.Timeseries(list2, [5,10,15,20,25]);
	var actual = ts1.minus(ts2);
	var expected = ts.Timeseries([7, 9, -7, -3, 13], [5,10,15,20,25]);

	log.info("Input: " + list1 + " " + list2);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	expect(actual).toEqual(expected);
  });
});