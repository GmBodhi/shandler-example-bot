
module.exports = {
    name: 'ping',
    description: 'Slash Command\'s Ping!',
    guilds: ['789259215868395552'],
    async run({ interaction, client }) {
        let ping = Date.now()
        interaction.reply("Pinging..!").then(m => {
            m.edit(`My ping is ${Date.now() - ping} ms`)
        })
    }
}