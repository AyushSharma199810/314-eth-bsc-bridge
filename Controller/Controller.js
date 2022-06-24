const Web3 = require("web3");
const ethtoken = require("../build/contracts/TokenEth.json");
const bsctoken = require("../build/contracts/TokenBsc.json");
const ethbridge = require('../build/contracts/BridgeEth.json');

const web3eth = new Web3("https://rinkeby.infura.io/v3/7225d4d9beaa4b5896b367a3c755b15c");
const web3bsc = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
const ethContract = new web3eth.eth.Contract(ethtoken.abi,ethtoken.networks[4].address);
const bscContract = new web3bsc.eth.Contract(bsctoken.abi,bsctoken.networks[97].address);
const ethBridge = new web3eth.eth.Contract(ethbridge.abi,ethbridge.networks[4].address);




const mint =  async (req,res) => {
    //   const [recipient, _] = await web3.eth.getAccounts();
    const add = "0x0a1b05De4569F7728244728259E43BDF277461b7";
    const contractAddress = ethtoken.networks[4].address;
   
  const privatekey = "fc92fef1130ce4e041b39bfaea9053e66cfa4f34462ebfd49ed9a6863032b8ac";
  const burn1 = await ethContract.methods.mint(add,1 * 1000);
  const burnABI = burn1.encodeABI();

  const gasPrice = await web3eth.eth.getGasPrice();
  const nonce = await web3eth.eth.getTransactionCount(add,"pending");
  NetworkID = 4;
  const rawtx = {
    from: add,
    to: contractAddress ,
    data: burnABI,
    gas: web3eth.utils.toHex(1500000),
    gasPrice,
    nonce,
   }
   const sign = await web3eth.eth.accounts.signTransaction(rawtx,privatekey);
   const receipt = await web3eth.eth.sendSignedTransaction(sign.rawTransaction);
   console.log(receipt.transactionHash);
   res.send(receipt);

}

const transfer =  async (req,res) => {
    //   const [recipient, _] = await web3.eth.getAccounts();
    const add = "0x0a1b05De4569F7728244728259E43BDF277461b7";
    const contractAddress = ethtoken.networks[4].address;
//   const Transfervalue = req.body.transfervalue;

  const privatekey = "fc92fef1130ce4e041b39bfaea9053e66cfa4f34462ebfd49ed9a6863032b8ac";
  const burn1 = await ethContract.methods.burn(add,1 * 10** 9);
  const burnABI = burn1.encodeABI();

  const gasPrice = await web3eth.eth.getGasPrice();
  const nonce = await web3eth.eth.getTransactionCount(add,"pending");
  NetworkID = 4;
  const rawtx = {
    from: add,
    to: contractAddress ,
    data: burnABI,
    gas: web3eth.utils.toHex(1500000),
    gasPrice,
    nonce,
   }
   const sign = await web3eth.eth.accounts.signTransaction(rawtx,privatekey);
   const receipt = await web3eth.eth.sendSignedTransaction(sign.rawTransaction);
   const ethtokenburn = await receipt.status;
//    res.send(receipt);
if(ethtokenburn == true){
    const mint1 = await bscContract.methods.mint(add,1 * 10 **9);
    const mintABI = mint1.encodeABI();
    const ContractAddressBsc = bsctoken.networks[97].address;
    const gasPrice = await web3bsc.eth.getGasPrice();
    const nonce = await web3bsc.eth.getTransactionCount(add,"pending");
    NetworkID = 97;
    const rawtx = {
      from: add,
      to: ContractAddressBsc ,
      data: mintABI,
      gas: web3bsc.utils.toHex(1500000),
      gasPrice,
      nonce,
     }
     const sign = await web3bsc.eth.accounts.signTransaction(rawtx,privatekey);
     const receipt = await web3bsc.eth.sendSignedTransaction(sign.rawTransaction);
     console.log(receipt.transactionHash);
     if(receipt.status == true){     
     rawtx.transferstatus = "Transfer has been done successfully";
     res.send(rawtx);
    
    }   else{
        res.send("invalid request");
    }
}
else {
    console.log("invalid request");
    res.send(Error);

}



}
const BalanceBsc = async(req,res) => {
    const add = "0x0a1b05De4569F7728244728259E43BDF277461b7";
    const balance1 = await bscContract.methods.balanceOf(add).call();
    res.send(balance1);

  // console.log(`transaction hash:${receipt.transactionHash}`);
  // const Rinkbridge = await RinkBridge.deployed();
  // // // await Rinkbridge.burn(add , 1, 2);
  // console.log(Rinkbridge.events.Transfer());
  // const Rinkbridge = await RinkBridge.deployed();
    // console.log(Rinkbridge);
    // await Rinkbridge.burn(add , 1 ,  2, "0*00");
  
  // res.send(bridge);
  }
  const BalanceEth = async(req,res) => {
    const add = "0x0a1b05De4569F7728244728259E43BDF277461b7";
    const balance1 = await ethContract.methods.balanceOf(add).call();
    res.send(balance1);
  }
  const mintbsc = async(req,res)=> {
    const add = "0x0a1b05De4569F7728244728259E43BDF277461b7";
    const mint1 = await bscContract.methods.mint(add,10);
    const mintABI = mint1.encodeABI();
    const ContractAddressBsc = bsctoken.networks[97].address;
    const privatekey = "fc92fef1130ce4e041b39bfaea9053e66cfa4f34462ebfd49ed9a6863032b8ac";
  
    const gasPrice = await web3bsc.eth.getGasPrice();
    const nonce = await web3bsc.eth.getTransactionCount(add,"pending");
    NetworkID = 97;
    const rawtx = {
      from: add,
      to: ContractAddressBsc ,
      data: mintABI,
      gas: web3bsc.utils.toHex(1500000),
      gasPrice,
      nonce,
     }
     const sign = await web3bsc.eth.accounts.signTransaction(rawtx,privatekey);
     const receipt = await web3bsc.eth.sendSignedTransaction(sign.rawTransaction);
     console.log(receipt.transactionHash);
     res.send(receipt);
}
const events = async (req,res)=> {
  const transfer = await ethBridge.events.Transfer({filter: {address: "0x0a1b05De4569F7728244728259E43BDF277461b7"},     fromBlock: 0,
  toBlock: 'latest'
});
  console.log(transfer);
}
const burn = async(req,res)=> {
  const add = "0x0a1b05De4569F7728244728259E43BDF277461b7";
  const burn1 = await ethBridge.methods.burn("0x0a1b05De4569F7728244728259E43BDF277461b7", 10);
  const burnABI = burn1.encodeABI();
  const contractAddress = ethbridge.networks[4].address;
  const privatekey = "fc92fef1130ce4e041b39bfaea9053e66cfa4f34462ebfd49ed9a6863032b8ac";
  const gasPrice = await web3eth.eth.getGasPrice();
  const nonce1 = await web3eth.eth.getTransactionCount(add,"pending");
  NetworkID = 4;
  const rawtx = {
    from: add,
    to: contractAddress ,
    data: burnABI,
    gas: web3eth.utils.toHex(1500000),
    gasPrice,
    nonce1,
   }
   const sign = await web3eth.eth.accounts.signTransaction(rawtx,privatekey);
   const receipt = await web3eth.eth.sendSignedTransaction(sign.rawTransaction);
  res.send(receipt);

  const result = (await ethBridge.getPastEvents("Transfer",{fromBlock: 'latest'}));
  const result1 = result[0].returnValues;
  const {from,to,amount,date,nonce,step} = result1;
  console.log(from,to,amount,date,nonce,step);

  

}
module.exports = { transfer,mint, BalanceBsc ,mintbsc,BalanceEth,events,burn};
