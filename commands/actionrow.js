const discord = require('discord.js');

module.exports = {
    guilds: ['789259215868395552'],
    name: 'actionrow',
    description: 'Reply to the interaction with an button(s) using action rows.',
    async run({ interaction, client }) {
        let cmp = [
            {
                "type": 1, "components": [
                    { "type": 2, "style": 1, "label": "Button 1", "custom_id": "button_1" },
                ]
            },
            {
                "type": 1, "components": [
                    { "type": 2, "style": 4, "label": "Button 2", "custom_id": "button_2" }
                ]
            }
        ]; // Creating the buttons and two action rows.

        interaction.reply("Buttons!", { components: cmp, type: 4, }); // Send the reply.
    }
}
