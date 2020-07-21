const { getDB } = require('../db')
module.exports = {
  async create({ title, from, newTime, imgUrl }) {
    const sql =
      'INSERT INTO news (id,title,imgUrl,`from`,newTime) VALUES (0,?,?,?,?)'

    const [result] = await getDB().execute(
      sql,
      [title, imgUrl, from, newTime],
      function (err, results, fields) {
        console.log(results) // results contains rows returned by server
        console.log(fields) // fields contains extra meta data about results, if available
      },
    )
    return result
  },
}
