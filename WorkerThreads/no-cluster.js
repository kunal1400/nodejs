const http = require("http");
/**
 * The worker threads module enables the
use of threads that execute JavaScript
in parallel that runs a separate child process preventing it
from blocking your main application.
 */
const { Worker } = require("worker_threads");

const httpServer = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow") {
    const workerE = new Worker("./heavyPerformance");
    workerE.on("message", function (i) {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(`Slow page ${i}`);
    });
  }
});

httpServer.listen(8000, () => {
  console.log("App listening on port " + 8000);
});
