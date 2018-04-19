"use strict";

const express = require("express");
const router = express.Router();
const crud = require("../src/crud.js");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/read", async (req, res) => {
    let data = {
        title: "All people in the database"
    };

    data.res = await crud.getAllPeople();
    res.render("people/read", data);
});

router.get("/create", (req, res) => {
    let data = {
        title: "Create person"
    };

    res.render("people/create", data);
});

router.post("/create", urlencodedParser, async (req, res) => {

    // console.log(JSON.stringify(req.body, null, 4));
    await crud.createPerson(req.body.fname, req.body.lname, req.body.born);

    res.redirect("/people/read");
});

router.get("/info/:id", async (req, res) => {
    let id = req.params.id;
    let data = {
        title: `Info`,
        id: id
    };

    data.res = await crud.showOne(id);

    res.render("people/info", data);
});

router.get("/edit/:id", async (req, res) => {
    let id = req.params.id;
    let data = {
        title: `Edit person ${id}`,
        id: id
    };

    data.res = await crud.showOne(id);

    res.render("people/person-edit", data);
});

router.post("/edit", urlencodedParser, async (req, res) => {
    await crud.editPerson(req.body.id, req.body.fname, req.body.lname, req.body.born, req.body.tvshow_id, req.body.place_id);
    res.redirect(`/people/edit/${req.body.id}`);
});

router.get("/delete/:id", async (req, res) => {
    let id = req.params.id;
    let data = {
        title: `Delete person ${id}`,
        id: id
    };

    data.res = await crud.showOne(id);

    res.render("people/delete-person", data);
});

router.post("/delete", urlencodedParser, async (req, res) => {
    let id = req.body.id;
    await crud.deletePerson(id);
    res.redirect(`/people/read`);
});



module.exports = router;
