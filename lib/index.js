


var filter = require('./filter.js');





function map (func, arr) {
  var output  = [];
  for (var i = 0; i < arr.length; i++) {
    output.push(func(arr[i]));
  }
  return output;
}


function countIf (testFunc, arr) {
  var count = 0;
  arr.map(function(val){
    if(testFunc(val)){
      count++
    }
  })
  return count;
}

// exports.map = filter;

module.exports = {
  filter: filter,
  map:    map,
  countIf: countIf
}
