

const Error = artifacts.require("Error");

module.exports = function (_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Error);
};
