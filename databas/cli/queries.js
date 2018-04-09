"use strict";

let queries = {
    people: async function(db) {
        let sql;
        let res;
        let str;
        sql = `
            SELECT
                firstname,
                lastname,
                born
            FROM people
            ORDER BY firstname DESC;
        `;
        res = await db.query(sql);

        str = "+---------------------+------------+\n";
        str += "| Namn                | Född       |\n";
        str += "|---------------------|------------|\n";

        for (const row of res) {
            str += "| ";
            str += (row.firstname + " " + row.lastname).padEnd(20);
            str += "| ";
            str += row.born.toJSON().substring(0, 10).padStart(8);
            str += " |\n";
        }
        str += "+---------------------+------------+\n";
        return str;
    }
}

module.exports = queries;
