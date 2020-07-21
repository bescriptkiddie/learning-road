// news.router -->命名规范来的
const Router = require("koa-router")
const { newsController } = require("../controller")
const router = new Router()

router.get("/news", newsController.index)

module.exports = router
