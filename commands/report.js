const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("use: %report <user> <motivo>\n\n exemplo: `%report @zayron Por ser um humano perfeito!`").then(msg => msg.delete(5000));
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("http://prntscr.com/jpmc6o Não foi possível encontrar o usuário.").then(msg => msg.delete(5000));
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("```Reports```")
    .setColor("#5F04B4") //ROXO

    .addField("```Usuário Reportado```", `${rUser} com ID: ${rUser.id}`)
    .addField("```Reportado por```", `${message.author} com ID: ${message.author.id}`)
    .addField("```Canal```", message.channel)
    .addField("```Horário```", message.createdAt)
    .addField("```Motivos```", reason);

    //message.channel.send(reportEmbed);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    //Nome do canal (acho que ele cria o canal 🤔)
    if(!reportschannel) return message.channel.send("http://prntscr.com/jpmc6o não foi possível encontrar o canal de relatórios|Reports.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name:"report"
}
