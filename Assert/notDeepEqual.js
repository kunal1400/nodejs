const assert = require('assert');

var w = { a : { n: 0 } };
var x = { a : { n: 0 } };
var y = { a : { n: { b: "1" } } };
var z = { a : { n: { b: 1 } } };

// 1. It returns undefined if the expressions are not equal
console.log(2, assert.notDeepEqual(w, x));

// 2. It throws an error if the expressions are equal
console.log(3, assert.notDeepEqual(y, z));