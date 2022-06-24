// const bsctoken= artifacts.require("TokenBsc");
const bridgeEth = artifacts.require("BridgeEth");

module.exports = async function (deployer) {
  deployer.deploy(bridgeEth);

};
// const Migrations = artifacts.require("Migrations");

// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };

