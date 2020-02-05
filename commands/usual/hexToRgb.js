const { RichEmbed, Attachment } = require("discord.js");
const convert = require('color-convert');


module.exports = {
    name: "hex para RGB",
    category: "usual",
    aliases: ["hextorgb", "htg", "colorConverter"],
    usage: "<digitar a cor desejada>",
    description: "enviar uma mensagem mostrando a conversão de cores em Hexadecimal para RGB ou vice-versa",

    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send('Por favor escolha a conversão.');
        
        let hex;
        try {
            (!args["hex"]); 
    } catch (e) {
            return message.channel.send('Desculpe, mas insira uma cor válida.');
        }    

        try {
            hex = args.join (' ');
        } catch (e) {
            return message.channel.send('Desculpe, mas insira uma cor válida.');
        }
    
    //ResultadoHex = convert.rgb.hex(rgb);
    ResultadoRgb = convert.hex.rgb(hex);

        var logo = "https://imgur.com/pgQnTtD.png";
        const icon = new Attachment("./assets/Imagens/Outros/color_circle.png", "color_circle.png");

        const embed = new RichEmbed()        
            .attachFile(icon)
            .setThumbnail('attachment://color_circle.png')
            .setColor('#2cd388')
            .setTitle('Conversão Hex para RGB')
            .addField('**> HEX**', hex, true)
            .addField('**> RGB**', ResultadoRgb, true)
            .setTimestamp()
            .setFooter('WariansForce! and Dollars © 2019', logo)
        message.channel.send(embed)
        

    
    }
}