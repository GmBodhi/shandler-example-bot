module.exports = {
    name: 'reply',
    description: 'Reply to the interaction.',
    guilds: ['789259215868395552'],
    async run({ interaction, client }) {
        interaction.reply('Bello!').then(console.log); // Send the reply.
    }
}