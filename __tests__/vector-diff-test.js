jest.autoMockOff();

var fs = require('fs');

describe('diff', function(){
  var vector = require('../src/vector');
  var diff = vector.diff;

  it('produces correct values', function(){
    var list = [9,6,3,2,3];
    var expected = [-3, -3, -1, 1];
    var actual = diff(list);

    expect(actual).toEqual(expected);
  });
  
  it('has output length equal to input - 1', function(){
	
	var list = [13, 2.1, 95.14, 23133.9998, 239, 1.12, 2, 0.1285];
	var expected = list.length - 1;
	var actual = diff(list).length;
	

	expect(actual).toEqual(expected);
  });
  
  it('throws error when input is empty', function(){
	
	var list = [];
	var expected_err = "Vector has too few elements";
	
    expect(function() {diff(list);}).toThrow(new Error(expected_err));
  });
});
