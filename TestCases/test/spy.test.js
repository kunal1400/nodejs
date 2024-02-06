const sinon = require("sinon");
const assert = require("assert");
const Cube = require("../Logics/cube");
const GetAuthor = require("../Logics/author");

/**
 * A test spy is a function that records:
 * - arguments
 * - return value
 * - value of this
 * - exception thrown (if any) 
 * for all its calls. 
 */
describe("============ SPIES 1 ============", () => {
    it("1. Creating a spy", () => {
        const spy = sinon.spy();

        spy("Hello", "World");

        assert.equal(spy.called, true);
        assert.equal(spy.callCount, 1);
        assert.equal(spy.calledWith("Hello", "World"), true);
    });

    it("2. Creating a spy on an object method", () => {
        const cube = new Cube(4);
        const spiedCube = sinon.spy(cube, "getVolume");

        cube.getVolume();

        assert.equal(spiedCube.called, true);
        assert.equal(spiedCube.callCount, 1);
        assert.equal(spiedCube.returned(64), true);
    });

    it("3. Creating a spy on a function", () => {
        const spiedGetAuthor = sinon.spy(GetAuthor);

        spiedGetAuthor();

        assert.equal(spiedGetAuthor.called, true);
        assert.equal(spiedGetAuthor.callCount, 1);
        assert.equal(spiedGetAuthor.returned("Hello my name is Kunal Malviya and I am the author of this book."), true);
    });    
});

describe("============ SPIES 2 ============", () => {
    const sandbox = sinon.createSandbox();

    beforeEach(function(){
        sandbox.spy(Cube.prototype, "getVolume");
    });

    afterEach(function(){
        sandbox.restore();
    });

    it("1. Get volume of cube", () => {
        const cube = new Cube(4);
        cube.getVolume();

        assert.equal(cube.getVolume.called, true);
        assert.equal(cube.getVolume.callCount, 1);
        assert.equal(cube.getVolume.returned(64), true);
    });
});