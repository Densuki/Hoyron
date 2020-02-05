const request = require('node-superfetch');
const Discord = require('discord.js');

module.exports = {
    name: 'tradutor',
    aliases: ["translate", "traduzir", "tr"],
    description: 'traduzir uma sequência ou corpo de texto específico de um idioma escolhido para um idioma desejado.',
    usage: '<text> <idioma alvo> <idioma desejado>',
    list(arr, conj = 'and') {
		const len = arr.length;
		return `${arr.slice(0, -1).join(', ')}${len > 1 ? `${len > 2 ? ',' : ''} ${conj} ` : ''}${arr.slice(-1)}`;
	},
    async run (client, config, message, args) {
		const filter = res => {
			return res.author.id === message.author.id;
		};

		let text, target, base = null;

		await message.reply('Que texto ou mensagem você gostaria de traduzir? (responda a esta pergunta em 30 segundos)')
			.then(async () => {
				await message.channel.awaitMessages(filter, {
					max: 500,
					time: 30000,
				})
				.then(collected => {
					text = collected.first().content;
				})
				.catch(() => {
					return message.channel.send('Você não escreveu nenhum texto');
				});
			});

		await message.reply(`Para qual idioma você gostaria de traduzir? Ou... ${this.list(Object.keys(config.translate), 'ou')}.\n(responda a esta pergunta em 10 segundos)`)
			.then(async () => {
				await message.channel.awaitMessages(filter, {
					max: 3,
					time: 10000,
				})
				.then(collected => {
					target = collected.first().content.toLowerCase();
				})
				.catch(() => {
					return message.channel.send('Você não escreveu nada');
				});
			});

		if (config.translate[target] || Object.keys(config.translate).find(key => config.translate[key].toLowerCase() === target)) console.log(target);
		else return message.author.send(`inválido, digite ${this.list(Object.keys(config.translate), 'ou')}.`);

		await message.reply(`Qual idioma você gostaria de usar como base? Ou... ${this.list(Object.keys(config.translate), 'ou')}.\n(responda a esta pergunta em 10 segundos)`)
			.then(async () => {
				await message.channel.awaitMessages(filter, {
					max: 3,
					time: 10000,
				})
				.then(collected => {
					base = collected.first().content.toLowerCase();
				})
				.catch(() => {
					return message.channel.send('Você não escreveu nada');
				});
			});

		if (config.translate[base] || Object.keys(config.translate).find(key => config.translate[key].toLowerCase() === base)) console.log(base);
		else return message.author.send(`inválido, digite ${this.list(Object.keys(config.translate), 'ou')}.`);

		try {
			const { body } = await request
				.get('https://translate.yandex.net/api/v1.5/tr.json/translate')
				.query({
					key: config.yandex_key,
					text,
					lang: base ? `${base}-${target}` : target,
				});
            const lang = body.lang.split('-');
            
            var logo = "https://imgur.com/pgQnTtD.png";
            const embed = new Discord.RichEmbed()
				.setColor(0xFF0000)
				.setFooter('WariansForce! and Dollars © 2019', logo)
				.addField(`❯ de: ${config.translate[lang[0]]}`, text)
				.addField(`❯ para: ${config.translate[lang[1]]}`, body.text[0]);
			
				return message.channel.send(embed);
		} catch (err) {
			return message.reply(`Oh não, ocorreu um erro: \`${err.message}\`. Tente mais tarde!`);
		}
    },
};