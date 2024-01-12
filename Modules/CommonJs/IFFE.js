/**
 * Before Batman/Superman module code is executed nodejs
 * wrap it with a function wrapper IIFE that provides
 * module scope
 */
(function () {
  console.log("Batman 1");
})();

(function () {
  console.log("Superman 1");
})();

// Module wrapper function wrapper
(function (exports, require, module, __filename, __dirname) {
  console.log("Superman 1");
})();
