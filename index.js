const { Client } = require('discord.js')
const { SHClient } = require('shandler')

const client = new Client()
const options = {
    commandsDir: 'cmds',
    showLogs:'extra',
}

const hndlr = new SHClient(client, options)

client.on('ready', ()=> {
    console.log(client.user.tag, ' is ready')
})

client.login(process.env.TOKEN)