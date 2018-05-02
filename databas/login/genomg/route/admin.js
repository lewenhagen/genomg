"use strict";

const express = require("express");
const router = express.Router();
const crud = require("../src/crud.js");
const bodyParser = require("body-parser");
const middleware = require("../middleware/index.js");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/create", async (req, res) => {
    let data = {
        title: "Create person"
    };

    data.places = await crud.getPlaces();
    data.tvshows = await crud.getTvshows();

    res.render("admin/create", data);
});


module.exports = router;
