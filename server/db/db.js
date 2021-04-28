const sql = require('mysql2')


const pool = sql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "last_project",
    password: ""
}, ()=>{
    console.log("db is connected")
})
module.exports = {
  sql, pool
}