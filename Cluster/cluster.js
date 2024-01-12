/**
 * The Cluster mode is a special mode when starting a Node.js application, it starts multiple processes and load-balance HTTP/TCP/UDP queries between them.
 *
 * 1. Master is incharge of workers
 * 2. Worker is incharge of handling incoming requests, reading files etc.
 * 3. Each worker have its own memory, v8 and event loop.
 * 4. We can create as many workers as there are CPU cores on the machine.
 */
const cluster = require("cluster");
const http = require("http");
const os = require("os");
const PORT = 8000;

// Returns an array of objects containing information about each logical CPU core.
console.log("CPU's:", os.cpus().length);

if (cluster.isMaster) {
  console.log("Master cluster is running", process.pid);
  // Creating workers
  cluster.fork();
  cluster.fork();
} else {
  //   console.log("Worker is running on", process.pid);
  const httpServer = http.createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("Hello, world!");
    } else if (req.url === "/slow") {
      /**
       * Here slow route is affecting the performance of the server because it is single threaded and synchronous.
       * So if this route is hitted it will affect the root route also.
       */
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("Very slow request");
    }
  });

  httpServer.listen(PORT, function () {
    console.log("app listening on port " + PORT, process.pid);
  });
}
