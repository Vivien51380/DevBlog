import mysql from "mysql2";

const db = mysql.createPool({
   host:"localhost",
    user:"root",
    password:"0809",
    database:"devblog"
});

db.getConnection(function(err, conn) {
    if(err) console.warn({err});
});

export default db.promise(); 