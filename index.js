const chalk = require('chalk')
const format = require('./lib/format')
const game = require('./lib/game')
const input = require('./lib/input')
const log = console.log
const validation = require('./lib/validation')

try {
  const cards = input[2]

  validation.validateCards(cards)

  log(
    chalk.green(
      game.identifyHand(format(cards))
    )
  )
} catch (err) {
  log(
    chalk.red(
      err.message
    )
  )
}
