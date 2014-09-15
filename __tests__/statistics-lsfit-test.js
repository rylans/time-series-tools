jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('statistics-lsfit-test.log'));
  
describe('lsfit', function(){
  it('produces correct values', function(){
    log.info('SPEC: lsfit produces correct values');

    var stats = require('../statistics');
	var lsfit = stats.lsfit;
	
	var xcol = [6,3,6,9,3,9,6,3,9,6,3,9]
	var ycol = [526, 421, 581, 630, 412, 560, 434, 443, 590, 570, 346, 672]
	var expected_intercept = 307.91666666666663;
	var expected_slope = 34.5833333333336;
	var actual = lsfit(xcol, ycol);

	log.info("sum x : " + stats.sum(xcol));
	log.info("sum y : " + stats.sum(ycol));
	log.info("Input X : " + xcol);
	log.info("Input Y : " + ycol);
	log.info("Expected: " + expected_intercept + " " + expected_slope);
	log.info("Actual: " + actual);

	expect(actual[0]).toBeCloseTo(expected_intercept, 12);
	expect(actual[1]).toBeCloseTo(expected_slope, 12);
  });
});