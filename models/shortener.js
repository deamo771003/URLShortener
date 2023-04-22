const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({ //資料屬性
  ex: String,
})

const Restaurant = mongoose.model('URLShortener', restaurantSchema) // Mongoose中用於創建 Model，Model名稱和 Schema
module.exports = Restaurant
