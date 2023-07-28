const p = require('phin')

async function weather(place) {
  const resp = await p(`https://wttr.in/${place}?format=1`)
}

module.exports = weather