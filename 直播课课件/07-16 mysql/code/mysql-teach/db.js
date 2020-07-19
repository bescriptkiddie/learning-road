// nodejs  promise
// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "web09",
// });

// // 添加一条数据
// const sql = `INSERT INTO users (id,age,name) VALUES (0,?,?)`;

// const age = 10;
// const name = "xiaoheihei";
// connection.query(sql, [age, name], (err, results) => {
//   if (err) {
//     throw err;
//   }
//   console.log(results);
// });

const mysql = require("mysql2/promise");

(async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "web09",
  });

  // 添加一条数据
  const sql = `INSERT INTO users (id,age,name) VALUES (0,?,?)`;

  const age = 10;
  const name = "xiaoheihei";
  const result = await connection.execute(sql, [age, name]);
  console.log(result)
})();
