const assert = require('assert')
const ValidationError = require('../../../lib/errors/validation')

function doSomethingBad () {
  throw new ValidationError('validation error message')
}

it('Error details', function () {
  try {
    doSomethingBad()
  } catch (err) {
    assert.strictEqual(
      err.name,
      'ValidationError',
      "Name property set to error's name"
    )

    assert(
      err instanceof ValidationError,
      'Is an instance of its class'
    )

    assert(
      err instanceof Error,
      'Is instance of built-in Error'
    )

    assert(
      require('util').isError(err),
      'Should be recognized by Node.js util#isError'
    )

    assert(
      err.stack,
      'Should have recorded a stack'
    )

    assert.strictEqual(
      err.toString(),
      'ValidationError: validation error message',
      'toString should return the default error message formatting'
    )

    assert.strictEqual(
      err.stack.split('\n')[0],
      'ValidationError: validation error message',
      'Stack should start with the default error message formatting'
    )

    assert.strictEqual(
      err.stack.split('\n')[1].indexOf('doSomethingBad'),
      7,
      'The first stack frame should be the function where the error was thrown'
    )
  }
})
