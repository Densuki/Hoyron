const { RichEmbed, Attachment} = require("discord.js");
const { } = require("../../datas.js");
const dateFormat = require('dateformat');
//const rm = require('discord.js-reaction-menu');

module.exports = {
    name: "registersrole",
    aliases: ["rr", "rroles", "registerr"],
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

        {//REGISTRO
            var Computador = '💻';
            var Console = '<:Console:787839751192969242>';
            var Mobile = '📱';    
            var Torradeira = '🔥';
            }

         message.delete();
            const embed = new RichEmbed()
                .setAuthor("DOLLARS", DiscordThumb)
                .setTitle("Em qual plataforma você joga?")
                .setColor(Cor)
                .setThumbnail(message.guild.iconURL)
                .setDescription(`Afim de organizar o servidor, este campo é destinado a separar os usuários de acordo com o ambiente de convivência e jogabilidade`)
                .addBlankField()
                .addField(`**> Computador**`,
                    `${Computador}`, true)
                .addField(`**> Console**`,
                    `${Console}`, true)
                .addField(`**> Mobile**`,
                    `${Mobile}`, true)
                .addField(`${Nulo}`, 
                    `${Nulo}`, true)
                .addField(`**> Torradeira**`,
                    `${Torradeira}`, true)
                .addField(`${Nulo}`, 
                    `${Nulo}`, true)
                    
                .setTimestamp()

                .setFooter(`${message.guild.name} • Dollars • © Todos os direitos reservados.`, logo)
                message.channel.send(embed);            
        }
    }