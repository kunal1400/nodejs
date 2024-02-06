const sinon = require("sinon");
const assert = require("assert");
const Cube = require("../Logics/cube");
const GetAuthor = require("../Logics/author");

/**
 * Unlike sinon.spy and sinon.stub, sinon.fake only knows about creating fakes, 
 * not about replacing properties in the system under test.
 * To replace a property, you can use the sinon.replace method. 
 * When you want to restore the replaced properties, call the sinon.restore method.
 */
describe("============ Fake Functions ============", () => {
    it("1. Creating a fake function without behaviour", () => {
        const fake = sinon.fake();

        assert.equal(fake(), undefined);
    });

    it("2. Creating a fake function with behaviour", () => {
        const fake = sinon.fake.returns("Hello");

        assert.equal(fake(), "Hello");
    });

    // it("3. Creating a fake function throwing an error", () => {
    //     const fake = sinon.fake.throws(new Error("Something went wrong"));

    //     assert.throws(fake(), {name: "Error"});
    // });

    it("4. Mocking an object method using fake", () => {
        const cube = new Cube(4);
        sinon.replace(cube, "getVolume", sinon.fake.returns(100));

        assert.equal(cube.getVolume(), 100);
        assert.equal(cube.getVolume.callCount, 1);
    });

    it("5. Mocking a function method using fake", () => {
        // const GetAuthor = sinon.stub().callsFake(() => "Kunal Malviya");
        const GetAuthor = sinon.fake.returns("Kunal Malviya");

        assert.equal(GetAuthor(), "Kunal Malviya");
        assert.equal(GetAuthor.callCount, 1);
    });
});