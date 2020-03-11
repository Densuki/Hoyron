const { RichEmbed } = require("discord.js");
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");
const dateFormat = require('dateformat');

const Data = new Date();

module.exports = {
    name: "userinfo",
    aliases: ["who", "whois", "user"],
    category: "info",
    description: "informações do Usuário",
    usage: "[username | id | mention]",
    run: (client, message, args) => {

        const member = getMember(message, args.join(" "));

        // Member variables
        //const joined = formatDate(member.joinedAt);
        const joinedD = dateFormat(member.joinedAt, "dd/mm/yyyy");
        const joinedH = dateFormat(member.joinedAt, "HH:MM:ss");

        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        //const created = formatDate(member.user.createdAt);
        var logo = "https://imgur.com/pgQnTtD.png";
        const createdD = dateFormat(member.user.createdAt, "dd/mm/yyyy");
        const createdH = dateFormat(member.user.createdAt, "HH:MM:ss");

        const embed = new RichEmbed()
            .setAuthor('Suas informações', 'https://imgur.com/FuNGHNp.png')

            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .setThumbnail(member.user.displayAvatarURL) //imagem do lado            

            .addField('💻 Informação como Membro:', stripIndents
            `**> Nome em Exibição:** ${member.displayName}
            **> Entrou no servidor no dia:** ${joinedD} às ${joinedH}
            **> Possui os Cargos:** ${roles}`, true)

            .addField('💻 Informação de Usuário:', stripIndents
            `**> ID:** ${member.user.id}
            **> Nick:** ${member.user.username}
            **> Tag:** ${member.user.tag}
            **> Foi criado no dia:** ${createdD} às ${createdH}`, true)
            
            .setTimestamp() //Horário que o comando foi usado
            .setFooter('WariansForce! and Dollars • © Todos os direitos reservados.', logo)
            //.setFooter(member.displayName, member.user.displayAvatarURL) //notas de rodapé

        if (member.user.presence.game) 
            embed.addField('Seu status no momento', stripIndents`**> Nome:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
}