const assert = require('assert')
const exitWithError = require('../../lib/error')
const ValidationError = require('../../lib/errors/validation')

describe('exitWithError()', function () {
  it('Sets process.exitCode', function () {
    assert.equal(
      process.exitCode,
      undefined,
      'Initial value'
    )

    try {
      exitWithError()
    } catch (err) {
      assert.equal(
        process.exitCode,
        1,
        'Value has been set'
      )
    }
  })

  it('Throws ValidationError', function () {
    try {
      exitWithError()
    } catch (err) {
      assert(
        err instanceof ValidationError,
        'Throws expected error'
      )
    }
  })
})
