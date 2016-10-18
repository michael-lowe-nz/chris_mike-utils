function filter (func, arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      output.push(arr[i]);
    }
  }
  return output;
}

module.exports = filter;
