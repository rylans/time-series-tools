jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('diff-test.log'));

describe('diff', function(){
  it('produces correct values', function(){
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
});