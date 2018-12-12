//==============================================================
//INFORMAÇÕES | IMPORT's
//==============================================================
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
//const highlight = require("node_modules/highlight.js/styles/github.css");
//const websocket = require(WebSocketPacketManager.js);
//const tokenfile = require("./token.json");
const token = process.env.token;
const fs = require("fs");
//test

const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();
let xp = require("./xp.json");
let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 30;
//==============================================================
//INFORMAÇÕES | EXPORT's
//==============================================================
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Não foi possível encontrar o(s) comando(s).");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} Carregado!`);
    bot.commands.set(props.help.name, props);
  });
});
//==============================================================
//RICK PRESENCE
//==============================================================

bot.on("ready", async () => {
  console.log(`${bot.user.username} Estar Online em ${bot.guilds.size} server(s)!`);

  bot.user.setActivity("As almas para o Lunik", {type: "PLAYING"}); //Nada🤔Mas meu prefix é % 😅

  //bot.user.setGame("on SourceCade!");

});
//==============================================================
//WELCOME
//==============================================================
bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} Entrou no servidor.`);

  let welcomechannel = member.guild.channels.find(`name`, "chat-principal");
  welcomechannel.send(`Seja Bem-Vindo ${member}. Não esqueça de ler as regras!`);
});
//==============================================================
//LEAVE
//==============================================================
bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} Saiu do servidor.`);

  let welcomechannel = member.guild.channels.find(`name`, "chat-principal");
  welcomechannel.send(`É uma pena que mais um de nossa tropa acabara de nos deixar. Nos vemos na próxima ${member}`);
});
//==============================================================
//Criação de Canais | Sala
//==============================================================

bot.on("ChannelCreate", async channel => {

  console.log(`${channel.name} Foi criado!`);

  let sChannel = channel.guild.channels.find(`name`, "general");
  sChannel.send(`${channel} Foi criado`);
});
//==============================================================
//Apagamento de Canais | Sala
//==============================================================

bot.on("ChannelDelete", async channel => {

  console.log(`${channel.name} Foi deletado!`);

  let sChannel = channel.guild.channels.find(`name`, "general");
  sChannel.send(`${channel.name} Foi deletado`);
});
//==============================================================
//PARA AS MENSAGENS FUNCIONAREM
//==============================================================
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
//==============================================================
//PREFIX
//==============================================================
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix

    };
  }
  //let prefix = prefixes[message.guild.id].prefixes;
  //console.log(prefix);
//==============================================================
//LEVEL UP
//==============================================================

//   let xpAdd = Math.floor(Math.random() * 1) + 2;
//   console.log(xpAdd);
//
//   if(!xp[message.author.id]){
//     xp[message.author.id] = {
//       xp: 0,
//       level: 1
//     };
//   }
//
//    let curxp = xp[message.author.id].xp;
//    let curlvl = xp[message.author.id].level;
//    let nxtLvl = xp[message.author.id].level * 600;
//    xp[message.author.id].xp = curxp + xpAdd;
//    if(nxtLvl <= xp[message.author.id].xp){
//      xp[message.author.id].level = curlvl + 1;
//      let lvlup = new Discord.RichEmbed()
//      .setTitle("🎉⬆️Rank Up!⬆️🌟")
//      .setColor(purple)
//      .addField("🎇Próximo Nível🎇", curlvl + 1)
//      .addField("⬆️⬆️", "🌟Use o comando `rank` para verificar seus STATUS!🌟");
//
//      message.channel.send(lvlup).then(msg => {msg.delete(100000)});
//    }
//    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
//      if(err) console.log(err)
// });

//==============================================================
//COOLDOWNS
//==============================================================

  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("Você tem que esperar 365 dias 60 minutos 60 segundos e 300 miléssimos para usar o comando novamente. Ou apenas 60 segundos u.u")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }

//==============================================================
//
//==============================================================
 let messageArray = message.content.split(" ");
 let cmd = messageArray[0];
 let args = messageArray.slice(1);

 let commandfile = bot.commands.get(cmd.slice(prefix.length));
 //let commandfile = bot.commands.get(cmd.slice);
 if(commandfile) commandfile.run(bot,message,args);

 setTimeout(() => {
   cooldown.delete(message.author.id)
 }, cdseconds * 1000)

});
//==============================================================
//MUSIC
//==============================================================

//==============================================================
//WELCOME | LEAVE
//==============================================================

//==============================================================
//PRO BOT FUNCIONAR
//==============================================================
//bot.login(botconfig.token);
//bot.login(tokenfile.token);
bot.login(token);
//==============================================================
//
//==============================================================
