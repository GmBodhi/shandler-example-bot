const { MessageEmbed } = require('discord.js');

module.exports = {
    guilds: ['789259215868395552'],
    name: 'embed',
    description: 'Reply to the interaction with an embed.',
    async run({ interaction, client }) {
        let embed = new MessageEmbed() // Making the Embed.
            .setTitle('Example Embed')
            .setDescription("Example Description!");
        interaction.reply("", { embed: embed }); // Sending the reply.
    }
}