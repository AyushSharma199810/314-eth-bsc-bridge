const bsctoken= artifacts.require("TokenBsc");

module.exports = function (deployer) {
  deployer.deploy(bsctoken);
};
