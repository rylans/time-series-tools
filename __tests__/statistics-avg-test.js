jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('statistics-avg-test.log'));

describe('avg', function() {
  it('produces four numbers to equal 2.0', function() {
    log.info('SPEC: avg produces four numbers to equal 2.0');
 
    var stats = require('../statistics');
    var avg = stats.avg;

    var list = [1.2, 4.4, 1.1, 1.3];
    var expected = 2.0;
    var actual = avg(list);
   
    log.info("Input: " + list);
    log.info("Expected: " + expected);
    log.info("Actual: " + actual);
  
    expect(actual).toBeCloseTo(expected, 12);
 });
 
  it('throws error due to empty list', function(){
    log.info('SPEC: throws error due to empty list');

    var stats = require('../statistics');
    var avg = stats.avg;

    var list = [];
	var expected_err = "List length is zero";
	
	log.info("Expected error: " + expected_err);

    expect(function() {avg(list);}).toThrow(new Error(expected_err));
 });
});