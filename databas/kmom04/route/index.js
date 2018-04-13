/**
 * General routes.
 */
"use strict";

const express = require("express");
const router  = express.Router();
const course = require("../src/course.js");

router.get("/", (req, res) => {
    let data = {
        title: "Welcome to the Agency"
    };

    res.render("people/index", data);
});

router.get("/people", async (req, res) => {
    let data = {
        title: "All people in the database"
    };

    data.res = await course.getAllPeople();
    res.render("people/show_all", data);
});

module.exports = router;
