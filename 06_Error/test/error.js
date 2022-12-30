const Error = artifacts.require("Error");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Error", function (/* accounts */) {
  it("test require", async function () {
    let instance = await Error.deployed();

    await instance.testReqiure(100);

    try {
      await instance.testReqiure(1);
    } catch (error) {
      //console.log(error.message);
      assert(error.message.includes("revert"));
    }
  });

  it("test revert", async function () {
    let instance = await Error.deployed();

    await instance.testRevert(100);

    try {
      await instance.testRevert(1);
    } catch (error) {
      //console.log(error.message);
      assert(error.message.includes("revert"));
    }
  })

  it("test custom error", async function () {
    let instance = await Error.deployed();
    let accounts = await web3.eth.getAccounts();
    //console.log(accounts);
    await web3.eth.sendTransaction({
      from: accounts[0],
      to: instance.address,
      value: web3.utils.toWei('0.01', 'ether'),
    });
    //web3.eth.getBalance(instance.address).then(console.log);

    instance.testCustomError(100000);

    web3.eth.handleRevert = true;
    try {
      await instance.testCustomError(web3.utils.toWei('0.02', 'ether'));
    } catch (error) {
      console.log(error);
      // const parameters = ['uint256', 'uint256'];
      // const values = await web3.eth.abi.decodeParameters(parameters, error.data.return);
      // console.log(values);
    }

  })

})
