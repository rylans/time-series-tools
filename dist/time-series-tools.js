/**
* @file Timeseries.js
* @author Rylan Santinon
*/

function Timeseries(dataValues, timeValues){
	if(dataValues === null) throw new Error("Values may not be null");
	this.dataValues = dataValues;

	if(timeValues === null){
		var i;
		var syntheticTimes = [];
		for(i = 0; i < dataValues.length; i++){
		  syntheticTimes.push(i);
		}
		this.timeValues = syntheticTimes;
	} else {
      if(dataValues.length !== timeValues.length)
        throw new Error("Both columns must have same number of elements");
	
	  this.timeValues = timeValues;
	}
	
	Object.freeze(this);
}

Timeseries.prototype.toPlot = function(){
	"use strict";
	var zipped = [];
	var i;
	for(i = 0; i < this.dataValues.length; i++){
		var e = [];
		e.push(this.timeValues[i]);
		e.push(this.dataValues[i]);

		zipped.push(e);
	}
	return zipped;
};

if (typeof module !== 'undefined' && module.exports)
module.exports = {
  Timeseries: Timeseries
};;/**
* @file Functions for filtering and smoothing time series
* @author Rylan Santinon
*/

/**
* Throw an exception if list's length is zero
* @param {Array} list
*/
function assertNotEmpty(list){
  if(list.length === 0) 
    throw new Error("List length is zero");
}

/**
* Calculates the simple moving average with (2*range + 1) points
* @param {Array.<Number>} series
* @param {Number} order
* @return {Array.<Number>} moving average series
*/
function simple_moving_average(series, range){
	"use strict";
	assertNotEmpty(series);
	var slen = series.length;
	
	var window = 2*range + 1;
	var sma_series = [];

	for(var i = 0; i < (slen - window) + 1; i++){
		var average = 0;
		
		for(var j = i; j < i + window; j++){
			average = average + series[j];
		}
		sma_series.push(average / window);
	}
	
	return sma_series;
}

if (typeof module !== 'undefined' && module.exports)
module.exports = {
  simple_moving_average: simple_moving_average
};;/**
* @file Basic descriptive statistics.
* @author Rylan Santinon
*/

var tstModule = (function(module) {
	'use strict';

	/**
	* Throw an exception if list's length is zero
	* @param {Array} list
	*/
	function assertNotEmpty(list){
	  if(list.length === 0) 
		throw new Error("List length is zero");
	}

	/**
	* Throw an exception if both lists don't have the same length
	* @param {Array} list
	*/
	function assertSameLength(list1, list2){
	  if(list1.length !== list2.length)
		throw new Error("Both columns must have same number of elements");
	}

	/**
	* Calculates the arithmetic mean
	* @param {Array.<Number>} list
	* @return {Number} mean
	*/
	function avg(list){
	  assertNotEmpty(list);
	  var cumulative_sum = 0.0;
	  for(var i = 0; i < list.length; i++){
		cumulative_sum = cumulative_sum + list[i];
	  }
	  return cumulative_sum/list.length;
	}

	/**
	* Calculates the variance
	* @param {Array.<Number>} list
	* @return {Number} variance
	*/
	function variance(list){
	  assertNotEmpty(list);
	  var m = avg(list);
	  var sum = 0.0;
	  for(var i = 0; i < list.length; i++){
		sum = sum + (list[i] - m) * (list[i] - m);
	  }
	  var v = sum/list.length;
	  
	  if(v < 0) throw new Error("Variance is never negative");
	  return v;
	}

	/**
	* Calculates the covariance of two columns
	* @param {Array.<Number>} x column
	* @param {Array.<Number>} y column
	* @return {Number} covariance of x and y
	*/
	function covariance(xcol, ycol){
	  assertNotEmpty(xcol);
	  assertNotEmpty(ycol);
	  assertSameLength(xcol, ycol);

	  var xmean = avg(xcol);
	  var ymean = avg(ycol);
	  var cov = 0.0;
	  for(var i = 0; i < xcol.length; i++){
		cov = cov + (xcol[i] - xmean)*(ycol[i] - ymean);
	  }
	  
	  return cov/(xcol.length - 1);
	}

	/**
	* Calculates the linear least squares fit for the two columns
	* @param {Array.<Number>} x column
	* @param {Array.<Number>} y column
	* @return {Array.<Number>} array[0] is y-intercept and array[1] is slope
	*/
	function least_squares_fit(xcol, ycol){
	  var slope = covariance(xcol, ycol)/covariance(xcol, xcol);
	  var intercept = avg(ycol) - slope*avg(xcol);
	  
	  return [intercept, slope];
	}

	/**
	* Calculates the population standard deviation
	* @param {Array.<Number>} list
	* @return {Number} standard deviation
	*/
	function standard_deviation(list){
	  return Math.sqrt(variance(list));
	}

	/**
	* Calculates the median
	* @param {Array.<Number>} list
	* @return {Number} median
	*/ 
	function median(list){
	  assertNotEmpty(list);

	  list.sort(function(a,b) {return a - b;});
	  var len = list.length;
	  if(len%2 !== 0){
		return list[Math.floor(len/2)];
	  } else {
		return (list[len/2] + list[(len/2) + 1])/2;
	  }
	}

	/**
	* Calculates the skewness
	* @param {Array.<Number>} list
	* @return {Number} skewness
	*/ 
	function skewness(list){
	  return 3*(avg(list) - median(list))/standard_deviation(list);
	}

	/**
	* Calculates the sum
	* @param {Array.<Number>} list
	* @return {Number} sum
	*/ 
	function sum(list){
	  var len = list.length;
	  var sum_total = 0;
	  for(var i = 0; i < len; i++){
		sum_total = sum_total + list[i];
	  }
	  return sum_total;
	}

	/**
	* Calculates the maximum
	* @param {Array.<Number>} list
	* @return {Number} max
	*/
	function max(list){
	  assertNotEmpty(list);
	  list.sort(function(a,b) {return a - b;});
	  return list[list.length - 1];
	}

	/**
	* Calculates the minimum
	* @param {Array.<Number>} list
	* @return {Number} min
	*/
	function min(list){
	  assertNotEmpty(list);
	  list.sort(function(a,b) {return a - b;});
	  return list[0];
	}
	
	module.statistics = {
		max: max,
		min: min,
		sum: sum,
		avg: avg,
		median: median,
		skewness: skewness,
		variance: variance,
		covariance: covariance,
		least_squares_fit: least_squares_fit,
		standard_deviation: standard_deviation
	};
	return module;
}(tstModule || {}));

if (typeof module !== 'undefined' && module.exports)
	module.exports = {
	  max: tstModule.statistics.max,
	  min: tstModule.statistics.min,
	  sum: tstModule.statistics.sum,
	  mean: tstModule.statistics.avg,
	  avg: tstModule.statistics.avg,
	  median: tstModule.statistics.median,
	  skew: tstModule.statistics.skewness,
	  skewness: tstModule.statistics.skewness,
	  variance: tstModule.statistics.variance,
	  cov: tstModule.statistics.covariance,
	  covariance: tstModule.statistics.covariance,
	  lsfit: tstModule.statistics.least_squares_fit,
	  least_squares_fit: tstModule.statistics.least_squares_fit,
	  sd: tstModule.statistics.standard_deviation,
	  standard_deviation: tstModule.statistics.standard_deviation
	};;/**
* vector.js
*
* Rylan Santinon
*/

function diff(vec){
  return diff_lag(vec, 1);
}

function diff_lag(vec, lag){
  var vlen = vec.length;
  
  if(lag <= 0) throw new Error("Lag must be greater than zero");
  if(vlen <= lag) throw new Error("Vector has too few elements");
 
  var diff_vector = [];
  for(var i = 0; i < vlen - lag; i++){
    diff_vector.push(vec[i + lag] - vec[i]);
  }
  return diff_vector;
}

if (typeof module !== 'undefined' && module.exports)
module.exports = {
  diff: diff
};