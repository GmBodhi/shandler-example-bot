//delete.js
module.exports = {
  name: 'delete',// Will default to filename if this is empty.
  description: 'Delete the message after 5000ms',//Default: "An awesome command..!"
  guilds: ['789259215868395552'],  /*This is for guild specific command registration. If this is empty, the command will be registered globally*/
  async run({ interaction, client }) {
    interaction.reply('Bello').then(m => { //Send the reply.
      setTimeout(() => { //Set timeout for 5000 ms.
        m.delete(); //Delete the message.
      }, 5000);
    })
  }
}