module.exports = {
    name: 'edit',
    description: 'Edit an interaction reply',
    guilds: ['789259215868395552'],
    async run({ interaction, client }) {
        interaction.reply('Ping!').then(m => { //Send the message.
            m.edit("Pong!"); //edit the message.
        })
    }
}