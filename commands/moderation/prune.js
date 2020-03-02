const { RichEmbed } = require("discord.js");

module.exports = {
    name: "purge",
    aliases: ["prune", "clear", "apagar"],
    category: "moderation",
    description: "um comando que permite excluir as mensagens",
    usage: "<input> + number",
    run: (client, message, args) => {
	message.delete();		
  //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não pode fazer isso! Você não possui permissões para executar esse comando!");
  if (!message.member.roles.some(r=>["Linked", "STAFF", "Staff"].includes(r.name))) return message.reply("Você não pode fazer isso! Você não possui permissões para executar esse comando!");
  if(!args[0]) return message.channel.send("Nain!\n Esqueceu de adicionar um número!").then(msg => msg.delete(10000));});
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Mensagens ${args[0]} foram apagadas.`).then(msg => msg.delete(300));});
  //message.channel.send(``).then(msg => msg.delete(60));
   }  
}
