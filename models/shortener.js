const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlShortenerSchema = new Schema({ //資料屬性
  url: {
    type: String,
    required: true
  },
  random: {
    type: String,
    required: true
  }
})
// Mongoose中用於創建 Model，Model名稱和 Schema
const UrlShortener = mongoose.model('UrlShortener', urlShortenerSchema)
module.exports = UrlShortener
