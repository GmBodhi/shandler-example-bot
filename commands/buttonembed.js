const discord = require('discord.js')
module.exports = {
    guilds: ['789259215868395552'],
    name: 'buttonembed',
    async run({ interaction }) {
        let cmp = [
            {
                "type": 1, "components": [
                    { "type": 2, "style": 1, "label": "Button 1", "custom_id": "Hello" },
                    { "type": 2, "style": 4, "label": "Button 2", "custom_id": "Hello" }
                ]
            }
        ]

        let embed = new discord.MessageEmbed()
            .setTitle('Embeds with Buttons')
            .setDescription("Example Description!")
        interaction.reply("", { components: cmp, type: 4, embed: embed, }).then(m => {
        })
    }
}