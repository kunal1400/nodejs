const fs = require("fs");

// fs.readFile(__filename, "utf8", function (error, data) {
//   console.log("File read");
//   setImmediate(function () {
//     console.log("Set immediate");
//   });

//   Promise.resolve().then(() => console.log("Promise resolved"));

//   process.nextTick(() => console.log("process.nextTick()"));
// });

/**
 * Microtask queue callback executed before the checkQueue callback
 */
setImmediate(() => console.log("First"));
setImmediate(() => {
  console.log("Second");
  process.nextTick(() => console.log("Next tick"));
  Promise.resolve().then(() => console.log("Promise resolved"));
});
setImmediate(() => console.log("Third"));

/**
 * When running setTimeout with 0 delay and setImmediate simultaneosly
 * then order of execution cannot be guaranted
 */
setTimeout(() => console.log("k"), 0);
setImmediate(() => console.log("m"));
