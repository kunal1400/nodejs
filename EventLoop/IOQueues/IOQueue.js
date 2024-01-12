/**
 * Most of the async methods in built-in module put their callback
 * functions in IO queue.
 *
 * I/O events are polled and callback functions are added to IO queue
 * only after IO is complete
 */
const fs = require("fs");

fs.readFile(__filename, "utf8", function (error, data) {
  console.log("File read");
});

// Here microtask queue call prior to IO queue
Promise.resolve().then(() => console.log("Promise resolved"));
process.nextTick(() => console.log("process.nextTick()"));
