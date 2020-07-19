const mysql = require("mysql2");

// 1. 如何连接到 nodejs -> mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "web08",
});

// 添加数据
// name
// const name = "xiaoli";
// const age = 80;
// const sql = `INSERT INTO users (id,name,age) VALUES (0,?,?)`;
// connection.execute(sql, [name, age], (err, results) => {
//   if (err) {
//     throw err;
//   }

//   console.log(results);
// });



