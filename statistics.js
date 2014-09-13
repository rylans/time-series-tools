//statistics.js

//sample mean
function avg(list){
  var avg = 0.0;
  for(var i = 0; i < list.length; i++){
    avg = avg + list[i];
  }
  return (avg/list.length);
}

//variance
function variance(list){
  var m = avg(list);
  var variance = 0;
  for(var i = 0; i < list.length; i++){
    variance = variance + (list[i] - m) * (list[i] - m);
  }
  return (variance/list.length);
}
module.exports = {
  avg: function(p) {return avg(p);},
  variance: function(p) {return variance(p);}
};