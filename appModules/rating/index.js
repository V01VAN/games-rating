const WEIGHT = require('./config')
const config = require('./config')
const makeRatingFile = require('./rating-file')

module.exports = {
    config, makeRatingFile, WEIGHT, createRating, updateRating
}