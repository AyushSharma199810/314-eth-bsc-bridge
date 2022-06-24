// const bsctoken= artifacts.require("TokenBsc");
const tokenBsc = artifacts.require("TokenBsc");

module.exports = async function (deployer) {
  deployer.deploy(tokenBsc);

};
// const Migrations = artifacts.require("Migrations");

// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };

