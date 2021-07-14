const { MessageAttachment } = require(`discord.js`);

module.exports = {
    name: 'attachments',
    description: 'Reply to the interaction with an attachment.',
    guilds: ['789259215868395552'],
    async run({ interaction, client }) {
        const file = new MessageAttachment('https://i.imgur.com/MczbbIm.png'); // Get the image and get it ready for Discord.
        interaction.reply("", { files: [file] }); // Send the reply.
    }
}