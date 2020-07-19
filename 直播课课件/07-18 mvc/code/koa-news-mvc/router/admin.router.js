const Router = require("koa-router");
const { adminController } = require("../controller");
const router = new Router();

router.get("/admin", adminController.index);
router.get("/admin/addNews", adminController.addNewsPage);
router.post("/admin/addData", adminController.addData);

module.exports = router;
