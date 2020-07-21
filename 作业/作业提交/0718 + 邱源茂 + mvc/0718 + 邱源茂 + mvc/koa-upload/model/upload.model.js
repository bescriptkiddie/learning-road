const { getDB } = require('../db')
module.exports = {
  async create({ title, newTime, imgUrl }) {
    const sql = 'INSERT INTO news (id,title,imgUrl,newTime) VALUES (0,?,?,?)'
    const [result] = await getDB().execute(sql, [title, imgUrl, newTime])
    return result
  },
}
