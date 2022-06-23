const express = require("express");
const control = require("../Controller/Controller");
const router  = express.Router();  

router.post("/transfer", control.transfer);
router.post("/mint",control.mint);
router.get("/balancebsc",control.BalanceBsc);
router.get("/balanceEth",control.BalanceEth);
router.post("/mintbsc",control.mintbsc);
module.exports = {router};
