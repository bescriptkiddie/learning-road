const fs = require('fs')
const path = require('path')
const { adminModel } = require('../model')
module.exports = {
  async addData(title, from, img) {
    const imgName = createImgName(img)
    saveImg(img, imgName) // 本地
    const result = await insertToDb(title, from, imgName) //insert 到数据库
    return result
  },
}

async function insertToDb(title, from, imgName) {
  const newsModel = {
    title,
    from,
    imgUrl: '/upload/' + imgName,
    newTime: createNewTime(),
  }

  const result = await adminModel.create(newsModel)
  return result
}

function createImgName(img) {
  return Date.now() + '_' + img.name
}

function createNewTime() {
  const date = new Date()
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

function saveImg(img, imgName) {
  const readStream = fs.createReadStream(img.path)
  const uploadPath = path.resolve(__dirname, '../static/upload', imgName)
  const writeStream = fs.createWriteStream(uploadPath)
  readStream.pipe(writeStream)
}
