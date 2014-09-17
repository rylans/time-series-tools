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
};