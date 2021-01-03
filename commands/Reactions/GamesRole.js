const { RichEmbed, Attachment} = require("discord.js");
const { } = require("../../datas.js");
const dateFormat = require('dateformat');
//const rm = require('discord.js-reaction-menu');

module.exports = {
    name: "cgamessrole",
    aliases: ["gr", "groles"],
    category: "reactions",
    description: "manda uma mensagem com uma lista de cargos por reações",

    run: async (client, message, args) => {

        {//CONFIG
            var logo = 'https://imgur.com/a8DbA6h.png';
            var Cor = '#ab0dcf';
            var DiscordThumb = 'https://imgur.com/FuNGHNp.png';
            var Nulo = '<:null:771585814110797825>';
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

        {//GAMES
            var RPG = '<:RPG:787847120928374795>';
            var Minecraft = '<:Minecraft:787847711134187550>';
            var One_Piece = '<:One_Piece:787847121138614293>';
            var Elsword = '<:Elsword:787850770568445993>';
            var Digimon_Masters_Online = '<:Digimon:787850766643494972>';
            var MOBA = '<:MOBA:787851464286142484> ';
            var League_Of_Legends = '<:League_Of_Legends:787852868966678539>';
            var Champions_Legion = '<:MOBA:787847101567991808>';
            var FPS = '<:FPS:787847118059733032>';
            var Paladins = '<:Paladins:787850772975976448>';
            var Among_Us = '<:Vermelho:786777162299736064>';
        }

         message.delete();
            const embed = new RichEmbed()
                .setAuthor("DOLLARS", DiscordThumb)
                .setTitle("Quais ou qual jogo você costuma jogar?")
                .setColor(Cor)
                .setThumbnail(message.guild.iconURL)
                .setDescription(`Afim de organizar o servidor, separamos os cargos para liberar algumas salas de acordo com jogo`)
                .addBlankField()
                .addField(`**> RPG**`,
                    `${RPG}`, true)
                .addField(`**> MOBA**`,
                    `${MOBA}`, true)
                .addField(`**> FPS**`,
                    `${FPS}`, true)
                .addField(`**> Elsword**`,
                    `${Elsword}`, true)
                .addField(`**> Minecraft**`,
                    `${Minecraft}`, true)
                .addField(`**> Paladins**`,
                    `${Paladins}`, true)
                .addField(`**> One Piece**`,
                    `${One_Piece}`, true)
                .addField(`**> Digimon**`,
                    `${Digimon_Masters_Online}`, true)
                .addField(`**> Among Us**`,
                    `${Among_Us}`, true)

                .addBlankField()

                .addField(`**> League Of Legends**`,
                    `${League_Of_Legends}`, true)
                .addField(`**> Champions Legion**`,
                    `${Champions_Legion}`, true)

                .setTimestamp()

                .setFooter(`${message.guild.name} • Dollars • © Todos os direitos reservados.`, logo)
                message.channel.send(embed);            
        }
    }