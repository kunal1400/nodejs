const assert = require('assert');

// 1. It returns undefined if the expression is true
console.log(1, assert(1 === 1));

// 2. It throws an error with the message if the expression is false/0
try {
    assert(50-50, "For 0 value it will throw an error")
} catch (error) {
    console.log(2, error.message);
}

// 3. It throws an error if the expression is false and program will terminate due to which 3 will not be printed
console.log(3, assert(1 === 2)); // AssertionError [ERR_ASSERTION]: false == true
console.log(4, "This will not be printed");