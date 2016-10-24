const validation = require('./validation')

/**
 * Uppercase rank and lowercase suit
 *
 * @param {String} input Space-separated string of card values
 * @returns {Array}
 */
function formatCardData (input) {
  const cards = validation.getCards(input)

  cards.forEach(function (element, index) {
    const rank = element[0].toUpperCase()
    const suit = element[1].toLowerCase()

    cards[index] = rank + suit
  })

  return cards
}

module.exports = formatCardData
