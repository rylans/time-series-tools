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
	
	/**
	* Make all elements greater than zero and then take the log
	* of every element
	*/
	Timeseries.prototype.log = function(){
		var minVal = this.dataValues[0];
		for(var i = 0; i < this.dataValues.length; i++){
			if(this.dataValues[i] < minVal) minVal = this.dataValues[i];
		}
		
		var newData = [];
		if(minVal < 0) minVal = minVal * -1;
		else minVal = 0;

		for(var j = 0; j < this.dataValues.length; j++){
			newData.push(Math.log(this.dataValues[j] + minVal + 1));
		}
		return new Timeseries(newData, this.timeValues);
	};
	
	/**
	* Return a new timeseries representing this minus ts
	*/
	Timeseries.prototype.minus = function(ts){
		var dataAxis = [];
		for(var i = 0; i < ts.dataValues.length; i++){
			dataAxis.push(this.dataValues[i] - ts.dataValues[i]);
		}
		return new Timeseries(dataAxis, ts.timeValues);
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