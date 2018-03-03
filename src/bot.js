const discordJS = require('discord.js')

const config = require('../config/config.json')
const client = new discordJS.Client()
const embeds = require('./commands/staticEmbeds')

const rawCommands = require('./commands/commands.json')
const commands = Object.keys(rawCommands).reduce((obj, c) => {
  obj[c] = Object.assign({}, rawCommands[c], {
    command: require('./commands/' + rawCommands[c].name)
  })
  return obj
}, {})

client.on('message', msg => {
  if (msg.content.startsWith('~')) {
    const splitMsg = msg.content.split(' ')
    const command = splitMsg[0].slice(1).toLowerCase()
    const args = splitMsg.slice(1)

    commands[command]
      ? commands[command].command(msg, args)
      : msg.channel.send({ embed: embeds.unknownCommand })
  }
})

client
  .login(config.bot.token)
  .then(() => console.log('[INFO] Bot connected'))
  .catch(e => console.error('[ERR] Login error \n', e))
