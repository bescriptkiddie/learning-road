const { getDB } = require("./db");
module.exports = async (ctx) => {
  const sql = `SELECT * FROM photos`;
  const [rows] = await getDB().execute(sql);

  ctx.body = {
    state: 1,
    data: [...rows],
  };
};
