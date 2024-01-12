# Microtasks queues are collection of callbacks

- process.nextTick() & Promise.resolve() both collectively called as microtasks.

## Teasons to use process.nextTick()

1. To handle errors.
2. To cleanup any unended resources.
3. Try to request again before event loop continues.
4. To allow a callback to run after callstack empty and before the event loop continues.
