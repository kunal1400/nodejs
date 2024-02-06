const assert = require('assert');

var w = { a : { n: 0 } };
var x = { a : { n: 0 } };
var y = { a : { n: { b: "1" } } };
var z = { a : { n: { b: 1 } } };

// 1. It returns undefined if the expression is true
console.log(1, assert.deepEqual(w, x));

// 2. It returns undefined if the expression is true
console.log(2, assert.deepEqual(y, z));

// 3. It throws an error if the expression is false and program will terminate
console.log(3, assert.deepEqual(x, z));