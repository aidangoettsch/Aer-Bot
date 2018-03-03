const discordJS = require('discord.js')
const commands = require('./commands.json')
const version = require('../../package.json').version

module.exports = {
  unknownCommand: new discordJS.RichEmbed({
    title: ':octagonal_sign: Invalid Command',
    description:
      'The command you typed was invalid. Look at `~help` for a list of all commands.',
    color: 2550255
  }),
  help: new discordJS.RichEmbed({
    title: '`Help`',
    description: 'Use `~help [command]` for more information on a command.',
    color: 2550255,
    footer: {
      text: 'ÆR Bot | v' + version
    },
    fields: Object.keys(commands).map(k => {
      return {
        name: k,
        value: commands[k].desc
      }
    })
  })
}
