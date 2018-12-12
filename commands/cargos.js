const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
//==============================================================
//PERMISSÕES
//==============================================================

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("https://cdn.discordapp.com/attachments/452142750268129283/452196351149867021/giphaay.gif Você não pode fazer isso!.").then(msg => msg.delete(5000));
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("https://cdn.discordapp.com/attachments/452142750268129283/452196351149867021/giphaay.gif Você não pode fazer isso!.").then(msg => msg.delete(5000));

//==============================================================
//EMBED
//==============================================================
let cargoEmbed = new Discord.RichEmbed()
.setDescription("**CARGOS**\n\n**Escolha o RANK que será proposto!**")
.setColor("#5F04B4") //ROXO
.addField("RANKS:", "⭐ = BOT MANAGER\n🎯 = MOD ")
//==============================================================
//REAÇÕES EMBED
//==============================================================
message.channel.send(cargoEmbed).then(msg => { msg.delete(9000)
   msg.react("⭐")
   msg.react("🎯")

})
//==============================================================
//CARGOS POR REAÇÕES
//==============================================================



//==============================================================
//REAÇÕES
//==============================================================

// message.channel.send("SÓ REAJE").then(msg => {
//   msg.react("⭐")
//   msg.react("🎯")
// })

//==============================================================
//CARGOS POR REAÇÕES | CORPO
//==============================================================
bot.on("messageReactionAdd", function(reaction, user) {
  if (reaction.emoji == "⭐") {
    let msg = reaction.message
      msg.guild.member(user.id).addRole("430856355101016065").then(console.log("Cargo Adicionado")).catch(console.error);
    }
  if (reaction.emoji == "🎯") {
    let msg = reaction.message
      msg.guild.member(user.id).addRole("440282436916740119").then(console.log("Cargo Adicionado")).catch(console.error);
    }
})

bot.on("messageReactionRemove", function(reaction, user) {
  if (reaction.emoji == "⭐") {
    let msg = reaction.message
      msg.guild.member(user.id).removeRole("430856355101016065").then(console.log("Cargo Removido")).catch(console.error);
    }
  if (reaction.emoji == "🎯") {
    let msg = reaction.message
      msg.guild.member(user.id).removeRole("440282436916740119").then(console.log("Cargo Removido")).catch(console.error);
    }
})
}

module.exports.help = {
  name:"cargos"
}
