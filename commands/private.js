//private.js
module.exports = {
  name: 'private',// Will default to filename if this is empty.
  description: 'Private Response.',//Default: "An awesome command..!"
  guilds: ['789259215868395552'],  /*This is for guild specific command registration. If this is empty, the command will be registered globally*/
  async run({ interaction, client }) {
    interaction.reply("Private Message", { flags: 64 }) //Send the interaction message, but as a private message.
  }
}