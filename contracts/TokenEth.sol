//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import './TokenBase.sol';

contract TokenEth is TokenBase {

  uint public balanceReceived;
  constructor() TokenBase('ETH Token', 'ETK') {}
  // function receiveMoney() public payable {
  // balanceReceived += msg.value;
  
  function __mint(address to , uint256 amount ) public payable {
    require(msg.value >= 5,"Not enought eth");
    to = msg.sender;
    amount = msg.value * 10;
    _mint( to, amount);






  }

}
