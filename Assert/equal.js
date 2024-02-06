const assert = require('assert');

console.log(1, assert.equal(1, "1")); // undefined
console.log(2, assert.notEqual(1, 2)); // undefined
console.log(3, assert.strictEqual(1, 1)); // undefined
console.log(4, assert.notStrictEqual(1, "1")); // undefined

// console.log(assert.equal(1, 2, "These values are not equal")); // AssertionError [ERR_ASSERTION]: 1 == 2