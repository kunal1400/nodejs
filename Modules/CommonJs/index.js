/**
 * Batman/Superman is returning only function from module.exports
 * so we can call it directly
 **/
const greetBatman = require("./Batman");
const greetSuperman = require("./Superman");

console.log(greetBatman());
console.log(greetSuperman());

/**
 * SuperHero is returning two function from module.exports
 * so we can call independent functions
 **/
const superHero = require("./SuperHeros");
console.log(superHero.greetingBatman());
console.log(superHero.greetingSuperman());
