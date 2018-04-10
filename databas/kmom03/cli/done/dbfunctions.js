"use strict";

let dbfunctions = {
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
    },

    current: async function(db) {
        let sql;
        let res;
        let str;
        sql = `SELECT * FROM Vcurrentprojects;`;

        res = await db.query(sql);

        str = "+---------------------+-------------------------+--------------------+\n";
        str += "| Namn                | Serie                   | Plats              |\n";
        str += "|---------------------|-------------------------|--------------------|\n";

        for (const row of res) {
            str += "| ";
            str += row.Namn.padEnd(20);
            str += "| ";
            str += row.Serie.padEnd(24);
            str += "| ";
            str += row.Plats.padEnd(18);
            str += " |\n";
        }
        str += "+---------------------+-------------------------+--------------------+\n";
        return str;
    },
    
    findPerson: async function(db, search) {
        let like = `%${search}%`;
        let sql;
        let res;
        let str;
        sql = `SELECT firstname, lastname, born FROM people WHERE CONCAT(firstname, lastname) LIKE ?;`;

        // sql = "SELECT firstname, lastname, born FROM people WHERE CONCAT(firstname, lastname) LIKE '%"+search+"%';";

        res = await db.query(sql, [like]);

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

module.exports = dbfunctions;
