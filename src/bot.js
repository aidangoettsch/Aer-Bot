const discordJS = require('discord.js')

const config = require('../config/config.json')
const client = new discordJS.Client()
const embeds = require('./commands/staticEmbeds')

const commands = {
  help: (msg, args) => {
    msg.channel.send('auyda')
  }
}

client.on('message', msg => {
  if (msg.content.startsWith('~')) {
    const splitMsg = msg.content.split(' ')
    const command = splitMsg[0].slice(1)
    const args = splitMsg.slice(1)

    commands[command]
      ? commands[command](msg, args)
      : msg.channel.send({ embed: embeds.unknownCommand })
  }
})

client
  .login(config.bot.token)
  .then(() => console.log('[INFO] Bot connected'))
  .catch(e => console.error('[ERR] Login error \n', e))
