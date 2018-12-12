const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //pay @isatisfied 59345

  if(!coins[message.author.id]){
    return message.reply("você não possui nenhuma moeda!")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0])

  if (!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 100
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[0]) return message.reply("Desculpe-me. Não há moedas suficientes");

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} tem dado ${pUser} ${args[1]} moedas.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
});

}

module.exports.help = {
  name:"pay"
}
