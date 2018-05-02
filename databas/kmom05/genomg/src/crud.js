/**
 * A module exporting functions to access the bank database.
 */
"use strict";

module.exports = {
    getAllPeople: getAllPeople,
    getAllPeopleExt: getAllPeopleExt,
    createPerson: createPerson,
    showOne: showOne,
    editPerson: editPerson,
    deletePerson: deletePerson,
    getPlaces: getPlaces,
    getTvshows: getTvshows,
    getAllPlaces: getAllPlaces,
    createPlace: createPlace
};

const mysql  = require("promise-mysql");
const config = require("../config/db/course.json");
let db;

/**
 * Main function.
 * @async
 * @returns void
 */
(async function() {
    db = await mysql.createConnection(config);

    process.on("exit", () => {
        db.end();
    });
})();


async function getAllPeople() {
    let sql = `SELECT id, firstname, lastname, DATE_FORMAT(born, "%Y-%m-%d") AS born FROM people;`;
    let res;

    res = await db.query(sql);

    return res;
}

async function getAllPeopleExt() {
    let sql = `CALL showAllExtended()`;
    let res;

    res = await db.query(sql);
    return res;
}

async function createPerson(fname, lname, born, place, tvshow) {
    tvshow = (tvshow === "") ? null : parseInt(tvshow);

    let sql = `CALL createPerson(?, ?, ?, ?, ?);`;
    let res;

    res = await db.query(sql, [fname, lname, born, place, tvshow]);
}

async function showOne(id) {
    let sql = `CALL showOne(?);`;
    let res;

    res = await db.query(sql, [id]);
    return res;
}

async function editPerson(id, fname, lname, born, tvshow_id, place_id) {
    tvshow_id = (tvshow_id === "") ? null : parseInt(tvshow_id);
    place_id = (place_id === "") ? null : parseInt(place_id);
    let sql = `CALL editPerson(?, ?, ?, ?, ?, ?)`;
    let res;

    res = await db.query(sql, [id, fname, lname, born, tvshow_id, place_id]);
}

async function deletePerson(id) {
    let sql = `CALL deletePerson(?)`;
    let res;

    res = await db.query(sql, [id]);
}

async function getPlaces() {
    let sql = `CALL getPlaces()`;
    let res;

    res = await db.query(sql);
    return res;
}

async function getAllPlaces() {
    let sql = `CALL getAllPlaces();`;
    let res;

    res = await db.query(sql);
    return res;
}

async function createPlace(city, country) {
    let sql = `CALL createPlace(?, ?);`;
    let res;

    res = await db.query(sql, [city, country]);
}

async function getTvshows() {
    let sql = `CALL getTvshows()`;
    let res;

    res = await db.query(sql);
    return res;
}
