const HelloWorld = artifacts.require("HelloWorld");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HelloWorld", function (/* accounts */) {
  it("should assert true", async function () {
    let i = await HelloWorld.deployed();
    let str = await i.greet();
    assert.equal(str, "Hello World");
  });
});
