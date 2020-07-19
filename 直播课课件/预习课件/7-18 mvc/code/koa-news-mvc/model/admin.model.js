
const {getDB} = require('../db');
module.exports = {

    async create({imgUrl,from,title,newTime}){
        const sql = "INSERT INTO news (id,title,`imgUrl`,`from`,newTime) VALUES (0,?,?,?,?)"

        const [rows] = await getDB().execute(sql,[title,imgUrl,from,newTime])

        return rows;
    }
}