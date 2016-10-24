const ValidationError = require('./errors/validation')

/**
 * Set the `process.exitCode` to `1` and throw error
 *
 * @param {@String} message
 * @returns {ValidationError}
 */
function exitWithError (message) {
  process.exitCode = 1

  throw new ValidationError(message)
}

module.exports = exitWithError
