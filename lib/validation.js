const chalk = require('chalk')
const exitWithError = require('./error')
const format = require('./format')
const packageConfig = require('../package.json')

/**
 * Sample program execution command used in error message
 *
 * @type {String}
 */
const exampleText = chalk.inverse('node ' + packageConfig.main + ' "Ah Th Kd Qc Js"')

/**
 * String representing wild card in card data
 *
 * @type {String}
 */
const wildCard = '0r'

/**
 * Whether there is a wild card in the card data
 *
 * @param {String} input
 * @returns {Boolean}
 */
function containsWildcard (input) {
  return input.indexOf(wildCard) > -1
}

/**
 * Validate card count
 *
 * @param {String} input A space-separated string of card values
 * @throws {ValidationError} If 5 cards were not passed
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
 * Validates card data
 *
 * @param {String} input Space-separated string of card values
 * @throws {ValidationError} If not valid rank and suit, or more than one Joker
 * @returns {undefined}
 */
function validateCardData (input) {
  const cards = format(input)
  let jokerCount = 0
  const rankSuitError = 'A card must consist of a valid rank and suit.  Example ' + exampleText

  cards.forEach(function (element) {
    if (element.length !== 2) {
      exitWithError(rankSuitError)
    }

    if (element === wildCard) {
      jokerCount++
    } else {
      if (!/^[2-9TJQKA][cshd]$/.test(element)) {
        exitWithError(rankSuitError)
      }
    }
  })

  if (jokerCount > 1) {
    exitWithError('You may only supply one Joker')
  }
}

/**
 * Validate card data
 *
 * @param {String} cards
 * @returns {undefined}
 */
function validateCards (cards) {
  validateCardCount(cards)
  validateCardData(cards)
}

/**
 * Validate card data is a String
 *
 * @param {String} input
 * @throws {ValidationError} If argument is not a string
 * @returns {undefined}
 */
function validateInputType (input) {
  if (typeof input !== 'string') {
    const errorText = 'You must provide a string as the first argument.  Example: ' + exampleText

    exitWithError(errorText)
  }
}

module.exports = {
  containsWildcard: containsWildcard,
  validateCards: validateCards
}
