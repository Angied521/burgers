var mysql = require('mysql')
// const inquirer = require('inquirer')

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'burgers_db',
  password: 'root'
})

connection.connect(function (err) {
  if (err) throw err
  console.log('connected as id ' + connection.threadID)
  connection.end()
})

module.exports = connection
