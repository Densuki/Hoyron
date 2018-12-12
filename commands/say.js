const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return;
//      if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "falar"
}
