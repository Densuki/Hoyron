const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Informações da Guilda")
      .setColor("#5F04B4") //ROXO
      .setThumbnail(sicon)
      .addField("Nome da Guilda", message.guild.name)
      .addField("Criada em", message.guild.createdAt)
      .addField("Você se juntou", message.member.joinedAt)
      .addField("Total de Membros", message.guild.memberCount)

      return message.channel.send(serverembed).then(msg => {msg.delete(9000)});
}

module.exports.help = {
  name:"guildinfo"
}
