const Web3 = require("web3");
const SendMoney  = require("../build/contracts/SendMoney.json");

const web3eth = new Web3("https://rinkeby.infura.io/v3/7225d4d9beaa4b5896b367a3c755b15c");
const MoneyContract = new web3eth.eth.Contract(SendMoney.abi,SendMoney.networks[4].address);


const recieve = async (req,res)=>{
    const add = "0x0a1b05De4569F7728244728259E43BDF277461b7";
    const recieve = await MoneyContract.methods.receiveMoney();
    const contractAddress = SendMoney.networks[4].address;
const value1 = req.body.value;
  const privatekey = "fc92fef1130ce4e041b39bfaea9053e66cfa4f34462ebfd49ed9a6863032b8ac";

  const recieveABI = recieve.encodeABI();

  const gasPrice = await web3eth.eth.getGasPrice();
  const nonce = await web3eth.eth.getTransactionCount(add,"pending");
  NetworkID = 4;
  const rawtx = {
    from: add,
    to: contractAddress ,
    data: recieveABI,
    value: web3eth.utils.toHex(value1),
    gas: web3eth.utils.toHex(1500000),
    gasPrice,
    nonce,
   }
   const sign = await web3eth.eth.accounts.signTransaction(rawtx,privatekey);
   const receipt = await web3eth.eth.sendSignedTransaction(sign.rawTransaction);
//    console.log(receipt.transactionHash);
//    res.send(receipt);
   const result = (await MoneyContract.
    getPastEvents("balance",{fromBlock: 'latest'}));
   const result1 = result[0].returnValues.balance;
res.send(result1); 

}
const balance = async(req,res) => {
    const balance = await MoneyContract.methods.getBalance().call();
    res.send(balance);
}

module.exports = {recieve, balance};
