//statistics.js

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
  var variance = 0;
  for(var i = 0; i < list.length; i++){
    variance = variance + (list[i] - m) * (list[i] - m);
  }
  return (variance/list.length);
}
module.exports = {
  avg: avg,
  variance: variance
};