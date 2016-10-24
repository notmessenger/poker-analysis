const chalk = require('chalk')
const log = console.log
const input = require('./lib/input')
const validation = require('./lib/validation.js')

try {
  validation.validateCards(input[2])
} catch (err) {
  log(chalk.red(err.message))
}
