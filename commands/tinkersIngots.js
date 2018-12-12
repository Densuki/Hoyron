const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("```Aqui será dado uma amostra do que tem na economia do servidor.```\n\n**PREÇOS RELACIONADOS AOS ITENS TINKER's! Este artigo foi dividido em algumas partes.**\nDigite `%tinkers help` que mostrarei os preços e tabela relacionadas à ela.");
      return;
    }

    let precosEmbed = new Discord.RichEmbed()
    .setDescription("**Olá!** *Use os comandos em seu devido local.*\n\n:rocket: **EpicMC Network**")
    .setColor("#5F04B4") //ROXO
    .addField(":fire: **|Lingotes|**","================")
    .addField("**|__Ingot__|**","Nickel | Ferrous = 16c\nCopper = 12c\nBronze = 48c\nTin = 12c\nAluminium = 20c\nAluminum Brass = 36c\nAlumite = 38c\nSteel= 28c\nCobalt = 30c\nArdite = 30c\nManyullyn = 60c\nPig Iron = 120c")
    .addField("**|__Block__|**","Block Solid of Ender = 120c\nNickel | Ferrous = 144c\nCopper = 108c\nBronze = 432c\nTin = 108c\nAluminium = 180c\nAluminum Brass = 324c\nAlumite = 342c\nSteel = 252c\nCobalt = 270c\nArdite = 270c\nManyullyn = 540c\nPig Iron = 1.080c")
    .addField("================","**================**")
    .addField("**|__ExtraTiC__|**","Fairy Ingot = 50c\nPokefennium Ingot = 50c\nRedAurum Ingot = 500c\nDrulloy Ingot = 500c");

    //message.channel.send(precosEmbed);

    let economychannel = message.guild.channels.find(`name`, "comandos");
    //Nome do canal (acho que ele cria o canal 🤔)
    if(!economychannel) return message.channel.send("não foi possível encontrar o canal de comandos. Cria,  Rué");


    message.delete().catch(O_o=>{});
    economychannel.send(precosEmbed);

}

module.exports.help = {
  name:"ingotstinkers"
}
