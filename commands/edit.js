module.exports = {
    name: 'edit',
    description: 'Reply to the interaction then editing it.',
    guilds: ['789259215868395552'],
    async run({ interaction, client }) {
        interaction.reply('Bello').then(m => { //Send the message.
            m.edit("Pog"); //edit the message.
        });
    }
}