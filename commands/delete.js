module.exports = {
  name: 'delete',
  description: 'Delete the message after 5000ms',
  guilds: ['789259215868395552'],
  description: 'Reply to the interaction then delete it.',
  async run({ interaction, client }) {
    interaction.reply('Bello').then(m => { //Send the reply.
      setTimeout(() => {
        m.delete(); //Delete the message.
      }, 5000); // Set timeout for 5000 ms.
    });
  }
}