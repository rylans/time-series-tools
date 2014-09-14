/*
* statistics.js
*
* Rylan Santinon
*/

/**
* Calculates the arithmetic mean
*/
function avg(list){
  if(list.length === 0) throw new Error("List length is zero");
  var avg = 0.0;
  for(var i = 0; i < list.length; i++){
    avg = avg + list[i];
  }
  return (avg/list.length);
}

/**
* Calculates the variance
*/
function variance(list){
  if(list.length === 0) throw new Error("List length is zero");
  var m = avg(list);
  var sum = 0.0;
  for(var i = 0; i < list.length; i++){
    sum = sum + (list[i] - m) * (list[i] - m);
  }
  var variance = sum/list.length;
  
  if(variance < 0) throw new Error("Variance is never negative");
  return variance;
}

function standard_deviation(list){
  return Math.sqrt(variance(list));
}

module.exports = {
  mean: avg,
  avg: avg,
  
  variance: variance,
 
  sd: standard_deviation,
  standard_deviation: standard_deviation
};