const mysql = require('mysql')

exports.conn = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'spot'
});
