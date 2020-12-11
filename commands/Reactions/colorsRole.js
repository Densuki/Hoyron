const { Collection, RichEmbed, Attachment } = require("discord.js");
//const rm = require('discord.js-reaction-menu');

module.exports = {
    name: "colorsrole",
    aliases: ["cr", "croles", "amongrole"],
    category: "reactions",
    description: "manda uma mensagem com uma lista de cargos por reações",

    run: async (client, message, args) => {

        {//CONFIG
            var logo = 'https://imgur.com/a8DbA6h.png';
            var Cor = '#ab0dcf';
            var DiscordThumb = 'https://imgur.com/FuNGHNp.png';
            }

        {//CORES
            var Branco = '<:Branco:786759012842602526> ';
            var Amarelo = '<:Amarelo:786759014091718656> ';
            var Laranja = '<:Laranja:786759010317500436> ';
            var Carmesim = '<:Carmesim:786759014288457758> ';
            var Rosa = '<:Rosa:786759013907562526> ';
            var Rosa_Escuro = '<:RosaEscuro:786759001198821406> ';
            var Magenta = '<:Magenta:786759014196969512>';
            var Violeta = '<:Roxo:786758999776559134> ';
            var Azul = '<:AzulEscuro:786759011155312650>';
            var Ciano = '<:Ciano:786759000577540116> ';
            var Lima = '<:Lima:786759014204833792> ';
            var Verde_Escuro = '<:VerdeEscuro:786758998656811037> ';
            var Marrom = '<:Marrom:786760457218031626>';
            var Cinza_Escuro  = '<:CinzaEscuro:786759014113214494> ';
            var Preto = '<:Preto:786758996131840030>';
            }

            const embed = new RichEmbed()
                .setAuthor("DOLLARS", DiscordThumb)
                .setTitle("Qual cor você quer no seu nick?")
                .setColor(Cor)
                .setThumbnail(message.guild.iconURL) //ícone 
                .setDescription(`Escolha a cor na qual deseja e que seja do seu agrado. Você poderá mudar quando quiser`)
                .addBlankField()
                .addField(`**> Branco**`, 
                    `${Branco}`, true)
                .addField(`**> Amarelo**`, 
                    `${Amarelo}`, true)
                .addField(`**> Laranja**`, 
                    `${Laranja}`, true)
                .addField(`**> Carmesim**`, 
                    `${Carmesim}`, true)
                .addField(`**> Rosa**`, 
                    `${Rosa}`, true)
                .addField(`**> Rosa Escuro**`, 
                    `${Rosa_Escuro}`, true)
                .addField(`**> Magenta**`, 
                    `${Magenta}`, true)
                .addField(`**> Violeta**`, 
                    `${Violeta}`, true)
                .addField(`**> Azul**`, 
                    `${Azul}`, true)
                .addField(`**> Ciano**`, 
                    `${Ciano}`, true)
                .addField(`**> Lima**`, 
                    `${Lima}`, true)
                .addField(`**> Verde Escuro**`, 
                    `${Verde_Escuro}`, true)
                .addField(`**> Marrom**`, 
                    `${Marrom}`, true)
                .addField(`**> Cinza Escuro**`, 
                    `${Cinza_Escuro}`, true)
                .addField(`**> Preto**`, 
                    `${Preto}`, true)
                    
                //.setImage()
                .setTimestamp()

                .setFooter(`${message.guild.name} • Dollars • © Todos os direitos reservados.`, logo)
                message.channel.send(embed);            
        }
    }