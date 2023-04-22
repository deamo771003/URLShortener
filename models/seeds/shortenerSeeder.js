const mongoose = require('mongoose')
const db = require('../../config/mongoose')
const Shortener = require('../shortener')

db.once('open', () => {
  Shortener.create(要加入的data, (err) => {
    if (err) throw err
    console.log('done')
  })
})
