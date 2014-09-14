/*
* statistics.js
*
* Rylan Santinon
*/

//sample mean
function avg(list){
  if(list.length === 0) throw new Error("List length is zero");
  var avg = 0.0;
  for(var i = 0; i < list.length; i++){
    avg = avg + list[i];
  }
  return (avg/list.length);
}

//variance
function variance(list){
  if(list.length === 0) throw new Error("List length is zero");
  var m = avg(list);
  var sum = 0;
  for(var i = 0; i < list.length; i++){
    sum = sum + (list[i] - m) * (list[i] - m);
  }
  var variance = sum/list.length;
  
  if(variance < 0) throw new Error("Variance is never negative");
  return variance;
}
module.exports = {
  avg: avg,
  variance: variance
};