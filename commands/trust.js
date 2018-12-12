const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("```Tudo relacionado ao comando TRUST.```\n**Basta executar** ``/trust + nome de quem queira dá permissão.``");
      return;
    }
    let trustEmbed = new Discord.RichEmbed()
    .setDescription("**Olá!** *Use os comandos em seu devido local.*\n\n :rocket: **EpicMC Network**")
    .setColor("#5F04B4") //ROXO
    .addField("```/trust #[CoFH]```","**para dar permissão ao** ``ThermalExpansion``")
    .addField("```/trust #[BuildCraft]```","**para dar permissão ao** ``BuildCraft``")
    .addField("```/trust #[IndustrialCraft]```","**para dar permissão ao** ``IndustrialCraft``");

    message.channel.send(trustEmbed);

    //let trustchannel = message.guild.channels.find(`name`, "comandos");
    //Nome do canal (acho que ele cria o canal 🤔)
    //if(!trustchannel) return message.channel.send("não foi possível encontrar o canal de comandos. Cria,  Rué");


    //message.delete().catch(O_o=>{});
    //economychannel.send(trustEmbed);

}

module.exports.help = {
  name:"trust"
}
