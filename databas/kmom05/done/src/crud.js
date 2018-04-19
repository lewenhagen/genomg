/**
 * A module exporting functions to access the bank database.
 */
"use strict";

module.exports = {
    getAllPeople: getAllPeople,
    createPerson: createPerson,
    showOne: showOne,
    editPerson: editPerson,
    deletePerson: deletePerson
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


async function findAllInTable(table) {
    let sql = `SELECT id, firstname, lastname, DATE_FORMAT(born, "%Y-%m-%d") AS born FROM ??;`;
    let res;

    res = await db.query(sql, [table]);

    return res;
}

async function showOne(id) {
    let sql = `CALL showOne(?);`;
    let res;

    res = await db.query(sql, [id]);

    return res;
}

async function createPerson(fname, lname, born) {
    let sql = `CALL createPerson(?, ?, ?);`;
    let res;

    res = await db.query(sql, [fname, lname, born]);
    console.log(res);
    console.info(`SQL: ${sql} got ${res.length} rows.`);
}

async function editPerson(id, fname, lname, born, tvshow_id, place_id) {
    let sql = `CALL editPerson(?, ?, ?, ?, ?, ?)`;
    let res;

    res = await db.query(sql, [id, fname, lname, born, tvshow_id, place_id]);
}

async function deletePerson(id) {
    let sql = `CALL deletePerson(?)`;
    let res;

    res = await db.query(sql, [id]);
}


async function getAllPeople() {
    return findAllInTable("people");
}
