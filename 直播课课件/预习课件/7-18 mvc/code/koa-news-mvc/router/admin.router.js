const { adminController } = require("../controller");
const Router = require("koa-router");

const router = new Router();

router.get("/admin", adminController.index);
router.get("/admin/addNews", adminController.addNewsPage);
router.post("/admin/addData", adminController.addData);
router.get("/admin/newsList", adminController.newsListPage);

module.exports = router;
