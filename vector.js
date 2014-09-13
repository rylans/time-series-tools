/**
* vector.js
*
* Rylan Santinon
*/

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('testv.log'));

function diff(vec){
  log.error("diff() being called\n");
  return diff_lag(vec, 1);
}

function diff_lag(vec, lag){
  log.error("diff( , ) being called\n");
  var vlen = vec.length;
  if(vlen <= lag) throw new Error("Vector has too few elements");
  var diff_vector = [];
  for(var i = 0; i < vlen - lag; i++){
    diff_vector.push(vec[i+1] - vec[i]);
  }
  return diff_vector;
}

module.exports = {
  diff: diff
};