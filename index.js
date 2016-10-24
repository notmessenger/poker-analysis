const chalk = require('chalk')
const format = require('./lib/format')
const game = require('./lib/game')
const input = require('./lib/input')
const log = console.log
const output = require('./lib/output')
const validation = require('./lib/validation')

try {
  const cards = input[2]

  validation.validateCards(cards)

  const formattedCards = format(cards)

  log(
    chalk.green(
      'The hand of',
      output(formattedCards),
      'is',
      game.identifyHand(formattedCards)
    )
  )
} catch (err) {
  log(
    chalk.red(
      err.message
    )
  )
}
