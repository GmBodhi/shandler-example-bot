module.exports = {
    name: 'defer',
    description: 'Reply an interaction (defer).',
    guilds: ['789259215868395552'],
    async run({ interaction, client }) {
        interaction.defer();
    }
}