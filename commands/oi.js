const Discord = require("discord.js");
//import hljs from 'highlight.js';
//import hljs from 'highlight.js/lib/highlight';
//import javascript from 'highlight.js/lib/languages/javascript';
//hljs.registerLanguage('javascript', javascript);
//import 'highlight.js/styles/github.css';

module.exports.run = async (bot, message, args) => {

//==============================================================
//MODELO DE MENSAGENS
//==============================================================
    //  message.delete().catch(O_o=>{});

      //return message.channel.send("Olá! Oi? Chamou?");
      return message.chanel.sendCode("fix","Olá! Oi? Chamou?");
}

module.exports.help = {
  name:"zayron"
}
