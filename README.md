# Javascript

- It is synchronous and blocking
- It is single threaded called the main thread

# NodeJS

- Node [https://www.youtube.com/watch?v=L18RHG2DwwA&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=42]
- - v8 engine
- - - Memory heap
- - - call stack
- - - - global() function will first
- - Lib UV
- - - Handle async methods

## Libuv

- Cross platform open source library written in C language.
- Handle asynchronous non-blocking operations in NodeJS.
- It has thread pool & Event loop.
- Mainly for OS work.

## Network I/O

- Network I/O doesn't use thread pool.
- It is not CPU bonded.

## Event loop

- Event loop is part of libuv but microtask queue is not part of libuv.
- Only after callstack is empty event loop come into picture.
- Co-ordinate between synchronout and asynchronous code in NodeJS.
- Co-ordinate the excecution of callback in 6 different queues

# Module

## Local modules

### CommonJs

- Each file will treated as module
- Export/Import will work via module.exports and require

### ES modules

## Built-in/Core modules
