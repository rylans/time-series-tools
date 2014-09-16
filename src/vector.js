/**
* vector.js
*
* Rylan Santinon
*/

function diff(vec){
  return diff_lag(vec, 1);
}

function diff_lag(vec, lag){
  var vlen = vec.length;
  
  if(lag <= 0) throw new Error("Lag must be greater than zero");
  if(vlen <= lag) throw new Error("Vector has too few elements");
 
  var diff_vector = [];
  for(var i = 0; i < vlen - lag; i++){
    diff_vector.push(vec[i + lag] - vec[i]);
  }
  return diff_vector;
}

module.exports = {
  diff: diff
};