// 命名规范
// news
// newsRouter
// news-router
const Router = require("koa-router");
const { newsController } = require("../controller");
const router = new Router();

router.get("/news", newsController.index)

module.exports = router;
