const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'car_flex',
    password: ''
});

module.exports = pool.promise();