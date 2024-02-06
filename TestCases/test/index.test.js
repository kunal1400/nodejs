var assert = require('assert');

describe('Array', function () {
  beforeEach(function () {
    console.log('1. before each test case');
  });

  afterEach(function () {
    console.log('1. after each test case');
  });

  before(function () {
    console.log('1. before all test case');
  });

  after(function () {
    console.log('1. after all test case');
  });
  
  beforeEach(function () {
    console.log('2. before each test case');
  });

  afterEach(function () {
    console.log('2. after each test case');
  });

  before(function () {
    console.log('2. before all test case');
  });

  after(function () {
    console.log('2. after all test case');
  });

  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('should return -1 when the value is not present multiple conditions', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("double done", function() {
  it("calls done twice", function(done) {
    setImmediate(done);
    // setImmediate(done);
  });
});

describe("Test cases for promises", function() {
  it("Callback based promise", function(done) {
    new Promise(function(resolve, reject){
      resolve(1);      
    })
    .then(function(){
      console.log("===>>> Promise resolved 1")
      done();
    })
  });

  it("Return based promise", function(){
    new Promise(function(resolve, reject){
      console.log("===>>> Promise resolved 2")
      // resolve(1);
    });
  });
});

// describe("============= Exclusive test =============", function() {
//   describe.only("describe with only keyword", function() {
//     it("1 ===>>>", function() {
//       assert.ok(true);
//     });
//     it("2 ===>>>", function() {
//       assert.ok(true);
//     });
//     it("3 ===>>>", function() {
//       assert.ok(true);
//     });
//   });

//   it.only("it keywork with only keyword 1", function() {
//     assert.ok(true);
//   });

//   it.only("it keywork with only keyword 2", function() {
//     assert.ok(true);
//   });
  
//   it("it keywork without only keyword", function() {
//     assert.ok(true);
//   });
// });

// describe("============= Exclusive test =============", function() {
//   describe.only("describe with only keyword", function() {
//     it("1 ===>>>", function() {
//       assert.ok(true);
//     });
//     it("2 ===>>>", function() {
//       assert.ok(true);
//     });
//     it("3 ===>>>", function() {
//       assert.ok(true);
//     });
//   });

//   describe("describe without only keyword", function() {
//     it("4 ===>>>", function() {
//       assert.ok(true);
//     });
//     it("5 ===>>>", function() {
//       assert.ok(true);
//     });
//     it("6 ===>>>", function() {
//       assert.ok(true);
//     });
//   })  
// });