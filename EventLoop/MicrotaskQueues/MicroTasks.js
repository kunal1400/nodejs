/**
 * Synchronous function will be called befor asynchronous
 */
console.log(1);
process.nextTick(function () {
  console.log(1, "This is next tick queue by process.nextTick()");
  console.log("================================================");
});
console.log(2);

/**
 * nextTick will call before Promise
 */
Promise.resolve().then(function () {
  console.log(2, "This is promise queue by promise.resolve()");
});
process.nextTick(function () {
  console.log(2, "This is next tick queue by process.nextTick()");
});
