

// const A = artifacts.require("A");
// const B = artifacts.require("B");
// const C = artifacts.require("C");
const D = artifacts.require("D");
module.exports = function (_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(D);
};
