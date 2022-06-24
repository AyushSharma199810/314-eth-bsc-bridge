const BridgeEth = artifacts.require('./BridgeEth.sol');

module.exports = async done => {
  const [recipient, _] = await web3.eth.getAccounts();
  const bridgeEth = await BridgeEth.deployed();
  console.log(bridgeEth.events.Transfer());
  // const a = await bridgeEth.burn(recipient, 10);
  // console.log(a.logs[0].args);
  // console.log(result);
  // var myData = Object.keys(a.logs[0].args).map(key => {
  //   return (a.logs[0].args)[key];
// })
// console.log(myData[0]);
  done();
}
