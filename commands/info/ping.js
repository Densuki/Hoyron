module.exports = {
    name: "ping",
    category: "info",
    description: "retorna o ping da latência e API",

    run: async (client, message, args) => {
        const msg = await message.channel.send(`<a:ThinkLoad:684156228217208960> **Calculando o Ping...**`).then(
        m => m.delete(10000));
        //msg.edit
        message.channel.send(`<a:Verification:684156238384463903> **Pong!**
        > A latência é de: **${Math.floor(msg.createdAt - message.createdAt)}ms**
        > A latência da API é de: **${Math.round(client.ping)}ms**`);
    }
}