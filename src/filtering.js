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

	module.filtering = {
		simple_moving_average: simple_moving_average
	};
	return module;
}(tstModule || {}));

if (typeof module !== 'undefined' && module.exports)
	module.exports = {
	  simple_moving_average: tstModule.filtering.simple_moving_average
	};