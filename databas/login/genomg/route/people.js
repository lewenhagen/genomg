"use strict";

const express = require("express");
const router = express.Router();
const crud = require("../src/crud.js");
const user = require("../src/user.js");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get("/read-all", async (req, res) => {
    let data = {
        title: "All people",
        user: req.session.acronym || null
    };

    data.res = await crud.getAllPeopleExt();
    res.render("people/read-all", data);
});

router.get("/places", async (req, res) => {
    let data = {
        title: "All places in the database",
        user: req.session.acronym || null
    };
    data.flash = await user.getFlash(req.session);
    data.res = await crud.getAllPlaces();

    res.render("people/places", data);
});

router.post("/create", urlencodedParser, async (req, res) => {

    // console.log(JSON.stringify(req.body, null, 4));
    await crud.createPerson(req.body.fname, req.body.lname, req.body.born, req.body.place, req.body.tvshow);

    res.redirect("/people/read-all");
});

router.get("/info/:id", async (req, res) => {
    let id = req.params.id;
    let data = {
        title: `Info`,
        id: id,
        user: req.session.acronym || null
    };

    data.res = await crud.showOne(id);

    res.render("people/info", data);
});



module.exports = router;
