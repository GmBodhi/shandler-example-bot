const SHClient = require('shandler');
const Discord = require('discord.js');
const colors = require('colors');
const dotenv = require('dotenv');
dotenv.config();

const client = new Discord.Client();

const options = {
    commandsDir: 'commands', // commands folder path (required)
    showLogs: null, // "extra"|"normal"|null (default: "extra")
    wrapper: false, // defaults to false
    cLogs: true, // logs most of the resolved promises
    autoDelete: false, // Automatically syncs the global application commands
    autoRegister: true // Automatically register commands
}

const handler = new SHClient(client, options);


client.on('ready', () => {
    console.log(`${client.user.tag} is ready`.green);
});

client.on('buttonClick', async (button) => {

    switch (button.data.custom_id) {
        case "button_1": {
            let cmp = [
                {
                    "type": 1, "components": [
                        { "type": 2, "style": 1, "emoji": { "name": "👋" }, "label": "Hello!", "custom_id": "Hello" },
                        { "type": 2, "style": 4, "label": "Back", "custom_id": "back" },
                    ]
                }
            ];
            button.reply("Buttons!", { components: cmp, type: 7 });
            break;
        };
        case "button_2": {
            let cmp = [
                {
                    "type": 1, "components": [
                        { "type": 2, "style": 1, "emoji": { "name": "👋" }, "label": "Hello!", "custom_id": "Hello" },
                        { "type": 2, "style": 4, "label": "Back", "custom_id": "back" },
                    ]
                }
            ];
            button.reply("Buttons!", { components: cmp, type: 7 });
            break;
        };
        case "Hello": {
            button.reply("Heya!", { flags: 64 });
            break;
        };
        case "back": {
            let cmp = [
                {
                    "type": 1, "components": [
                        { "type": 2, "style": 1, "label": "Button 1", "custom_id": "button_1" },
                        { "type": 2, "style": 4, "label": "Button 2", "custom_id": "button_2" }
                    ]
                }
            ];
            button.reply("Buttons!", { components: cmp, type: 7, });
            break;
        };
        case "2": {
            if (button.data.values[0] === "hmmm") {
                button.reply(`🤔`);
            } else if (button.data.values[0] === "test") {
                button.reply(`Tests`);
            };
        };
    }
});


client.login(process.env.TOKEN);
