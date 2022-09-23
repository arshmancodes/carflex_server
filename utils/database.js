const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '192.168.64.2',
    user: 'carflex',
    database: 'car flex',
    password: 'carflex'
});

module.exports = pool.promise();