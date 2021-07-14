const discord = require('discord.js');

module.exports = {
    guilds: ['789259215868395552'],
    name: 'dropdowns',
    description: 'Reply to the interaction with dropdowns.',
    async run({ interaction, client }) {
        let cmp = [
            {
                'type': 1,
                'components': [
                    { "type": 2, "style": 1, "label": "Button 1", "custom_id": "testing" },
                ],
            },
            {
                'type': 1,
                'components': [
                    { 'type': 3, 'style': 4, 'label': 'Button 2', 'custom_id': '2', 'options': [{ 'name': 'test', 'value': 'test', 'label': 'test' }, { 'name': 'hmm', 'value': 'hmmm', 'label': 'hmmm' },], },
                ]
            }] // Creating the buttons and dropdowns using two action rows.

        interaction.reply("Buttons!", { components: cmp, type: 4, }); // Send the reply.
    }
}
