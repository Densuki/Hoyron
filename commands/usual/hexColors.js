const { RichEmbed, Attachment } = require("discord.js");

module.exports = {
    name: "hexColors",
    category: "usual",
    aliases: ["hex"],
    usage: "[basta executar o comando]",
    description: "enviar uma mensagem mostrando as cores em Hexadecimal",

    run: async (client, message, args) => {
        {//Primeira versão

        // function generateHex() {
        //     /* Break this up a bit...
        //         return "#" + Math.floor(Math.random() * 16777215).toString(16); */
        //         let hexMath = Math.floor(Math.random() * 16777215);
        //         let randHex = hexMath.toString (16);
        //         return(randHex);
        //     } /* I have not checked your method here. If this doesn't return a valid HEX value, then check your math. */
            
        //     /* Your commands are worth hard-coding...
        //          var args = message.content.substring(PREFIX.length).split(" ");
            
        //          switch (args[0].toLowerCase()) {
        //               case "genrandomhex":
        //                   message.channel.send("generateHex")
        //          } */
            
        //         let msg = message.content.toLowerCase();
            
        //             message.delete(1000);
        //         var logo = "https://imgur.com/pgQnTtD.png";
        //         const icon = new Attachment("./assets/Imagens/Outros/color-wheel.png", "color-wheel.png");
        //         var color = generateHex();

        //         const embed = new RichEmbed()
        //             .attachFile(icon)
        //             .setThumbnail('attachment://color-wheel.png')
        //             .setColor(color)
        //             .setTitle('Hex Colors')
        //             .addField('**> Cor gerada**', '#' + generateHex(), true)
        //             //.addField()
        //             .setTimestamp()
        //             .setFooter('WariansForce! and Dollars © 2019', logo)
        //         message.channel.send(embed);     
        //             //message.channel.send('#' + generateHex());
        //         }
        }
                message.delete(1000);
                var logo = "https://imgur.com/pgQnTtD.png";
                const icon = new Attachment("./assets/Imagens/Outros/color-wheel.png", "color-wheel.png");

                let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
                let embed = new RichEmbed()
                      .setThumbnail('attachment://color-wheel.png')
                      .setTitle('Hex Colors')
                      .attachFile(icon)
                      .addField('**> Cor gerada**', `#${color}`, true)
                      //.setTitle(`#${color}`)
                      .setColor(`#${color}`)
                      .setTimestamp()
                      .setFooter('WariansForce! and Dollars © 2019', logo)
               message.channel.send({embed});
        }
    }



