/**
 * Here order of execution cannot be guranteed
 */
const fs = require("fs");

fs.readFile(__filename, "utf8", function (error, data) {
  console.log("File read");
});

// Sometime File read/set timeout and sometime  set timeout/File read
setTimeout(() => console.log("set timeout"), 0);
