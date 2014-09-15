/**
* @file statistics.js
* @author Rylan Santinon
*/

/**
* Calculates the arithmetic mean
* @param {Array.<Number>} list
* @return {Number} mean
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
* @param {Array.<Number>} list
* @return {Number} variance
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
  list.sort(function(a,b) {return a - b;});
  var len = list.length;
  if(len%2 != 0){
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
  return 3*(mean(list) - median(list))/standard_deviation(list);
}

module.exports = {
  mean: avg,
  avg: avg,
  
  median: median,
  
  skew: skewness,
  skewness: skewness,
  
  variance: variance,
 
  sd: standard_deviation,
  standard_deviation: standard_deviation
};