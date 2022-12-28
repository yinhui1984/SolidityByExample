const Counter = artifacts.require("Counter");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Counter", function (/* accounts */) {
  it("should assert true", async function () {
    let instance = await Counter.deployed();
    let c = await instance.count()
    assert.equal(c, 0, "count should be 0");

    await instance.inc();
    c = await instance.count()
    assert.equal(c, 1, "count should be 1");

    await instance.dec();
    c = await instance.count();
    assert.equal(c, 0, "count should be 0");

    // solidity版本>=8时, 如果存在溢出, 则EVM会进行revert
    // 算数溢出: uint256 public count; 当count为0时再减1
    try {
      await instance.dec();
    } catch (error) {
      assert.equal(error.reason, "Panic: Arithmetic overflow", "should throw error");
    }
  });
});
