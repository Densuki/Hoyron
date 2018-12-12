const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   let commandsEmbed = new Discord.RichEmbed()
   .setDescription("```Comandos```")

   .setColor("#5F04B4") //ROXO

   .addField("```COMANDOS ALEATÓRIOS```", "oi, doggo e react");

message.channel.send(commandsEmbed);

   let helpEmbed = new Discord.RichEmbed()
   .setDescription("```Help Menu```")
   .setColor("#5F04B4") //ROXO

   .addField("```Comandos para Membros```", "pay, coins, rank, help, guildinfo, botinfo e report");

message.channel.send(helpEmbed);

   if(message.member.hasPermission("MANAGE_MESSAGES")){
   let staffEmbed = new Discord.RichEmbed()
   .setDescription("```Mod help Menu```")
   .setColor("#5F04B4") //ROXO

   .addField("```Comandos para STAFF```", "prefix, clear, kick, ban, mute, say, addrole, removerole, cargos [EM TEST]  ");

message.channel.send(staffEmbed);

message.reply("https://cdn.discordapp.com/attachments/452142750268129283/452196351149867021/giphaay.gif Você não pode fazer isso!.").then(msg => msg.delete(100000))

//try{
//  await message.author.send(staffEmbed);
//  message.react("🤔");
//}catch(e)

}

}

module.exports.help = {
  name:"tasukete"
}
