jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('timeseries-toPlot-test.log'));
  
describe('toPlot', function(){
  var ts = require('../src/timeseries');
  
  it('returns correct list for synthetic time', function(){
    log.info('SPEC: toPlot returns correct list for synthetic time');
	
	var list = [9, 5, 2, 1, 14];
	var expected = [[0,9], [1, 5], [2, 2], [3, 1], [4, 14]];
	var series = ts.Timeseries(list, null);
	var actual = series.toPlot();

	log.info("Input: " + list);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	expect(actual).toEqual(expected);
  });
 
  it('returns correct list for real time', function(){
    log.info('SPEC: toPlot returns correct list for real time');
	
	var list = [1, 2, 4, 8, 16];
	var time = [20, 30, 40, 50, 60];
	var expected = [[20,1], [30,2], [40,4], [50,8], [60,16]];
	var series = ts.Timeseries(list, time);
	var actual = series.toPlot();

	log.info("Input: " + list);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	expect(actual).toEqual(expected);
  });  
});