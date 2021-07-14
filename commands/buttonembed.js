const { MessageEmbed } = require('discord.js');

module.exports = {
    guilds: ['789259215868395552'],
    name: 'buttonembed',
    description: 'Reply to the interaction with button(s) on an embed.',
    async run({ interaction, client }) {
        let cmp = [
            {
                "type": 1, "components": [
                    { "type": 2, "style": 1, "label": "Button 1", "custom_id": "Hello" },
                    { "type": 2, "style": 4, "label": "Button 2", "custom_id": "Hello" }
                ]
            }
        ]; // Creating the buttons.

        let embed = new MessageEmbed() // Making the Embed.
            .setTitle('Embeds with Buttons')
            .setDescription("Example Description!"); 
        interaction.reply("", { components: cmp, type: 4, embed: embed, }); // Sending the reply.
    }
}