const assert = require('assert')
const format = require('../../lib/format')

describe('Format card data', function () {
  describe('Card rank', function () {
    it('Ranks are uppercased', function () {
      assert.deepEqual(
        format('ah 3c 5s td as'),
        ['Ah', '3c', '5s', 'Td', 'As'],
        'Ranks are uppercased'
      )
    })
  })

  describe('Card suit', function () {
    it('Suits are lowercased', function () {
      assert.deepEqual(
        format('aH 3C 5R td as'),
        ['Ah', '3c', '5r', 'Td', 'As'],
        'Suits are lowercased'
      )
    })
  })
})
