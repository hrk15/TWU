var mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: "",
	database: 'user'
});

connection.connect();

module.exports = connection;
