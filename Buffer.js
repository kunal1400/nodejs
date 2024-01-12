/**
 * Computer will do conversion like this
 * character -> number -> binary
 */
console.log("K".charCodeAt()); // 75 is character code f 'K'

/**
 * Character set - Unicode and ASCII
 * Character encoding - utf8 (charactes should be store in bytes)
 */

const buffer = new Buffer.from("Kunal");

/**
 * Hexadecimal representation of binary data
 * <Buffer 4b 75 6e 61 6c>
 */
console.log(buffer);

/**
 * decimal representation of binary data
 * { type: 'Buffer', data: [ 75, 117, 110, 97, 108 ] }
 */
console.log(buffer.toJSON());

console.log(buffer.toString());
