/**
 * Replace suit characters with unicode characters of suits
 *
 * @param {Array} cards
 * @returns {String}
 */
function convertedHand (cards) {
  let hand = cards.join(' ')

  hand = hand.replace(/c/gi, '\u2663')
  hand = hand.replace(/d/gi, '\u2666')
  hand = hand.replace(/h/gi, '\u2665')
  hand = hand.replace(/s/gi, '\u2660')
  hand = hand.replace(/0r/gi, String.fromCharCode(0xD83C, 0xDCCF) + ' ')

  return hand
}

module.exports = convertedHand
