const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("```Aqui será dado uma amostra do que tem na economia do servidor.```\n\n**PREÇOS RELACIONADOS AOS ITENS TINKER's! Este artigo será dividido em algumas partes.**\nDigite `%tinkers` que mostrarei os preços e tabela relacionadas à ela.");
      return;
    }

    let precosEmbed = new Discord.RichEmbed()
    .setDescription("**Olá!** *Use os comandos em seu devido local.*\n\n:rocket: **EpicMC Network**")
    .setColor("#5F04B4") //ROXO
    .addField(":heartpulse: **| Miniature Heart |**",":heart: Red = 450c\n:yellow_heart: Yellow = 900c\n:green_heart: Green = 1.800c")
    .addField("**================**","Empty Canister = 80c\nRed Heart Canister = 530c\nYellow Heart Canister = 1.060c\nGreen Heart Canister = 2.120c\nKnapsack = 108c")
    .addField(":shield: **| Armaduras |**","================")
    .addField("**__| Wooden SET |__**","Helmet = 10c\nChestplate = 16c\nLeggings = 14c\nBoots = 8c\n\n(**__Total = 48c__**)")
    .addField("**================**","**================**")
    .addField("**__| Traveller's SET |__**","Googles = 36c\nVest = 60c\nWings = 262c\nGloves = 24c\nBoots = 48c\nBelt = 72c\n\n(**__Total = 502c__**)")
    .addField(":gift: **| Micélios |**","**================**")
    .addField(":bento: **| Jerky's |**",":cow: Beef =  4c\n:chicken: Chicken = 4c\n:pig: Bacon = 4c\n:sheep: Mutton = 4c\n:fish: Fish = 10c\n<:kkkkk:511639841646313492> Monster = 2c")
    .addField("**================**","Jeweled Apple = 70c\nNecrotic Bone = 100c\nSlime Soil = 8c\nGraveyard Soil = 10c\nSilky Jewel = 151c\nSilky Cloth = 34c\nBall of Glue = 200c\nBall of Moss = 50c\nLava Crystal = 1.500c\nSlime Sappling = 50c\nSlime Crystal (Green) = 22c\nSlime Mud (Green) = 17.5c\nSlime Mud (Blue) = 35c\nSlime Crystal (Blue) = 40c\nPaper stack = 12c\nBlank Cast = 16c\nClear Glass = 4c\nRough Brownstone = 13c")
    .addField(":warning:  **Avisos**","**Calma! Que ainda tem mais!**")
    .addField("**Essa não é a única lista deste mod.**","**================**")
    .addField("**|__:gem: ingotstinkers | :fire: fornalhatinkers |\n|:pick: ferramentastinkers | :crossed_swords: armastinkers__|**","**__sempre será atualizada, fique de olho!__**");

    //message.channel.send(precosEmbed);

    let economychannel = message.guild.channels.find(`name`, "comandos");
    //Nome do canal (acho que ele cria o canal 🤔)
    if(!economychannel) return message.channel.send("não foi possível encontrar o canal de comandos. Cria,  Rué");


    message.delete().catch(O_o=>{});
    economychannel.send(precosEmbed);

}

module.exports.help = {
  name:"tinkers"
}
