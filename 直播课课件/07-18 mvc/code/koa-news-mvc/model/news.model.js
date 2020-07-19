const { getDB } = require("../db");
module.exports = {
  findOne(id) {
    // sql
    return {
      id,
      name: "xiaohong",
      age: 19,
      passwd: "123456",
    };
  },

  async findAllByLimit(offset, limit) {
    const sql = `SELECT * FROM news LIMIT ?,?`;
    const [rows] = await getDB().execute(sql, [offset, limit]);
    return rows;
  },

  async findAll() {
    const sql = `SELECT * FROM news `;
    const [rows] = await getDB().execute(sql);
    return rows;
  },
};
