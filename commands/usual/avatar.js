const Discord = require('discord.js');
const { getMember } = require("../../functions.js");

module.exports = {
    name: 'avatar',
    description: 'exibir a imagem e o URL do avatar do usuário',
    usage: '<escolha o usuário>',
    run: (client, message, args) => { 
        {//Primeiro Modelo       
        // if (!message.mentions.users.size) {
        //     return message.channel.send(`Seu avatar: ${message.author.displayAvatarURL}`);
        // }

        // const avatarList = message.mentions.users.map(user => {
        //     return `avatar ${user.username}: ${user.displayAvatarURL}`;
        // });

        // // send the entire array of strings as a message
        // // by default, discord.js will `.join()` the array with `\n`
        //message.channel.send(avatarList);
        }
        const member = getMember(message, args.join(" "));
        let user = message.mentions.users.first();
        if(!user) user = message.author;

        //let color = message.member.displayHexColor;
        //if (color == '#000000') color = message.member.hoistRole.hexColor;
        var color = "#2cd388";
        var logo = "https://imgur.com/pgQnTtD.png";
        const embed = new Discord.RichEmbed()
                        //.setAuthor(`${ }`)
                        .setTitle(`${member.displayName}`)
                        .setImage(user.avatarURL)
                        .setColor(color)
                        .setTimestamp()
                        .setFooter('WariansForce! and Dollars © 2019', logo)
         message.channel.send({embed});
    },
};