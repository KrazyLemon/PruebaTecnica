import { createPool } from "mysql2/promise";

export const pool = new createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "banco",
})

pool.getConnection((err, connection) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MySQL");
    }
});

