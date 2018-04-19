/**
 * A module exporting functions to access the bank database.
 */
"use strict";

module.exports = {
    getAllPeople: getAllPeople
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
    let sql = `SELECT firstname, lastname, DATE_FORMAT(born, "%Y-%m-%d") AS born FROM ??;`;
    let res;

    res = await db.query(sql, [table]);

    // for (const row of res) {
    //     row.born = row.born.toJSON().substring(0, 10);
    // }
    // console.info(`SQL: ${sql} (${table}) got ${res.length} rows.`);

    return res;
}


async function getAllPeople() {
    return findAllInTable("people");
}
