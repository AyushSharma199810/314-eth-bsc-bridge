const express = require("express");
const control = require("../Controller/Controller");
const SendMoney = require("../Controller/SendMoney");

const router  = express.Router();  

router.post("/transfer", control.transfer);
router.post("/mint",control.mint);
router.get("/balancebsc",control.BalanceBsc);
router.get("/balanceEth",control.BalanceEth);
router.post("/mintbsc",control.mintbsc);
router.get("/events",control.events)
router.post("/burn",control.burn);
router.post("/recieve",SendMoney.recieve);
router.get("/balanceDeposited", SendMoney.balance);
// router.get("/eventsDeposited",SendMoney.events);

module.exports = {router};
