const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("https://cdn.discordapp.com/attachments/452142750268129283/452196351149867021/giphaay.gif Você não pode fazer isso! Você não possui permissões para executar esse comando!");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Mensagens ${args[0]} foram vanidas.`).then(msg => msg.delete(300));
  //message.channel.send(``).then(msg => msg.delete(60));
});

}

module.exports.help = {
  name: "vanish"
}
