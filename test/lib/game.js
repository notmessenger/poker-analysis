const assert = require('assert')
const game = require('../../lib/game')

describe('Game', function () {
  describe('Hand', function () {
    it('Five of a kind', function () {
      assert.strictEqual(
        game.identifyHand(['Ad', 'Ac', 'Ah', 'As', '0r']),
        "Five of a Kind, A's",
        'Five of a kind'
      )
    })

    it('Royal flush', function () {
      assert.strictEqual(
        game.identifyHand(['Ad', 'Kd', 'Qd', 'Jd', 'Td']),
        'Royal Flush',
        'Royal Flush'
      )
    })

    it('Straight flush', function () {
      assert.strictEqual(
        game.identifyHand(['9d', '8d', '7d', '6d', '5d']),
        "Straight Flush, 9d High",
        'Straight flush'
      )
    })

    it('Four of a kind', function () {
      assert.strictEqual(
        game.identifyHand(['Ad', 'AC', 'ah', 'as', '7H']),
        "Four of a Kind, A's",
        'Four of a kind'
      )
    })

    it('Full House', function () {
      assert.strictEqual(
        game.identifyHand(['Ad', 'AC', '7d', '7s', '7H']),
        "Full House, 7's over A's",
        'Full house'
      )
    })

    it('Flush', function () {
      assert.strictEqual(
        game.identifyHand(['Ad', 'Kd', '7d', '3d', '5d']),
        'Flush, Ad High',
        'Flush'
      )
    })

    it('Straight', function () {
      assert.strictEqual(
        game.identifyHand(['Ad', 'Ks', 'Qc', 'Jh', 'Td']),
        'Straight, A High',
        'Straight'
      )
    })

    it('Three of a kind', function () {
      assert.strictEqual(
        game.identifyHand(['Ad', 'As', 'Ac', '5h', '9d']),
        "Three of a Kind, A's",
        'Three of a kind'
      )
    })

    it('Two pair', function () {
      assert.strictEqual(
        game.identifyHand(['Ad', 'As', '5c', '5h', '9d']),
        "Two Pair, A's & 5's",
        'Two pair'
      )
    })

    it('One pair', function () {
      assert.strictEqual(
        game.identifyHand(['5h', '5c', '7s', '6c', '2s']),
        "Pair, 5's",
        'One pair'
      )
    })

    it('High card', function () {
      assert.strictEqual(
        game.identifyHand(['Ad', '2s', '5c', 'Th', '9d']),
        'A High',
        'High card'
      )
    })
  })
})
