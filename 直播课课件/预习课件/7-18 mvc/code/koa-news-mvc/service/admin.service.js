
const {adminModel} = require('../model');
const fs = require('fs');
const path = require('path');


module.exports = {
  async addData({ from, title, img }) {

    const imgName = createImgName(img)
    // 保存图片到本地
    saveImg(img,imgName);
    // 把数据保存到 db
    const result = await insertToDB(imgName, title, from);
    return result;
  },

};


async function insertToDB(imgName, title, from) {
    const imgUrl = createImgUrl(imgName);
    const newTime = createNewTime();
    const result = await adminModel.create({
        imgUrl,
        newTime,
        title,
        from
    });
    return result;
}

function createNewTime () {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    
}
function createImgUrl(imgName) {
    return "/upload/" + imgName;
}

function createImgName(img) {
    return Date.now() + "_" + img.name;
}

function saveImg(img,imgName) {
    const readStream = fs.createReadStream(img.path);
    const saveImgPath = path.resolve(__dirname, "../static/upload", imgName);
    const writeStream = fs.createWriteStream(saveImgPath);
    readStream.pipe(writeStream);
}

