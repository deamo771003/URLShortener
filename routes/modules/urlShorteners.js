const express = require('express')
const router = express.Router()
const UrlShortener = require('../../models/shortener')
// const fixedUrl = 'https://URLShortener/'

router.post('/', async (req, res) => {
  const url = req.body.url
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  const array = []
  const allValue = array.concat(lowerCaseLetters.split(''), upperCaseLetters.split(''), numbers.split(''))
  let randomValue = ''

  function createRandom(collection) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    return collection[randomIndex]
  }

  async function addRandomValue() {
    for (let i = 1; i <= 5; i++) {
      randomValue += createRandom(allValue)
    }
    // random duplicate check
    const randomDatabaseCheck = await UrlShortener.findOne({ random: randomValue })
    if (randomDatabaseCheck) {
      await addRandomValue()
    }
  }

  await addRandomValue()

  // url duplicate check
  let urlDatabaseCheck = await UrlShortener.findOne({ url: url })
  if (!urlDatabaseCheck) {
    await UrlShortener.create({
      url,
      random: randomValue
    })
    let urlDatabaseCheck = await UrlShortener.findOne({ url: url })
    res.redirect(`/short/${urlDatabaseCheck.random}/page`)
  } else {
    res.redirect(`/short/${urlDatabaseCheck.random}/page`)
  }
})

// shortener
router.get('/:random/page', (req, res) => {
  const random = req.params.random
  return UrlShortener.findOne({ random: random })
    .lean()
    .then(urlShortener => res.render('shortener', { urlShortener: urlShortener }))
    .catch(error => console.log(error))
})

// forward 
router.get('/:random', (req, res) => {
  const random = req.params.random
  return UrlShortener.findOne({ random: random })
    .lean()
    .then(url => res.redirect(`${url.url}`))
    .catch(error => console.log(error))
})

module.exports = router