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
        validation.validateCards('Ah 3c 5s 9d')
      } catch (err) {
        assert(
          err instanceof ValidationError,
          'Must provide 5 card values - 4 were passed'
        )
      }
    })

    it('Does not accept more than 5 card values', function () {
      try {
        validation.validateCards('Ah 3c 5s 9d 7h 8c')
      } catch (err) {
        assert(
          err instanceof ValidationError,
          'Must provide 5 card values - 6 were passed'
        )
      }
    })

    it('Accepts 5 card values', function () {
      assert.equal(
        validation.validateCards('Ah 3c 5s 9d 7h'),
        undefined,
        'Must provide 5 card values'
      )
    })
  })

  describe('Card data', function () {
    it('Can accept a Joker', function () {
      assert.equal(
        validation.validateCards('Ah 3c 5s 9d 0r'),
        undefined,
        'One Joker is fine'
      )
    })

    it('Cannot accept more than one Joker', function () {
      try {
        validation.validateCards('Ah 3c 0r 9d 0r')
      } catch (err) {
        assert(
          err instanceof ValidationError,
          'More than one Joker is not fine'
        )
      }
    })

    it('Valid rank and suits are accepted', function () {
      assert.equal(
        validation.validateCards('Ah 3c 5s 9d 7h'),
        undefined,
        'Card ranks and suits are valid'
      )
    })

    it('Invalid rank and suits are not accepted', function () {
      try {
        validation.validateCards('Rh 3w 5s 9d 7h')
      } catch (err) {
        assert(
          err instanceof ValidationError,
          'Card ranks and suits are invalid'
        )
      }
    })
  })
})
