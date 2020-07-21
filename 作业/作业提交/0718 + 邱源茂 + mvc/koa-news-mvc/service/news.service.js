const { newsModel } = require("../model")
module.exports = {
    index(id) {
        const model = newsModel.findOne(id)
        return model
    },
}
