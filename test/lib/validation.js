const assert = require('assert')
const validation = require('../../lib/validation')
const ValidationError = require('../../lib/errors/validation')

describe('Card validation', function () {
  describe('Data type', function () {
    it('Throws error if card data is not a string', function () {
      try {
        validation.validateCards()
      } catch (err) {
        assert(
          err instanceof ValidationError,
          'Card data was not a string'
        )
      }
    })
  })

  describe('Card count', function () {
    it('Does not accept less than 5 card values', function () {
      try {
        validation.validateCards('a b c d')
      } catch (err) {
        assert(
          err instanceof ValidationError,
          'Must provide 5 card values - 4 were passed'
        )
      }
    })

    it('Does not accept more than 5 card values', function () {
      try {
        validation.validateCards('a b c d e f')
      } catch (err) {
        assert(
          err instanceof ValidationError,
          'Must provide 5 card values - 6 were passed'
        )
      }
    })

    it('Accepts 5 card values', function () {
      assert.equal(
        validation.validateCards('a b c d e'),
        undefined,
        'Must provide 5 card values'
      )
    })
  })
})
