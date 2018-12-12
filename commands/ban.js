const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%kick @daeshan para banir a pessoa
     if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("https://cdn.discordapp.com/attachments/452142750268129283/452196351149867021/giphaay.gif Você não pode fazer isso!").then(msg => msg.delete(5000));
     if (args[0] == "help"){
      message.reply("use: %ban <user> <motivo>");
      return;
    }
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!bUser) return message.channel.send("http://prntscr.com/jpmc6o Não consigo o encontrar usuário!").then(msg => msg.delete(5000));
      let bReason = args.join(" ").slice(22);

      if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("http://prntscr.com/jhraie Essa pessoa não pode ser banida!").then(msg => msg.delete(5000));

      let banEmbed = new Discord.RichEmbed()
      .setDescription("```Ban```")
      .setColor("#5F04B4")
      .addField("```Usuário Banido```", `${bUser} with ID ${bUser.id}`)
      .addField("```Foi banido por```", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("```Banido no canal```", message.channel)
      .addField("```Horário```", message.createdAt)
      .addField("```Motivos```", bReason);

      let incidentchannel = message.guild.channels.find(`name`, "reports");
      if(!incidentchannel) return message.channel.send("Não é possível encontrar o canal de logs.");

      message.guild.member(bUser).ban(bReason);
      message.delete().catch(O_o=>{});
      incidentchannel.send(banEmbed);

      return;
}

module.exports.help = {
  name:"ban"
}
