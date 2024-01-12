Promise.resolve().then(function () {
  console.log(1, " promise.resolve()");
});
process.nextTick(function () {
  console.log(2, " process.nextTick()");
});

/**
 * Timer queues - setTimeout & setInterval
 */
setTimeout(() => console.log(3, "setTimeOut 3"), 0);
setTimeout(() => {
  console.log(4.1, "setTimeOut 4");
  process.nextTick(() => console.log(4.3, "nextTick() inside setTimeOut"));
  Promise.resolve().then(() =>
    console.log(4.2, "Promise.resolve() inside setTimeOut")
  );
}, 0);
setTimeout(() => console.log(5, "setTimeOut 4"), 0);
