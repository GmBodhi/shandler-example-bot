module.exports = {
    //guilds:['826662403810131988'],
    name:'ping',
    async run({interaction}){
        interaction.reply('Bello').then(m => {
            m.edit("llo").then(e => {
                e.edit("Bello")
            })
        })
    }
}