//imports
const { Client, Collection, Discord } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const colors = require('colors');

const client = new Client({
    disableEveryone: true
})

// Coleções
const cooldowns = new Collection();
client.commands = new Collection();
client.aliases = new Collection();


{//Função de recarregar os comandos
// function loadCmds () {
// client.categories = fs.readdirSync("./commands/");

// delete require.cache[require.resolve(`./commands/${f}`)]
// }
// function emoji (id) {
//     return client.emojis.get(id).toString();
//}
}

//Constantes
const DonoID = '336311215099740160';

//Cores
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

{
    //Para privar os comandos a sua ID
 "ownerID"; "336311215099740160"
  }

  //if(message.author.id !== config.ownerID) return;
  //if(message.author.id !== config.DonoID) return;

config({
    path: __dirname + "/.env"
});

// Para rodar o command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Estou online!, meu nome é ${client.user.username}`.warn);
    console.log(`Tag = ${client.user.tag}`.info);
    console.log(`ID = ${client.user.id}`.info);

//==============================================================
//RICK PRESENCE
//==============================================================
    client.user.setPresence({
        status: "idle", //Online = Online | idle = Ausente | dnd = Ocupado.
        game: {
            name: "um jogo, pois cansei de ouvir a aquaryon falar",
            type: "PLAYING" //PLAYING = Jogando | LISTING = Ouvindo | WATCHING = Assistindo | STREAMING = Live.
        }
    })
});
//==============================================================
//PARA AS MENSAGENS FUNCIONAREM
//==============================================================
client.on("message", async message => {
    const prefix = "%"; //aparentemente o PREFIX do bot

    //console.log(`${message.author.username} falou: ${message.content}`); //SIMPLES LOG

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
//==============================================================
//COMANDOS TESTES
//==============================================================

//==============================================================
//BLACKLIST DE PALAVRAS
//==============================================================


{//COMANDO DE RELOAD
//==============================================================
// if (msg === 'reload') {
//     message.channel.send({embed: {description: "Todos os comandos foram carregados"}})
//     message.channel.send('Todos os comandos foram carregados')
//     loadCmds()
// }
}

});
//==============================================================
//PRO BOT FUNCIONAR
//==============================================================
client.login(token);