module.exports = {
    name: 'followup',
    description: 'Reply to the interaction with follow-up messages.',
    guilds: ['789259215868395552'],
    async run({ interaction, client }) {
        let m = await interaction.reply("Bello"); //Send the first message.
        let i = await m.reply("This is a follow-up message"); //Send the first Follow up message.
        i.reply("This is another follow-up message"); //Send another Follow up message.
    }
}