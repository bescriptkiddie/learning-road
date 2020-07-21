const mysql = require('mysql2/promise')

let connection
module.exports = {
  async initDB() {
    connection = await mysql.createConnection({
      host: 'localhost',
      password: 'wywy1203',
      user: 'root',
      database: 'kkb',
    })
  },

  getDB() {
    return connection
  },
}
