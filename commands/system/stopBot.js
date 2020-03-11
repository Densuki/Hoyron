const { RichEmbed } = require("discord.js");

module.exports = {
    name: "stopbot",
    category: "system",
    aliases: ["stop","parar", "shutdown"],
    usage: "[basta executar o comando]",
    description: "desligará o bot em X tempo",

    run: async (client, message, args) => {
                await message.delete().catch(O_o=>{});

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não pode fazer isso! Você não possui permissões para executar esse comando!");
//MODELO 1
{
        //             message.reply('Serei desligado agora.\n'
        //                     + 'Confirme com um polegar para cima ou negue com um polegar para baixo.');

        //             // Reacts so the user only have to click the emojis
        //             message.react('👍').then(r => {
        //                     message.react('👎');
        //             });

        //             // First argument is a filter function
        //             message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
        //                     { max: 1, time: 30000 }).then(collected => {
        //                             if (collected.first().emoji.name == '👍') {
        //                                     message.reply('Estou desligando...');
        //                                     client.destroy();
        //                             }
        //                             else
        //                                     message.reply('Não desligarei mais!\nA operação cancelada.');
        //                     }).catch(() => {
        //                             message.reply('Se não houver nenhuma reação após 30 segundos, a operação será cancelada');
        //                     });

        //             //break;
        //     }  
        // }
}

        {
            var Loading = '<a:Loading:684156225801289782>';
            var Online = '<:online:672476651082219541>';
            var Ausente = '<:ausente:672476706011086850>';
            var Ocupado = '<:ocupado:672476650998333470>';
            var Offline = '<:offline:672476650474176520>';

        } 
        if (!message.member.roles.some(r=>["⊛", "Fundador", "Dono", "Owner", "Sub-Dono", "Subdono"].includes(r.name))) return message.reply("Você não pode fazer isso! Você não possui permissões para executar esse comando!");
        //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não pode fazer isso! Você não possui permissões para executar esse comando!");

        await message.delete().catch(O_o=>{});   

      message.channel.send(`> **${Loading} ${Ocupado} Estou desligando...**`).then(m => { 
          message.channel.send(`> **${Offline} Desligado! ${Offline}**`)
          console.log('Desligado!')
        client.destroy();
             });
    }
}