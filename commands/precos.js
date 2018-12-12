const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //%report @ned Esta é a razão (Reação?)


    if (args[0] == "help"){
      message.reply("```Aqui será dado uma amostra do que tem na economia do servidor. Todos os comandos irá para o canal de comandos.```");
      return;
    }
//metion = message.mentions.users.first();
//message.author.send
//<@USER>
//client.users.get("name", "USERNAMEHERE").id;
//<%@ID%>
//@name
//metion = message.author.send;

    let precosEmbed = new Discord.RichEmbed()
    .setDescription("**Olá!** *Use os comandos em seu devido local.* \n\n **digite um dos comandos abaixo para entrar na tabela de preços que deseja:** \n\n :rocket: **EpicMC Network** \n\n **|__vanilla | ~~applied~~ | tinkers | ~~draconic~~ | ~~ic2~~ | ~~thermal~~ | ~~factory~~ | ~~ender~~__|**\n*Qualquer coisa, só usar* ``%comando + help. Ex: %vanilla Help.``")
    .setColor("#5F04B4") //ROXO
    .addField(":exclamation: **Esteja ciente do PREFIX do BOT!** **O PREFIX deste artigo é o padrão.**", "**:warning:  Avisos**")
    //.addField("**:warning:  Avisos**")
    .addField("**Essa é a economia da Network. Caso você queira vender com preços maiores é por sua conta.** **Porém, qualquer preço que esteja a baixo do valor que foi proposto em alguma desta lista, o usuário será punido!**", "**Essa lista sempre será atualizada, fique de olho.**")
    //.addField("**Essa lista sempre será atualizada, fique de olho.**")
    .addField(":calendar_spiral: **As listas serão atualizadas.**", "**FIQUE ATENTO(A)!**");
    //.addField("**FIQUE ATENTO(A)!**");

    //message.channel.send(precosEmbed);

    let economychannel = message.guild.channels.find(`name`, "comandos");
    //Nome do canal (acho que ele cria o canal 🤔)
    if(!economychannel) return message.channel.send("não foi possível encontrar o canal de comandos. Cria,  Rué");


    message.delete().catch(O_o=>{});
    economychannel.send(precosEmbed);

}

module.exports.help = {
  name:"preços"
}
