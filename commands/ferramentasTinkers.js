const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("```Aqui será dado uma amostra do que tem na economia do servidor.```\n\n**PREÇOS RELACIONADOS AOS ITENS TINKER's! Este artigo foi dividido em algumas partes.**\nDigite `%tinkers help` que mostrarei os preços e tabela relacionadas à ela.");
      return;
    }

    let precosEmbed = new Discord.RichEmbed()
    .setDescription("Qualquer ferramenta do tinkers **[Pickaxe, Axe, Lumber e por aí vai]**\n\n:rocket: **EpicMC Network**")
    .setColor("#5F04B4") //ROXO
    .addField("**Pequena Descrição**","`Os valores das ferramentas depende exclusivamente do material e da quantidade que a mesma fora a ser usado. Além disso, cada ferramenta tem um valor inicial que será adicionado juntamente ao valor do material.`")
    .addField("Exemplo: pickaxe de Ferro.","Pickaxe 1 + binding 0.5 + Tool Rod 0.5\nSupondo que seu valor inicial seja 800c, logo ficaria:\nPickaxe de ferro = 16 + 16 + 800\nPickaxe de ferro = 832c")
    .addField("**__OBS: Como o Guard e o Rod são 0.5 , some ambos para que der equivalente\na 1 ingot. Ou seja, 0.5 + 0.5 = 1.__**","================")
    .addField("**__Tool Station__**","Pickaxe = **[Valor do material]** + 800c\nAxe = [Valor do material] + 500c\nshovel = [Valor do material] + 500c\nMattock = [Valor do material] + 1.000c\nFrying Pan = [Valor do material] + 100c\nBattle Sign = [Valor do material] + 100c")
    .addField("**__Tool Forge__**","Hammer = [Valor do material] + 3.200c\nLumber = [Valor do material] + 2.200c\nEscavator = [Valor do material] + 2.200c\nScythe = [Valor do material] + 2.200c");

    //message.channel.send(precosEmbed);

    let economychannel = message.guild.channels.find(`name`, "comandos");
    //Nome do canal (acho que ele cria o canal 🤔)
    if(!economychannel) return message.channel.send("não foi possível encontrar o canal de comandos. Cria,  Rué");


    message.delete().catch(O_o=>{});
    economychannel.send(precosEmbed);

}

module.exports.help = {
  name:"ferramentastinkers"
}
