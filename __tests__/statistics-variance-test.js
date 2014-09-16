jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('statistics-variance-test.log'));
  
describe('variance', function(){
  it('produces correct values', function(){
    log.info('SPEC: variance produces correct values');

    var stats = require('../statistics');
	var variance = stats.variance;
	
	var list = [206,76,-224,36,-94];
	var expected = 21704.0;
	var actual = variance(list);

	log.info("Input: " + list);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	expect(actual).toBeCloseTo(expected, 12);
  });
  
  it('throws error when list is empty', function(){
    log.info('SPEC: variance throws error when list is empty');
	
	var stats = require('../statistics');
	var variance = stats.variance;
	
	var list = [];
	var expected_err = "List length is zero";
	
	log.info("Expected error: " + expected_err);

    expect(function() {variance(list);}).toThrow(new Error(expected_err));
 });
});