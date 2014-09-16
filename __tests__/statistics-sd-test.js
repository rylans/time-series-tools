jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('statistics-sd-test.log'));
  
describe('sd', function(){
  var stats = require('../src/statistics');
  var sd = stats.sd;
	
  it('produces correct values', function(){
    log.info('SPEC: sd produces correct values');

	var list = [206,76,-224,36,-94];
	var expected = 147.32277488562318;
	var actual = sd(list);

	log.info("Input: " + list);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	expect(actual).toBeCloseTo(expected, 12);
  });
});