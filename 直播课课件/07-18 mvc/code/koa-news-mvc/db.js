const mysql = require('mysql2/promise')

let connection
module.exports = {
  async initDB() {
    connection = await mysql.createConnection({
      host: 'localhost',
      password: '123456',
      user: 'root',
      database: 'kkb',
    })
  },

  getDB() {
    return connection
  },
}
