/**
* @file Timeseries class
* @author Rylan Santinon
*/

var tstModule = (function(module) {
	'use strict';

	/**
	* Construct a new immutable timeseries object
	* @constructor
	* @param {Array} dataValues
	* @param {Array} timeValues
	*/
	function Timeseries(dataValues, timeValues){
		if(!(this instanceof Timeseries)) return new Timeseries(dataValues, timeValues);

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
		
		//Object.freeze(this);
	}

	/**
	* Get a list of [x,y] coordinates corresponding to this
	*/
	Timeseries.prototype.toPlot = function(){
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

	module.timeseries = {
		Timeseries: Timeseries
	};
	return module;
}(tstModule || {}));

if (typeof module !== 'undefined' && module.exports)
	module.exports = {
	  Timeseries: tstModule.timeseries.Timeseries
	};