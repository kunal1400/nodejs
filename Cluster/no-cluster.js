const http = require("http");
const PORT = 8000;

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
  console.log("app listening on port " + PORT);
});
