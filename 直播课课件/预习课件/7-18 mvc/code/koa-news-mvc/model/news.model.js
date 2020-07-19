const { getDB } = require("../db");
module.exports = {
  //   findOne(id) {
  //     return {
  //       id,
  //       name: "xiaohong",
  //       passwd: "123",
  //       age: 19,
  //     };
  //   },

  async findAllByLimit(offset, limit) {
    const sql = `SELECT * from news LIMIT ?,?`;
    const [rows] = await getDB().execute(sql, [offset, limit]);
    return rows;
  },

  async findAll() {
    const sql = `SELECT * FROM news`;
    const [rows] = await getDB().execute(sql);
    return rows;
  },

  async findByPK(id) {
    const sql = `SELECT * FROM news WHERE id=?`;
    const [rows] = await getDB().execute(sql,[id]);
    return rows[0];
  },
};
