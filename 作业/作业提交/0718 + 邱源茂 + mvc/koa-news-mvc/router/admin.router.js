// news.router -->命名规范来的
const Router = require('koa-router')
const { adminController } = require('../controller')
const router = new Router()

router.get('/admin', adminController.index)
router.get('/admin/addNews', adminController.addNews)
router.post('/admin/addData', adminController.addData)

module.exports = router
