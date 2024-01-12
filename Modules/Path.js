const path = require("path");

// Get current working directory and file
console.log(__filename);
console.log(__dirname);

// Get base path
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// Get extension
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

// Convert path to JSON
console.log(path.parse(__filename));

// Convert JSON back to path
console.log(path.format(path.parse(__filename)));

// Path join
console.log(path.join("folder1", "folder2", "folder3"));
console.log(path.join("/folder1", "//folder2", "folder3//"));
console.log(path.join(__filename, "../folder3"));

// Checking if absolute path or not
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./Json/data"));

// Path resolve
console.log(path.resolve("folder1", "folder2", "folder3"));
console.log(path.resolve("/folder1", "//folder2", "folder3//"));
console.log(path.resolve(__filename, "../folder3"));
