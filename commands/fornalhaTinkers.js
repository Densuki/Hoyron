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
    .addField("**:fire: | Fornalha |**","================")
    .addField(":iphone: **|__Seared__|**","Grout = 4c\nSeared Brick (Overworld) = 8c\nSeared Brick (Nether) = 16c\nSeared Bricks (Overworld) = 32c\nSeared Bricks (Nether) = 64c\nSeared Cobblestone = 10c\nSeared Stone = 15c\n`[Slabs São 3x o preço delas]`\nSeared Window (Overworld) = 54c\nSeared Glass (Overworld) = 42c\nSeared Window (Nether) = 108c\nSeared Glass (Nether) = 84c")
    .addField("**================**","**================**")
    .addField(":earth_americas: **|__Overworld__|**","Smeltery Controller = 64c\nSmeltery Drain = 48c\n`[Slabs São 3x o preço delas]`\nSeared Faucet = 24c\nCasting Table =  56c\nCasting Basin = 56c\nCasting Channel = 40c\nSeared Tank = 66c")
    .addField("**================**","**================**")
    .addField(":boom: **|__Nether__|**","Smeltery Controller = 128\nSmeltery Drain = 96c\n`[Slabs São 3x o preço delas]`\nSeared Faucet = 48c\nCasting Table = 112c\nCasting Basin = 112c\nSeared Tank = 132c");

    //message.channel.send(precosEmbed);

    let economychannel = message.guild.channels.find(`name`, "comandos");
    //Nome do canal (acho que ele cria o canal 🤔)
    if(!economychannel) return message.channel.send("não foi possível encontrar o canal de comandos. Cria,  Rué");


    message.delete().catch(O_o=>{});
    economychannel.send(precosEmbed);

}

module.exports.help = {
  name:"fornalhatinkers"
}
