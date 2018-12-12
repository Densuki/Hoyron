const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%kick @daeshan para kickar a pessoa
     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("https://cdn.discordapp.com/attachments/452142750268129283/452196351149867021/giphaay.gif Você não pode fazer isso!").then(msg => msg.delete(5000));
     if (args[0] == "help"){
      message.reply("use: %kick <user> <motivo>");
      return;
    }
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("http://prntscr.com/jpmc6o Não consigo o encontrar usuário!").then(msg => msg.delete(5000));
      let kReason = args.join(" ").slice(22);

      if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("http://prntscr.com/jhraie Essa pessoa não pode ser kickada!").then(msg => msg.delete(5000));

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("```Kick```")
      .setColor("#5F04B4")
      .addField("```Usuário Kickado```", `${kUser} com ID ${kUser.id}`)
      .addField("```Foi Kickado por```", `<@${message.author.id}> com ID ${message.author.id}`)
      .addField("```Kickado no canal```", message.channel)
      .addField("```Horário```", message.createdAt)
      .addField("```Motivos```", kReason);

      let kickChannel = message.guild.channels.find(`name`, "reports");
      if(!kickChannel) return message.channel.send("Não é possível encontrar o canal de logs.");

      message.guild.member(kUser).kick(kReason);
      message.delete().catch(O_o=>{});
      kickChannel.send(kickEmbed);

      return;
}

module.exports.help = {
  name:"kick"
}
