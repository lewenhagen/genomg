"use strict";

const express = require("express");
const router = express.Router();
const bank = require("../src/bank.js");

router.get("/index", (req, res) => {
    let data = {
        title: "TVSHOWS | Welcome"
    };

    res.render("bank/index", data);
});

router.get("/balance", async (req, res) => {
    let data = {
        title: "BANK | Balance"
    };

    data.res = await bank.showBalance();

    res.render("bank/balance", data);
});

module.exports = router;
