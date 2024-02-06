const sinon = require("sinon");
const assert = require("assert");
const Cube = require("../Logics/cube");
const GetAuthor = require("../Logics/author");

/**
 * A test stub is a function that has all features of a spy, but can also:
 * - override the implementation
 * - provide new functionality
 * - call through to the original implementation
 * - return a specific value
 * - throw an exception
 */
describe("============ STUB 1 ============", () => {
    it("1. Creating an annonymous stub function", () => {
        const stub = sinon.stub();

        stub("Hello", "World");

        assert.equal(stub.called, true);
        assert.equal(stub.callCount, 1);
        assert.equal(stub.calledWith("Hello", "World"), true);
    });

    it("2. Creating a stub on an object method with no return value defined", () => {
        const cube = new Cube(4);
        const stubedCube = sinon.stub(cube, "getVolume");

        const volume = cube.getVolume();

        assert.equal(stubedCube.called, true);
        assert.equal(stubedCube.callCount, 1);
        assert.equal(volume, undefined);
        stubedCube.restore();
    });

    it("3. Creating a stub on an object method with return value defined", () => {
        const cube = new Cube(4);
        const stubedCube = sinon.stub(cube, "getVolume").callsFake(() => 32);

        cube.getVolume();

        assert.equal(stubedCube.called, true);
        assert.equal(stubedCube.callCount, 1);
        assert.equal(stubedCube.returned(32), true);
    });

    // it("3. Creating a spy on a function", () => {
    //     const spiedGetAuthor = sinon.spy(GetAuthor);

    //     spiedGetAuthor();

    //     assert.equal(spiedGetAuthor.called, true);
    //     assert.equal(spiedGetAuthor.callCount, 1);
    //     assert.equal(spiedGetAuthor.returned("Hello my name is Kunal Malviya and I am the author of this book."), true);
    // });    
});

// describe("============ SPIES 2 ============", () => {
//     const sandbox = sinon.createSandbox();

//     beforeEach(function(){
//         sandbox.spy(Cube.prototype, "getVolume");
//     });

//     afterEach(function(){
//         sandbox.restore();
//     });

//     it("1. Get volume of cube", () => {
//         const cube = new Cube(4);
//         cube.getVolume();

//         assert.equal(cube.getVolume.called, true);
//         assert.equal(cube.getVolume.callCount, 1);
//         assert.equal(cube.getVolume.returned(64), true);
//     });
// });