/**
 * Get `process.argv` data
 *
 * @see {@link https://nodejs.org/dist/latest-v6.x/docs/api/process.html#process_process_argv}
 * @returns {Array}
 */
function getInput () {
  return process.argv
}

module.exports = getInput()
