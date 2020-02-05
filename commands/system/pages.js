const { RichEmbed, Attachment} = require("discord.js");

module.exports = {
    name: "pages",
    category: "test",
    aliases: ["pagina", "página", "page", "pages"],
    description: "comando para executar as páginas do menu",

    run: async (client, message, args, tools) => {
{//TESTE 1

        // let pages = ['Página 1', 'Página 2'];
        // let page = 1;

        // const embed = new RichEmbed()
        // .setColor("#ab0dcf")
        // .setFooter(`Página ${page} de ${pages.length}`)
        // .setDescription(pages[page-1])

        // message.channel.send(embed).then(msg => {
        //     msg.react.name('◀️').then(r =>{
        //     msg.react.name('▶️')

        //     const anteriorFiltro = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;
        //     const proximoFiltro = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;

        //     const anterior = msg.createReactionCollector(anteriorFiltro, {time: 60000});
        //     const proximo = msg.createReactionCollector(proximoFiltro, {time: 60000});

        //     anterior.on('collect', r => {
        //         if (page === 1) return;
        //         page--;
        //         embed.setDescription(pages[page-1]);
        //         embed.setFooter(`Página ${page} de ${pages.length}`);
        //         msg.edit(embed)
        //     })
        //     proximo.on('collect', r => {
        //         if (page === pages.length) return;
        //         page++;
        //         embed.setDescription(pages[page-1]);
        //         embed.setFooter(`Página ${page} de ${pages.length}`);
        //         msg.edit(embed)
        //     })

        // }) //| ◀ | ▶ | ❌ | ⏩ | ⏪ | ⏹ | ▶️ | ◀️ | 🌐 | ✅ | 
        //     // msg.react.name('❌').then(r =>{ 


        // });
    }
    
    }
}