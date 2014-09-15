jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('statistics-median-test.log'));
  
describe('median', function(){
  it('calculates results for even number of elements', function(){
    log.info('SPEC: median calculates results for even number of elements');

    var stats = require('../statistics');
	var median = stats.median
	
	var list = [20, 10, 30, 4];
	var expected = 25.0
	var actual = median(list);

	log.info("Input: " + list);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	expect(actual).toBeCloseTo(expected, 12);
  });
  
  it('calculates results for odd number of elements', function(){
    log.info('SPEC: median calculates results for odd number of elements');

    var stats = require('../statistics');
	var median = stats.median
	
	var list = [59,-12,11];
	var expected = 11
	var actual = median(list);

	log.info("halflen: " + Math.floor(list.length/2))
	
	
	log.info("Input: " + list);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	expect(actual).toBeCloseTo(expected, 12);
  });
});