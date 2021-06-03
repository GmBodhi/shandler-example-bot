module.exports = {
    name: 'ephemeral',
    description: 'Sphemeral Response.',
    guilds: ['789259215868395552'],
    async run({ interaction, client }) {
        interaction.reply("Ephemeral Message", { flags: 64 }) //Send the interaction message, but as a private message.
    }
}