const { RichEmbed, Attachment, Emoji } = require("discord.js");
const rm = require('discord.js-reaction-menu');
const Discord = require('discord.js');
module.exports = {
    name: "menuTest",
    category: "test",
    aliases: ["menu"],
    description: "comando de testes para Menu",

    run: async (client, message, args) => {


    {//PRIMEIRO TESTE
        // if (command === 'menu') {
        //     message.channel.send({file: '.assets/Aleatório/online.png'})
        //     .then(() => {
        //       message.channel.awaitMessages(response => response.content === 'next', {
        //         max: 1,
        //         time: 30000,
        //         errors: ['time'],
        //       })
        //       .then((collected) => {
        //           message.channel.send({file: '.assets/Aleatório/ocupado.png'});
        //         })
        //         .catch(() => {
        //           // Do something with error 
        //         });
        //     });
        // }        
        }

    {//SEGUNDO TESTE
    //     const collector = message.createReactionCollector((reaction, user) => 
    //     user.id === message.author.id &&
    //     reaction.emoji.name === "◀" ||
    //     reaction.emoji.name === "▶" ||
    //     reaction.emoji.name === "❌"
    // ).once("collect", reaction => {
    //     const chosen = reaction.emoji.name;
    //     if(chosen === "◀"){
    //         // Prev page
    //     }else if(chosen === "▶"){
    //         // Next page
    //     }else{
    //         // Stop navigating pages
    //     }
    //     collector.stop();
    // });
        }

    {//TERCEIRO TESTE
//https://www.npmjs.com/package/discord.js-reaction-menu
//INSTALAÇÃO: npm i discord.js-reaction-menu

//| ◀ | ▶ | ❌ | ⏩ | ⏪ | ⏹ | ▶️ | ◀️ | 🌐 | ✅ |  1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣

        //new rm.menu(message.channel, message.author.id, ['test', 'test2', 'test3'], 60000); //Modelo rápido e pronto.
        //new rm.menu(message.channel, message.author.id, ['Emoji Personalizado 1', 'Emoji Personalizado 2', 'Emoji Personalizado 3'], time = 60000, reactions = {first: '1️⃣', back: '2️⃣', next: '3️⃣', last: '4️⃣', stop: '5️⃣'}); //Modelo personalizado.

        //new rm.menu(message.channel, message.author.id, 
        //[new RichEmbed({title:'test'}), new RichEmbed({title:'test2'}),
        //new RichEmbed({title:'test3'}), new RichEmbed({title:'test4'}), new RichEmbed({title:'test5'})]); //Modelo por RichEmbed, rápido e pronto.

        //new rm.menu(channel = new Discord.TextChannel(), uid, pages = [], time = 120000, reactions = {first: '⏪', back: '◀', next: '▶', last: '⏩', stop: '⏹'})
        }

    }
}