const { RichEmbed, Attachment} = require("discord.js");
const { } = require("../../datas.js");
const dateFormat = require('dateformat');
//const rm = require('discord.js-reaction-menu');

module.exports = {
    name: "moderationrole",
    aliases: ["mr", "mroles"],
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
           var Computador = '<:Computer:787834977348747324> ';
           var Console = '<:Console:787834417690574878>';
           var Mobile = '<:Mobile:787834411885658132> ';    
           var Torradeira = '🔥';
           
           var Mulher = '❤️';
           var Homem = '💙';

           var PronomeN = '💜';
           var Okama = '💗';
           var Gado = '🐮';
           var Pedro = '🐵';

           var Cadeia = '⛓️';
           var Chave = '🔑';

           var Membro = '♿';
           var Confirmação = '✅';
           }

         message.delete();
            const embed = new RichEmbed()
                .setAuthor("DOLLARS", DiscordThumb)
                .setTitle("Por favor, escolha o sexo de sua preferência e sua identificação")
                .setColor(Cor)
                .setThumbnail(message.guild.iconURL)
                .setDescription(`Caso não queira ser indentificado(a), escolha <@&773229247853494313>. Após o término, escolha o cargo <@&563547359011667969> e confirme no <@&788873815799234601>`)
                .addBlankField()
                .addField(`**> Mulher**`, 
                    `${Mulher}`, true)
                .addField(`**> Homem**`,
                    `${Homem}`, true)
                .addField(`**> Pronome Neutro**`, 
                    `${PronomeN}`, true)

                .addBlankField()
                    
                .addField(`**> Okama**`, 
                    `${Okama}`, true)
                .addField(`**> Sim, me identifico como Gado**`, 
                    `${Gado}`, true)
                .addField(`**> Sim, me identifico como PeDrO**`, 
                    `${Pedro}`, true)

                .addBlankField()

                .addField(`**> Já Posso ser preso**`,
                    `${Cadeia}`, true)
                .addField(`**> Cuidado! Posso dar cadeia**`,
                    `${Chave}`, true)

                .addBlankField()
  
                .addField(`**> Membro**`, 
                    `${Membro}`, true)
                .addField(`${Nulo}`, 
                    `${Nulo}`, true)
                .addField(`**> Confirmação**`,
                    `${Confirmação}`, true)


                .setTimestamp()

                .setFooter(`${message.guild.name} • Dollars • © Todos os direitos reservados.`, logo)
                message.channel.send(embed);            
        }
    }