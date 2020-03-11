const { RichEmbed, Attachment } = require("discord.js");
const math = require("mathjs");

module.exports = {
    name: "calculadora",
    aliases: ["calc", "calcular"],
    category: "usual",
    description: "o nome fala por si próprio.",
    usage: "``<valor1> <operação> <valor2>``\n\n**> Operações:**\n**Adição:** ``+``, **Subtração:** ``-``, **Multiplicação:** ``*``, **Divisão:** ``/``.\n\n**> Valores especiais**\n**Pi:** ``pi``, **Cm**(pondo após o número): ``cm``, **Inches**(polegadas): ``inches``",
    run: (client, message, args) => {
        var logo = "https://imgur.com/pgQnTtD.png";
        const icon = new Attachment("./assets/Imagens/Outros/calc.png", "calc.png");
        
        if (!args[0]) return message.channel.send('Por favor insira o primeiro valor a calcular.');

        let resp;
        try {
            resp = math.eval(args.join (' '));
        } catch (e) {
            return message.channel.send('Desculpe, mas insira um valor válido.');
        }

        const embed = new RichEmbed()
            .attachFile(icon)
            .setThumbnail('attachment://calc.png')
            .setColor('#2cd388')
            .setTitle('Calculo')
            .addField('Valores', `\`\`\`js\n${args.join('')}\`\`\``)
            .addField('Resultado', `\`\`\`js\n${resp}\`\`\``)
            .setTimestamp()
            .setFooter('WariansForce! and Dollars • © Todos os direitos reservados.', logo)
        message.channel.send(embed);            
    }
}