const { newsService } = require("../service")

module.exports = {
    index(ctx) {
        // id -->校验参数
        const { id } = ctx.query
        if (!id) {
            ctx.body = "id是必须的"
            return
        }
        // 业务逻辑 --> service
        const { id: Uid, name, age } = newsService.index(id)
        // id -->返回数据
        ctx.body = {
            id: Uid,
            name,
            age,
        }
    },
}
