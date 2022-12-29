const Gas = artifacts.require("Gas");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Gas", function (/* accounts */) {
  it("should assert true", async function () {
    let instance = await Gas.deployed();

    let block = await web3.eth.getBlock("latest");
    console.log("block gas limit: " + block.gasLimit);

    await instance.setLoopCount(20);
    //gas:  用于该调用“交易”的 gas 用量上限 (gas limit)。
    await instance.eatGas({ gas: 100000 });
  });
});
