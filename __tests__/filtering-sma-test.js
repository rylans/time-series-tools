jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('filtering-sma-test.log'));
  
describe('simple moving average', function(){
  var filtering = require('../src/filtering');
  var sma = filtering.simple_moving_average;
 
  it('returns correct results for range = 1', function(){
    log.info('SPEC: simple moving average returns correct results for range = 1');
	
	var list = [2, 4.5, 10.5, 21.5];
	var expected = [5.666666666666667, 12.166666666666666];
	var actual = sma(list, 1);

	log.info("Input: " + list);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	for(var i = 0; i < expected.length; i++){
		expect(actual[i]).toBeCloseTo(expected[i], 12);
	}
  });
  
   it('returns correct results for range = 2', function(){
    log.info('SPEC: simple moving average returns correct results for range = 2');
	
	var list = [];
	for(var j = 0; j < 11; j++){
		list.push(j);
	}
	var expected = [2,3,4,5,6,7,8];
	var actual = sma(list, 2);

	log.info("Input: " + list);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	for(var i = 0; i < expected.length; i++){
		expect(actual[i]).toBeCloseTo(expected[i], 12);
	}
  });
 
   it('throws error due to empty list', function(){
    log.info('SPEC: simple moving average throws error due to empty list');

    var list = [];
	var expected_err = "List length is zero";
	
	log.info("Expected error: " + expected_err);

    expect(function() {sma(list,1);}).toThrow(new Error(expected_err));
 });  
});