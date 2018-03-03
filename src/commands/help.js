const embeds = require('./staticEmbeds')

module.exports = (msg, args) => {
  console.log(embeds.help)
  msg.channel.send({ embed: embeds.help })
}
