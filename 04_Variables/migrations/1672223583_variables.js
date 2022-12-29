
const Variables = artifacts.require("Variables");
module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Variables);
};
