const assert = require('assert')
const input = require('../../lib/input')

describe('Input Data', function () {
  describe('getInput()', function () {
    it('Returns expected value', function () {
      const testValue = 'test Value 3'

      process.argv[2] = testValue

      assert.equal(
        input[2],
        testValue,
        'Gets process arguments'
      )
    })
  })
})
