//  规范
// 命名
const {newsController} = require('../controller');
const Router = require("koa-router");
const router = new Router({
    prefix:"/news"
});

// /news/
router.get("/",newsController.index)
// /news/detail
router.get("/detail",newsController.detail)

module.exports = router;
