const Primitives = artifacts.require("Primitives");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Primitives", function (/* accounts */) {
  it("should assert true", async function () {
    let instance = await Primitives.deployed();
    let boo = await instance.boo();
    assert.equal(boo, true, "boo is not true");


    let defaultBoo = await instance.defaultBoo();
    assert.equal(defaultBoo, false, "defaultBoo should be false");

    let maxInt = await instance.maxInt();
    console.log("maxInt: ", maxInt.toString());

    let addr = await instance.addr();
    console.log("addr: ", addr);
  });
});
