/**
 * Uppercase rank and lowercase suit
 *
 * @param {String} input Space-separated string of card values
 * @returns {Array}
 */
function formatCardData (input) {
  const cards = input.split(' ')

  cards.forEach(function (element, index) {
    let rank = null
    let suit = null

    if (element[0]) {
      rank = element[0].toUpperCase()
    }

    if (element[1]) {
      suit = element[1].toLowerCase()
    }

    cards[index] = rank + suit
  })

  return cards
}

module.exports = formatCardData
