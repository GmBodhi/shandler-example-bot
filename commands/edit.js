//edit.js
module.exports = {
  name: 'edit',// Will default to filename if this is empty.
  description: 'Edit an interaction reply',//Default: "An awesome command..!"
  guilds: ['789259215868395552'],  /*This is for guild specific command registration. If this is empty, the command will be registered globally*/
  async run({ interaction, client }) {
    interaction.reply('Bello').then(m => { //Send the message.
      m.edit("Pog"); //edit the message.
    })
  }
}