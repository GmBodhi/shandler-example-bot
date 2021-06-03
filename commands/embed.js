const { MessageEmbed } = require('discord.js')

module.exports = {
    guilds: ['789259215868395552'],
    name: 'embed',
    async run({ interaction }) {

        let embed = new MessageEmbed()
            .setTitle('Example Embed')
            .setDescription("Example Description!")
        interaction.reply("", { embed: embed, })
    }
}