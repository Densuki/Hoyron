const { RichEmbed, Attachment } = require("discord.js");
const colors = require('colors');

module.exports = {
    category: "system",
    description: "enviar um sistema de cores pelo console",

    run: async (client, message, args) => {
        
        colors.setTheme({
            silly: 'rainbow',
            input: 'grey',
            verbose: 'cyan',
            prompt: 'grey',
            info: 'green',
            data: 'grey',
            help: 'cyan',
            warn: 'yellow',
            debug: 'blue',
            error: 'red'
        });
    }
}