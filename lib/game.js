const Hand = require('pokersolver').Hand
const validation = require('./validation')

/**
 * Determine which hand is represented by the provided cards
 *
 * @param {Array} cards
 * @returns {String}
 */
function identifyHand (cards) {
  const hand = Hand.solve(cards, getType(cards))

  return hand.descr
}

/**
 * Determine game type
 *
 * @param {String} cards Space-separated string of card values
 * @returns {?String}
 */
function getType (cards) {
  let acesCount = 0;

  cards.forEach(function (element) {
    if (element[0] === 'A') {
      acesCount++
    }
  })

  return validation.containsWildcard(cards) && acesCount === 4 ? 'joker' : 'standard'
}

module.exports = {
  identifyHand: identifyHand
}
