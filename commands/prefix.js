
const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("https://cdn.discordapp.com/attachments/452142750268129283/452196351149867021/giphaay.gif Você não pode fazer isso!.").then(msg => msg.delete(5000));
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: %prefix <prefixo desejado aqui>. Exemplo: `%prefix #`");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Definido!")
  .setDescription(`Definido como ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}
