const Router = require('koa-router')
const { uploadController } = require('../controller')
const router = new Router()

router.get('/upload', uploadController.index)
router.post('/upload', uploadController.addData)

module.exports = router
