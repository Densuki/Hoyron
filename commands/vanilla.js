const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("```Aqui será dado uma amostra do que tem na economia do servidor.```\n\n**PREÇOS RELACIONADOS AOS ITENS VANILLA!**\nDigite `%vanilla` que mostrarei os preços relacionadas à ela.");
      return;
    }

    let precosEmbed = new Discord.RichEmbed()
    .setDescription("**Olá!** *Use os comandos em seu devido local.*\n\n:rocket: **EpicMC Network**")
    .setColor("#5F04B4") //ROXO
    .addField("**:fireworks: | Primordiais**","Wood [Qualquer madeira] = 2c\nStick = 1c\nDirt = 1c\nCobblestone = 1c\nStone = 2c\nGravel = 1c\nSand = 1c\nClay = 2c\nIce = 2c\nCharcoal = 3c\nNetherrack = 2c\nSoul Sand = 3c")
    .addField("**:hammer_pick: | Itens**","Leather = 4c\nStrings = 2c\nWool = 8c")
    .addField("**:pick: | Minerais**","Coal = 5c\nIron Ingot = 8c\nGold Ingot = 10c\nRedstone = 8c\nLápis Lazuli = 15c\nDiamond = 15c\nEsmerald = 15c\nObsidian = 10c")
    .addField("**:gear: | Mecânicos**","Piston = 26c\nDropper = 15c\nDispenser = 22.5c")
    .addField("**:crossed_swords: | Armas**","Wooden Sword = 2.5c\nStone Sword = 4.5c\nIron Sword = 16c\nDiamond Sword = 30c\nGolden Sword = 20c\nBow = 7.5c")
    .addField("**:gift: | Micélio**","Human Head (Steve) = 10.000c\nZombie Head = 5.000c\nSkelecton Head = 2.500c\nEnderman Head = 8.000c\nWither Skelecton Head = 10.000c\nNether Star = 1.000c\nBlaze Rod = 300c\nBlaze Powder = 150c\nEnder Pearl = 30c\nGhast tear 80c\nEye Of Ender =  35c\nNether Wart = 4c\nSlime = 4c\nApple = 10c");

    //message.channel.send(precosEmbed);

    let economychannel = message.guild.channels.find(`name`, "comandos");
    //Nome do canal (acho que ele cria o canal 🤔)
    if(!economychannel) return message.channel.send("não foi possível encontrar o canal de comandos. Cria,  Rué");


    message.delete().catch(O_o=>{});
    economychannel.send(precosEmbed);

}

module.exports.help = {
  name:"vanilla"
}
