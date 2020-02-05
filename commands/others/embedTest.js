const { RichEmbed, Attachment, Emoji } = require("discord.js");

module.exports = {
    name: "embedTest",
    aliases: ["embed"],
    category: "test",
    description: "comando de teste para Embed",
    run: (client, message, args) => {
                
        //const logo = new Attachment('./assets/Warians.png', 'Warians.png') //Diretório de imagem
        const Agnimon = new Attachment('./assets/Digimon/Digi-Espíritos/Digimons/Agnimon_Icon2.png', 'Agnimon.png')
        
        const embed = new RichEmbed()
        .setTitle("Testando Título") //Título
        //.setThumbnail(client.user.displayAvatarURL) //Ícone
        .attachFile(Agnimon)

        .setThumbnail('attachment://Agnimon.png') //Ícone
        //.setThumbnail('https://imgur.com/6SxAKAG') //Ícone 
        .setDescription("Testando Descrição") //Descrição

        .addField("**> Emoji:**", '<:Digimon:660509138530598935>', true)

        .addField("**> Spirit Item**", "<:Spirit_of_Fire_H:660512938955767825>", true) 

        .addBlankField()

        .addField("**> Spirit of Shining Item**", "<:Spirit_of_Shining_Fire_H:660512938993647626>", true)

        .addField("**> Attachment:**", "NONE", true)


        .setAuthor("Testando Autor") //Autor 
        .setColor("#ab0dcf") //cor ROXA
        .setTimestamp() //Horário

        .setFooter("Testando Rodapé", 'https://imgur.com/pgQnTtD.png') //Rodapé

        const collector = message.createReactionCollector((reaction, user) =>
        
        user.id === message.author.id &&
        reaction.emoji.name === "◀" ||
        reaction.emoji.name === "▶" ||
        reaction.emoji.name === "❌" 

    ).once("collect", reaction => {
        const chosen = reaction.emoji.name;
        if(chosen === "◀"){
            // Prev page
        }else if(chosen === "▶"){
            // Next page
        }else{
            // Stop navigating pages
        }  
    collector.stop();
    });
        
    
    message.channel.send(embed);
    {
        //.attachFiles(['../assets/discordjs.png'])
        //const attachment = new Attachment('https://puu.sh/DTwNj/a3f2281a71.gif', 'test.gif');
        //.setAuthor(message.author.username, message.author.displayAvatarURL) //Autor
        //.setThumbnail(client.user.displayAvatarURL) //Ícone
        } 
    
    }
}