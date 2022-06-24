//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import './TokenBase.sol';

contract TokenBsc is TokenBase {
  constructor() TokenBase('BSC Token', 'BTK') {}

//     token.burn(msg.sender, amount);
//     emit Transfer(
//       msg.sender,
//       to,
//       amount,
//       block.timestamp,
//       nonce,
//       Step.Burn
//     );
//     nonce++;
//   }

// }  
function transfer(address to,uint256 amount) public virtual override returns(bool){
    require(msg.sender == admin , 'only admin');
    _transfer(_msgSender(),to,amount);
    return true;
  
    
  }
}