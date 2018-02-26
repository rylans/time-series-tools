jest.autoMockOff();

var fs = require('fs')

describe('avg', function() {
  var stats = require('../src/statistics');
  var avg = stats.avg;

  it('produces four numbers to equal 2.0', function() {

    var list = [1.2, 4.4, 1.1, 1.3];
    var expected = 2.0;
    var actual = avg(list);
  
    expect(actual).toBeCloseTo(expected, 12);
 });
 
  it('throws error due to empty list', function(){

    var list = [];
    var expected_err = "List length is zero";

    expect(function() {avg(list);}).toThrow(new Error(expected_err));
 });
});
