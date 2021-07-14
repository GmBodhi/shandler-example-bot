module.exports = {
    name: 'ephemeral',
    guilds: ['789259215868395552'],
    description: 'Reply to the interaction with an ephemeral response.',
    async run({ interaction, client }) {
        interaction.reply("Ephemeral Message", { flags: 64 }) //Send the interaction message, but as a private message.
    }
}