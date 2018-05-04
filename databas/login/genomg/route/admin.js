"use strict";

const express = require("express");
const router = express.Router();
const crud = require("../src/crud.js");
const bodyParser = require("body-parser");
const middleware = require("../middleware/index.js");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/create", async (req, res) => {
    let data = {
        title: "Create person",
        user: req.session.acronym || null
    };

    data.places = await crud.getPlaces();
    data.tvshows = await crud.getTvshows();

    res.render("admin/create", data);
});

router.get("/edit/:id", async (req, res) => {
    let id = req.params.id;
    let data = {
        title: `Edit person ${id}`,
        id: id,
        user: req.session.acronym || null
    };

    data.res = await crud.showOne(id);
    data.places = await crud.getPlaces();
    data.tvshows = await crud.getTvshows();

    res.render("admin/edit-person", data);
});

router.post("/edit", urlencodedParser, async (req, res) => {
    await crud.editPerson(req.body.id, req.body.fname, req.body.lname, req.body.born, req.body.tvshow, req.body.place);
    res.redirect(`/people/edit/${req.body.id}`);
});

router.get("/delete/:id", async (req, res) => {
    let id = req.params.id;
    let data = {
        title: `Delete person ${id}`,
        id: id,
        user: req.session.acronym || null
    };

    data.res = await crud.showOne(id);

    res.render("admin/delete-person", data);
});

router.post("/delete", urlencodedParser, async (req, res) => {
    let id = req.body.id;
    await crud.deletePerson(id);
    res.redirect(`/people/read-all`);
});

router.post("/create-place", urlencodedParser, async (req, res) => {

    await crud.createPlace(req.body.city, req.body.country);

    req.session.flash = "Added: " + req.body.city + ", " + req.body.country;
    res.redirect("/people/places");
});


module.exports = router;
