const fs = require("fs");
const http = require("http");

// const httpServer = http.createServer(function (req, res) {
//   fs.readFile("./dummFile", (err, data) => {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end(data);
//   });
// });

// httpServer.listen(8000, () => {
//   console.log("app listening on", 8000);
// });

/**
 * Here main thread will check the readFile method is asynchronous
 * so it will pass to libuv(Poll of thread)
 */
process.env.UV_THREADPOOLSIZE = 8;
const start = Date.now();
for (let i = 0; i < 100; i++) {
  fs.readFile("dummyFile.txt", "utf8", (err, data) => {
    console.log("Time taken:", Date.now() - start, "ms");
    // console.log(data);
  });
}
