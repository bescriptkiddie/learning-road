const { getDB } = require("../db");
module.exports = {
  async create({ title, from, newTime, imgUrl }) {
    const sql =
      "INSERT INTO news (id,title,imgUrl,`from`,newTime) VALUES (0,?,?,?,?)";

    const [result] = await getDB().execute(sql, [title, imgUrl, from, newTime]);
    return result;
  },
};
