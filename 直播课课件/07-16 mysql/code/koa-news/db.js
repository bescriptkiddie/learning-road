const mysql = require("mysql2/promise");

let connection;
module.exports = {
  async initDB() {
    connection = await mysql.createConnection({
      user: "root",
      password: "123456",
      database: "web09",
    });
  },

  getDb() {
    return connection;
  },
};
