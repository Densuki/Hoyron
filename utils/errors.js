const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Permissão insuficiente")
        .setColor(config.red)
        .addField("Permissão necessária", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Error")
        .addField(`${user} tem perms`, perms);

    message.channel.send(embed).then(m => m.delete(10000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Você não pode banir um bot.")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete(10000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Não foi possível encontrar esse usuário.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(10000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Por favor, forneça um motivo.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(10000));
}
