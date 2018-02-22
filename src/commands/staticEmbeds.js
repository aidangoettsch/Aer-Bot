const discordJS = require('discord.js')
const commands = require('./commands.json')

module.exports = {
  unknownCommand: new discordJS.RichEmbed({
    title: ':octagonal_sign: Invalid Command',
    description:
      'The command you typed was invalid. Look at `~help` for a list of all commands.',
    color: 2550255
  }),
  help: new discordJS.RichEmbed({
    embed: {
      title: '`Help`',
      description: 'Use `~help [command]` for more information on a command.',
      color: 2798387,
      footer: {
        text: 'ÆR Bot | v0.1.0'
      },
      fields: [
        {
          name: '`~role [role]`',
          value: 'Assign a role to yourself.',
          inline: true
        },
        {
          name: '`~droprole [role]`',
          value: 'Remove a role from yourself.',
          inline: true
        }
      ]
    }
  })
}
