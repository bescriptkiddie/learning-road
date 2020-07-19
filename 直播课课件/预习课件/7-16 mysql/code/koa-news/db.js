const mysql = require("mysql2/promise");
let connection;
module.exports = {
  async initDB() {
    // 1. 如何连接到 nodejs -> mysql
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "123456",
      database: "web08",
    });
  },

  getDB() {
    return connection;
  },
};
