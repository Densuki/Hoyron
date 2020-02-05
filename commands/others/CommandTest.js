const { RichEmbed, Attachment, Emoji } = require("discord.js");
const AgnimonEx = require('../digispirits/digiSpirit').varToExport;
//const AgnimonEx = require('../digispirits/digiSpirit.js'); //o mais "certo".
//import varname from './path_to_the_file';
//const AgnimonEx = require("../commands/digispirits/digiSpirit");

module.exports = {
    name: "CommandTest",
    category: "test",
    aliases: ["teste"],
    description: "enviar mensagens e comandos de testes",

    run: async (client, message, args) => {

        const msg = message.channel.send(`${AgnimonEx}`);
        
    }
}