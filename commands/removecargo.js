const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("https://cdn.discordapp.com/attachments/452142750268129283/452196351149867021/giphaay.gif Você não pode fazer isso!.");
  if (args[0] == "help"){
    message.reply("use: `%removerole <user> <role>` **OBS:Não mencione o cargo, isso é! Não use o @ + nome do cargo**").then(msg => msg.delete(5000));
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("http://prntscr.com/jpmc6o Não foi possível encontrar o usuário.").then(msg => msg.delete(5000));
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("http://prntscr.com/jpo761 Especifique o cargo!").then(msg => msg.delete(5000));
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("http://prntscr.com/jpmc6o Não foi possível encontrar esse Cargo.").then(msg => msg.delete(5000));

  if(!rMember.roles.has(gRole.id)) return message.reply("http://prntscr.com/jpmc6o Não existe nenhum cargo com esse nome.").then(msg => msg.delete(5000));
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Você perdeu o cargo ${gRole.name}.`)
  }catch(e){
    message.channel.send(`É uma pena <@${rMember.id}>, Nós removemos ${gRole.name} de você. Olhe no seu privado para mais informações`)
  }
}

module.exports.help = {
  name: "removerole"
}
