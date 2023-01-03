const D = artifacts.require("D");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("D", function (/* accounts */) {
  it("should assert true", async function () {
    let d = await D.deployed();
    //await d.foo();

    await d.bar();

  });
});
