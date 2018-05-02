module.exports = {
    getAllPeople: getAllPeople
};

const mysql = require("promise-mysql");
const config = require("../config/db/course.json");

let db;

(async function() {
    db = await mysql.createConnection(config);
    process.on("exit", () => {
        db.end();
    });
})();

async function findAllInTable(table) {
    let sql = `SELECT firstname, lastname FROM ??`;
    let res;

    res = await db.query(sql, [table]);

    return res;
}

async function getAllPeople() {
    return findAllInTable("people");
}
