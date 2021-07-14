client.on('buttonClick', async (button) => {
    if (button.data.custom_id === "1") {

        button.reply("Heya!"); //Reply to the interaction.

    } else if (button.data.custom_id === "2") {

        button.update("Edited the button :)"); //This will edit the original message. 

    } else if (button.data.custom_id === "3") {

        button.reply("Heya!", { flags: 64 }); //This will reply to the interaction with an ephemeral message. 

    } else if (button.data.custom_id === "4") {

        let cmp = [
            {
                "type": 1, "components": [
                    { "type": 2, "style": 1, "label": "Button 1", "custom_id": "3" },
                ]
            }
        ];

        button.update("Buttons!", { components: cmp });

    };
});