//followup.js
module.exports = {
  name: 'followup',// Will default to filename if this is empty.
  description: 'Follow-up to an interaction',//Default: "An awesome command..!"
  guilds: ['789259215868395552'],  /*This is for guild specific command registration. If this is empty, the command will be registered globally*/
  async run({ interaction, client }) {
    let m = await interaction.reply("Bello"); //Send the first message.
    let i = await m.reply("This is a follow-up message"); //Send the first Follow up message.
    i.reply("This is another follow-up message"); //Send another Follow up message.
  }
}

