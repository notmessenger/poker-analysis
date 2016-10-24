const chalk = require('chalk')
const exitWithError = require('./error')
const packageConfig = require('../package.json')

/**
 * Sample program execution command used in error message
 *
 * @type {String}
 */
const exampleText = chalk.inverse('node ' + packageConfig.main + ' "AH TH KD QC JS"')

/**
 * Validate card count
 *
 * @param {String} input A space-separated string of card values
 * @throws {ValidationError} if 5 cards were not passed
 * @returns {undefined}
 */
function validateCardCount (input) {
  validateInputType(input)

  const cards = input.split(' ')

  if (cards.length !== 5) {
    exitWithError('You must provide 5 card values.  Example ' + exampleText)
  }
}

/**
 * Validate card data
 *
 * @param {*} cards
 * @returns {undefined}
 */
function validateCards (cards) {
  validateCardCount(cards)
}

/**
 * Validate card data is a String
 *
 * @param {String} input
 * @throws {ValidationError} if argument is not a string
 * @returns {undefined}
 */
function validateInputType (input) {
  if (typeof input !== 'string') {
    const errorText = 'You must provide a string as the first argument.  Example: ' + exampleText

    exitWithError(errorText)
  }
}

module.exports = {
  validateCards: validateCards
}
