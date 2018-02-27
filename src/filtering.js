/**
* @file Functions for filtering and smoothing time series
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

	function simple_exponential_smoothing(series, alpha){
	  assertNotEmpty(series);
	  var prev = 0.0;
	  var ses_series = [];

	  for(var i = 0; i < series.length; i++) {
	    if (i === 0){
	      ses_series.push(series[i]);
	    } else {
	      ses_series.push( alpha*series[i] + (1.0-alpha)*prev );
	    }
	    prev = ses_series[i];
	  }
	  return ses_series;
	}

	/**
	* Calculates the simple moving average with (2*range + 1) points
	* @param {Array.<Number>} series
	* @param {Number} order
	* @return {Array.<Number>} moving average series
	*/
	function simple_moving_average(series, range){
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
	
	/**
	* Low pass filter: dampen high frequencies 
	* @param {Array.<Number>} series
	* @return {Array.<Number>} low pass series
	*/
	function low_pass(series){
		return simple_moving_average(series, 3);
	}
	
	/**
	* High pass filter: dampen low frequencies 
	* @param {Array.<Number>} series
	* @return {Array.<Number>} high pass series
	*/
	function high_pass(series){
		var low = low_pass(series);
		var high = [];
		for(var i = 0; i < low.length; i++){
			high.push(series[i] - low[i]);
		}
		return high;
	}

	module.filtering = {
		simple_moving_average: simple_moving_average,
		simple_exponential_smoothing: simple_exponential_smoothing,
		low_pass: low_pass,
		high_pass: high_pass
	};
	return module;
}(tstModule || {}));

if (typeof module !== 'undefined' && module.exports)
	module.exports = {
		simple_moving_average: tstModule.filtering.simple_moving_average,
		simple_exponential_smoothing: tstModule.filtering.simple_exponential_smoothing,
		low_pass: tstModule.filtering.low_pass,
		high_pass: tstModule.filtering.high_pass
	};
