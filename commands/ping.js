
module.exports = {
    name: 'ping',
    description: 'Slash Command\'s Ping!',
    guilds: ['789259215868395552'],
    async run({ interaction, client }) {
        let ping = Date.now() // Get the date.
        interaction.reply("Pinging..!").then(m => { // Send the initial reply.
            m.edit(`My ping is ${Date.now() - ping} ms`) // Edit the message with the time difference.
            m.message.react(`🏓`); // React to the message.
        })
    }
}