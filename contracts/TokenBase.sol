//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract TokenBase is ERC20 {
  address public admin = msg.sender;
    uint public nonce;
enum Step { Burn, Mint }
  event Transfer(
    address from,
    address to,
    uint amount,
    uint date,
    uint nonce,
    Step indexed step
  );

  constructor(string memory name, string memory symbol) ERC20(name, symbol) {
    admin = msg.sender;
  }

  function updateAdmin(address newAdmin) external {
    require(msg.sender == admin, 'only admin');
    admin = newAdmin;
  }

  function mint(address to, uint amount) external {
    require(msg.sender == admin, 'only admin');
    require(msg.sender == admin, 'only admin');
    // require(processedNonces[otherChainNonce] == false, 'transfer already processed');
    // processedNonces[otherChainNonce] = true;
    _mint(to, amount);
      emit Transfer(
      msg.sender,
      to,
      amount,
      block.timestamp,
      nonce,
      Step.Mint
    );
  }

  function burn(address to, uint amount) external {
    require(msg.sender == admin, 'only admin');
    _burn(to, amount);
        emit Transfer(
      msg.sender,
      to,
      amount,
      block.timestamp,
      nonce,
      Step.Burn
    );
    nonce++;
  }

}

