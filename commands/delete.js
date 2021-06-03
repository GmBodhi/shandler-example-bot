module.exports = {
    name: 'delete',
    description: 'Delete the message after 5000ms',
    guilds: ['789259215868395552'],  
    async run({ interaction, client }) {
      interaction.reply('Bello').then(m => { //Send the reply.
      setTimeout(() => { //Set timeout for 5000 ms.
        m.delete(); //Delete the message.
        }, 5000);
      })
    }
  }