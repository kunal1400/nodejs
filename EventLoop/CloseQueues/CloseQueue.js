const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

/**
 * Attach close event listener callback to close queue
 */
readableStream.on("close", () => {
  console.log("Readable stream closed");
});

process.nextTick(() => console.log("next tick"));
Promise.resolve().then(() => console.log("Promise resolved"));
setImmediate(() => console.log("set Immediate"));
setTimeout(() => console.log("set timeout"), 0);
