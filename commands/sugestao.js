const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("use: %sugestao seu nome + sua sugestão\n\n exemplo: `%sugestao @zayron para ser um STAFF!`");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Não foi possível encontrar o usuário.").then(msg => msg.delete(5000));
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("```Sugestões```")
    .setColor("#5F04B4") //ROXO

    .addField("```Usuário```", `${rUser} com ID: ${rUser.id}`)
    .addField("```Canal```", message.channel)
    .addField("```Horário```", message.createdAt)
    .addField("```Sugestão```", reason);

    //message.channel.send(reportEmbed);

    let reportschannel = message.guild.channels.find(`name`, "canal-de-sugestões");
    //Nome do canal (acho que ele cria o canal 🤔)
    if(!reportschannel) return message.channel.send("não foi possível encontrar o canal de sugestões.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name:"sugestao"
}
