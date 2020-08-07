const Koa = require("koa");
const serve = require("koa-static");
const koaBody = require("koa-body");
const Router = require("koa-router");
const upload = require('./lib/upload');
const getPhotos = require('./lib/getPhotos');
const db = require('./lib/db');

db.initDB()

const app = new Koa();
app.use(
  koaBody({
    multipart: true,
  })
);
app.use(serve(__dirname + "/static"));

const router = new Router();

router.post("/upload", upload)
router.get("/getPhotos",getPhotos)


app.use(router.routes());
app.listen(8080);
