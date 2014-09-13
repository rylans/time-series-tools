jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('vector-diff-test.log'));

describe('diff', function(){
  it('produces correct values', function(){
    log.info('SPEC: diff produces correct values');

    var vector = require('../vector');
	var diff = vector.diff;
	
	var list = [9,6,3,2,3];
	var expected = [-3, -3, -1, 1];
	var actual = diff(list);

	log.info("Input: " + list);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	expect(actual).toEqual(expected);
  });
  
  it('has output length equal to input - 1', function(){
    log.info('SPEC: diff has output length equal to input - 1');

    var vector = require('../vector');
	var diff = vector.diff;   
	
	var list = [13, 2.1, 95.14, 23133.9998, 239, 1.12, 2, 0.1285];
	var expected = list.length - 1;
	var actual = diff(list).length;
	
	log.info("Input: " + list);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	expect(actual).toEqual(expected);
  });
  
  it('throws error when input is empty', function(){
    log.info('SPEC: diff throws error when input is empty');
	
    var vector = require('../vector');
    var diff = vector.diff;
	
	var list = [];
	var expected_err = "Vector has too few elements";
	
	log.info("Expected error: " + expected_err);
	
    expect(function() {diff(list);}).toThrow(new Error(expected_err));
  });
});