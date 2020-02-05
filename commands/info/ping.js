module.exports = {
    name: "ping",
    category: "info",
    description: "retorna o ping da latência e API",

    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 pinging...`);
        msg.edit(`🏓 Pong!\n
        A latência é de ${Math.floor(msg.createdAt - message.createdAt)}ms\n
        A latência da API é de ${Math.round(client.ping)}ms`);
    }
}