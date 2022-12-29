
const Gas = artifacts.require("Gas");
module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Gas);
};
