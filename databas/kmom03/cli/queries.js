"use strict";

let queries = {
    people: async function(db) {
        let sql;
        let res;
        sql = "SELECT * FROM Vcurrentprojects;";
        // sql = `
        //     SELECT
        //         firstname,
        //         lastname,
        //         born
        //     FROM people
        //     ORDER BY firstname DESC;
        // `;

        res = await db.query(sql);

        for (const row of res) {
            row.born = row.born.toJSON().substring(0, 10);
        }
        return res;
    }
}

module.exports = queries;
