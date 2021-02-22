// Write your function here

const keep = (arr, value) => arr.filter(item => item === value);

var output = keep([1, 2, 3, 2, 1], 4) 
console.log(output); // [2, 2]