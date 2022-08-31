var mysql = require('mysql2')

var connectionString =
{
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  connectionLimit: 10
}

exports.create = () => {
  return mysql.createConnection(connectionString)
}



