const assert = require('assert');

var w = { a : { n: 0 } };
var x = { a : { n: 0 } };
var y = { a : { n: { b: "1" } } };
var z = { a : { n: { b: 1 } } };

// 1. It returns undefined because y and z are not deep strict equal
console.log(1, assert.notDeepStrictEqual(y, z));

// 2. It throws an error because w and x are deep strict equal
console.log(2, assert.notDeepStrictEqual(w, x));