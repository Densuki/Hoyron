const { RichEmbed } = require("discord.js");

module.exports = {
    name: "restartbot",
    category: "system",
    aliases: ["restart","reiniciar"],
    usage: "[basta executar o comando]",
    description: "reiniciará o bot em X tempo",

    run: async (client, message, args) => {  
        {
			//const token = process.env.token;
			var token = 'NDk0OTk0MTAwMzUzODkyMzcy.XgLpag.VPqHogO8l1af_vLJT3KxsiBcG9g';
            var Loading = '<a:Loading:684156225801289782>';
            var Online = '<:online:672476651082219541>';
            var Ausente = '<:ausente:672476706011086850>';
            var Ocupado = '<:ocupado:672476650998333470>';
            var Offline = '<:offline:672476650474176520>';

        } 
        if (!message.member.roles.some(r=>["⊛", "Fundador", "Dono", "Owner", "Sub-Dono", "Subdono"].includes(r.name))) return message.reply("Você não pode fazer isso! Você não possui permissões para executar esse comando!");
        //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não pode fazer isso! Você não possui permissões para executar esse comando!");

        await message.delete().catch(O_o=>{});   

      message.channel.send(`> **${Loading} ${Ocupado} Estou reiniciando...**`).then(m => { 
        client.destroy().then(() => {
            client.login(token).then(m => { setTimeout(() => {

                message.channel.send(`> **${Ausente} Religando...**`), 15000})}).then(m => { setTimeout(() => {
                    console.log('Reiniciado com sucesso!')
                    message.channel.send(`> ${Online} Agora estou online!**`), 15000})
             });
        });
      });
      //break;
    }
}
