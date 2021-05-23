//reply.js
module.exports = {
  name: 'reply',// Will default to filename if this is empty.
  description: 'Reply to the interaction',//Default: "An awesome command..!"
  guilds: ['789259215868395552'],  /*This is for guild specific command registration. If this is empty, the command will be registered globally*/
  async run({ interaction, client }) {
    interaction.reply('Bello').then(console.log); //Send the interaction message, then log it.
  }
}