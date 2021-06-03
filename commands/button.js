const discord = require('discord.js')
module.exports = {
    guilds: ['789259215868395552'],
    name: 'button',
    async run({ interaction }) {
        let cmp = [
            {
                "type": 1, "components": [
                    { "type": 2, "style": 1, "label": "Button 1", "custom_id": "button_1" },
                    { "type": 2, "style": 4, "label": "Button 2", "custom_id": "button_2" }
                ]
            }
        ]

        interaction.reply("Buttons!", { components: cmp, type: 4, })
    }
}