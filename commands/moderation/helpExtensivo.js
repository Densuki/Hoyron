const { RichEmbed } = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["ajuda", "helper", "h"],
    category: "info",
    description: "para acessar a lista de comandos do BOT",
    usage: "[comando + nome]",
    run: (client, message, args) => {
// If there's an args found
        // Send the info of that command found
        // If no info found, return not found embed.
        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            // Otherwise send all the commands available
            // Without the cmd info
            return getAll(client, message);
        }
    }
}

function getAll(client, message) {
    const embed = new RichEmbed()
        .setColor("RANDOM")
        
    // Map all the commands
    // with the specific category
    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `- \`${cmd.name}\``)
            .join("\n");
    }

    // Map all the categories
    const info = client.categories
        .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);

    return message.channel.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
    const embed = new RichEmbed()
    var logo = "https://imgur.com/pgQnTtD.png";
    // Get the cmd by the name or alias
    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    
    let info = `Nenhuma informação encontrada para o comando **${input.toLowerCase()}**`;

    // If no cmd is found, send not found embed
    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info));
    }

    // Add all cmd info to the embed
    if (cmd.name) info = `**Nome do comando:**\n > ${cmd.name}`;
    if (cmd.aliases) info += `\n**Outros nomes para o comando:**\n > ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Descrição:**\n > ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usos:**\n > ${cmd.usage}`;
        embed.setFooter('⋙ Syntax: <> = necessário, [] = opcional ⋘\nWariansForce! and Dollars © 2019', logo);
    }

    return message.channel.send(embed.setColor("GREEN").setDescription(info));
}