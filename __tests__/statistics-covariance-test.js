jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('statistics-covariance-test.log'));
  
describe('covariance', function(){
  it('produces correct values', function(){
    log.info('SPEC: covariance produces correct values');

    var stats = require('../statistics');
	var cov = stats.cov;
	
	var xcol = [2.1, 2.5, 4.0, 3.6]
	var ycol = [8, 12, 14, 10]
	var expected = 1.5333333333332;
	var actual = cov(xcol, ycol);

	log.info("Input X : " + xcol);
	log.info("Input Y : " + ycol);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	expect(actual).toBeCloseTo(expected, 12);
  });
});