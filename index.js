const Discord = require('discord.js');
const SHClient = require('shandler');
const client = new Discord.Client();

{
    commandsDir = 'commands', // Commands dir
    showLogs = 'extra', // ('extra'|'normal'|null)
    autoDelete = true, // Automatically deletes the Global commands if command files are not found
    cLogs = false, // Console.log most of the promises 
    wrapper = false, /* Use this package as a wrapper 
    You may need to delete/register commands 
    using the create/delete methods*/
    autoRegister = true // Automatically registers commands accoring to the command files
}

const handler = new SHClient(client, options)

client.on('ready', ()=> {
    console.log(client.user.tag, ' is ready')
})

client.login(process.env.TOKEN)
