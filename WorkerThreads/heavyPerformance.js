const { parentPort } = require("worker_threads");

let i = 0;
for (let j = 0; j < 60000000000; j++) {
  i = j;
}

parentPort.postMessage(i);
