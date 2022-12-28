
const Primitives = artifacts.require("Primitives");
module.exports = function (_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Primitives);
};
