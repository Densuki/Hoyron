const { Collection, RichEmbed, Attachment } = require("discord.js");
const rm = require('discord.js-reaction-menu');

module.exports = {
    name: "aspects",
    category: "games",
    aliases: ["aspect", "aspecto", "aspectos"],
    usage: "[basta executar o comando]",
    description: "enviar um embed mostrando as combinações de aspectos",

    run: async (client, message, args) => {

        {//EMOJI
         var logo = "https://imgur.com/pgQnTtD.png";
        }

        {//Aspectos
         var Aer = '<:aer:684552733016981524>';
         var Aqua = '<:aqua:684552734292312067>';
         var Ignis = '<:ignis:684552737257684992>';
         var Ordo = '<:ordo:684552736942981189>';
         var Perditio = '<:perditio:684552732945809420>';
         var Terra = '<:terra:684552732514058258>';
         
         {//tier 1
            var Gelum = '<:gelum:684552733495263232>';
            var Lux = '<:lux:684552737299759155>';
            var Motus = '<:motus:684552737299759158>';
            var Permutatio = '<:permutatio:684552732622979137>';
            var Potentia = '<:potentia:684552732769648643>';
            var Tempestas = '<:tempestas:684552735403671582>';
            var Vacuos = '<:vacuos:684552733893984312>';
            var Venenum = '<:venenum:684552733726212122>';
            var Victus = '<:victus:684552734212489263>';
            var Vitreus = '<:vitreus:684552733507977267>';
        }
        {//tier 2
            var Bestia = '<:bestia:684552733872881684>';
            var Fames = '<:fames:684552733646520571>';
            var Herba = '<:herba:684552737223868466>';
            var Iter = '<:iter:684552737110622239>';
            var Limus = '<:limus:684552736859226159>';
            var Metallum = '<:metallum:684552734263083008>';
            var Mortuus = '<:mortuus:684552737270267914>';
            var Praecantatio = '<:praecantatio:684552733638000642>';
            var Sano = '<:sano:684552733491068956>';
            var Tenebrae = '<:tenebrae:684552735319785484>';
            var Vinculum = '<:vinculum:684552733906436127>';
            var Volatus = '<:volatus:684552733755179014>';
        }
        {//tier 3
            var Alienis = '<:alienis:684552734581588022>';
            var Arbor = '<:arbor:684552734522867718>';
            var Auram = '<:auram:684552735349014558>';
            var Corpus = '<:corpus:684552733357113535>';
            var Exanimis = '<:exanimis:684552732782362641>';
            var Spiritus = '<:spiritus:684552732807266378>';
            var Vitium = '<:vitium:684552734099111980>';
        }
        {//tier 4
            var Cognitio = '<:cognitio:684552733877075985> ';
            var Sensus = '<:sensus:684552733474291788> ';
        }
        {//tier 5
            var Humanus = '<:humanus:684552733956898860> ';
        }
        {//tier 6
            var Instrumentum = '<:instrumentum:684552737223868416> ';
            var Lucrum = '<:lucrum:684552734552358963> ';
            var Messis = '<:messis:684552734350901306> ';
            var Perfodio = '<:perfodio:684552734350770234> ';
        }
        {//tier 7
            var Fabrico = '<:fabrico:684552732987883567> ';
            var Machina = '<:machina:684552734187192350>';
            var Meto = '<:meto:684552734292312140> ';
            var Pannus = '<:pannus:684552734363746327> ';
            var Telum = '<:telum:684552733377822727> ';
            var Tutamen = '<:tutamen:684552734434656334>';
        }
    }
        
        

    new rm.menu(message.channel, message.author.id, [
    Page1 = new RichEmbed()
        .setAuthor("Thaumcraft 4")
        .setTitle("Menu")
        .setColor("#ab0dcf")
        .setThumbnail('https://imgur.com/XdofbAb.png') //ícone 
        .setDescription(`
        O que você imagina quando ouve a palavra Magia?
        Você imagina rituais sangrentos em altares de sacrifício? Isso não parece mágica, não é?\n
        Você imagina se tornar um vampiro imortal ou um poderoso lobisomem e se ajudar com inúmeras poções sobrepujadas em batalhas? Bem, na verdade não.\n
        Está operando flores misteriosas, coletando mana e usando-o para abrir o portal na dimensão dos elfos? Provavelmente não.
        Bem, se sim, o que você provavelmente imagina?`) //ele seta obrigatoriamente em cima, a baixo do título
        .addBlankField()
        .addField(`**> Vantagem #1**`,
        `
        Criando vários feitiços para lutar, viajar, minerar etc.
        Fazendo alquimia para criar itens mágicos.`)
        .addField(`**> Vantagem #2**`,
        `
        Descobrir o conhecimento oculto dos antigos e descobrir grandes relíquias do passado, repletas de conhecimentos detalhados.
        Criando poderosas varinhas personalizáveis com habilidades diferentes.`)
        .addField(`**> Vantagem #3**`,
        `
        Interagir com outras criaturas mágicas, trocar com eles por itens exclusivos ou lutar com eles em sua dimensão e até em outras dimensões.`)
        .addField(`**> Vantagem #4**`,
        `
        Lutar contra chefes poderosos com habilidades únicas, que tornam a luta difícil, interessante e agradável ao mesmo tempo.`)
        .addBlankField()
        .addField(`Viu as vantagems de usar o Thaumcraft?`, `**Thaumcraft** tem tudo!`)
        .setImage('https://imgur.com/6pRFw8B.png')
        .setTimestamp() //Horário que o comando foi usado
        //notas de rodapé
        .setFooter('WariansForce! and Dollars • © Todos os direitos reservados.', logo),

    Page2 = new RichEmbed()
        .setAuthor("Thaumcraft 4")
        .setTitle("Página #1")
        .setColor("#ab0dcf")
        .setThumbnail('https://imgur.com/iWS2sr4.png')
        .setDescription(`Tier 1`)
        .addField('**> Aer + Ignis\n= Lux**', `**${Aer} + ${Ignis} = ${Lux}**`, true)
        .addField('**> Ignis + Ordo\n= Gelum**', `**${Ignis} + ${Ordo} = ${Gelum}**`, true)
        .addField('**> Aer + Ordo\n= Motus**', `**${Aer} + ${Ordo} = ${Motus}**`, true)
        .addField('**> Ordo + Perditio\n= Permutatio**', `**${Ordo} + ${Perditio} = ${Permutatio}**`, true)
        .addField('**> Ignis + Ordo\n= Potentia**', `${Ignis} + ${Ordo} = ${Potentia}`, true)
        .addField('**> Aer + Aqua\n= Tempestas**', `${Aer} + ${Aqua} = ${Tempestas}`, true)
        .addField('**> Aer + Perditio\n= Vacuos**', `${Aer} + ${Perditio} = ${Vacuos}`, true)
        .addField('**> Aqua + Perditio\n= Venenum**', `${Aqua} + ${Perditio} = ${Venenum}`, true)
        .addField('**> Aqua + Terra\n= Victus**', `${Aqua} + ${Terra}= ${Victus}`, true)
        .addField('**> Ordo + Terra\n= Vitreus**', `${Ordo} + ${Terra} = ${Vitreus}`, true)
        //${} + ${} = ${}
        .addBlankField()
        .setTimestamp()
        .setFooter('WariansForce! and Dollars • © Todos os direitos reservados.', logo),
           
    Page3 = new RichEmbed()
        .setAuthor("Thaumcraft 4")
        .setTitle("Página #2")
        .setColor("#ab0dcf")
        .setThumbnail('https://imgur.com/iWS2sr4.png')
        .setDescription(`Tier 2`)
        .addField('**> Motus + Victus\n= Bestia**', `${Motus} + ${Victus} = ${Bestia}`, true)
        .addField('**> Vacuos + Victus\n= Fames**', `${Vacuos} + ${Victus} = ${Fames}`, true)
        .addField('**> Terra + Victus\n= Herba**', `${Terra} + ${Victus} = ${Herba}`, true)
        .addField('**> Motus + Terra\n= Iter**', `${Motus} + ${Terra} = ${Iter}`, true)
        .addField('**> Aqua + Victus\n= Limus**', `${Aqua} + ${Victus} = ${Limus}`, true)
        .addField('**> Terra + Vitreus\n = Metallum**', `${Terra} + ${Vitreus} = ${Metallum}`, true)
        .addField('**> Perditio + Victus\n = Mortuus**', `${Perditio} + ${Victus} = ${Mortuus}`, true)
        .addField('**> Potentia + Vacuos\n = Praecantatio**', `${Potentia} + ${Vacuos} = ${Praecantatio}`, true)
        .addField('**> Ordo + Victus\n = Sano**', `${Ordo} + ${Victus} = ${Sano}`, true)
        .addField('**> Lux + Vacuos\n = Tenebrae**', `${Lux} + ${Vacuos} = ${Tenebrae}`, true)
        .addField('**> Motus + Perditio\n = Vinculum**', `${Motus} + ${Perditio} = ${Vinculum}`, true)
        .addField('**> Aer + Motus\n = Volatus**', `${Aer} + ${Motus} = ${Volatus}`, true)
        .addBlankField()
        .setTimestamp()
        .setFooter('WariansForce! and Dollars • © Todos os direitos reservados.', logo),

        Page4 = new RichEmbed()
        .setAuthor("Thaumcraft 4")
        .setTitle("Página #3")
        .setColor("#ab0dcf")
        .setThumbnail('https://imgur.com/iWS2sr4.png')
        .setDescription(`Tier 3`)
        .addField('**> Tenebrae + Vacuos\n = Alienis**', `${Tenebrae} + ${Vacuos} = ${Alienis}`, true)
        .addField('**> Aer + Herba\n = Arbor**', `${Aer} + ${Herba} = ${Arbor}`, true)
        .addField('**> Aer + Praecantatio\n = Auram**', `${Aer} + ${Praecantatio} = ${Auram}`, true)
        .addField('**> Bestia + Mortuus\n = Corpus**', `${Bestia} + ${Mortuus} = ${Corpus}`, true)
        .addField('**> Mortuus + Motus\n = Exanimis**', `${Mortuus} + ${Motus} = ${Exanimis}`, true)
        .addField('**> Mortuus + Victus\n = Spiritus**', `${Mortuus} + ${Victus} = ${Spiritus}`, true)
        .addField('**> Perditio + Praecantatio\n = Vitium**', `${Perditio} + ${Praecantatio} = ${Vitium}`, true) 
        .addBlankField()
        .setTimestamp()
        .setFooter('WariansForce! and Dollars • © Todos os direitos reservados.X', logo),

        Page5 = new RichEmbed()
        .setAuthor("Thaumcraft 4")
        .setTitle("Página #4")
        .setColor("#ab0dcf")
        .setThumbnail('https://imgur.com/iWS2sr4.png')
        .setDescription(`Tier 4 & 5`)
        .addField('**> Ignis + Spiritus\n = Cognitio**', `${Ignis} + ${Spiritus} = ${Cognitio}`, true)
        .addField('**> Aer + Spiritus\n = Sensus**', `${Aer} + ${Spiritus} = ${Sensus}`, true)
        //.addBlankField()
        .addField('*-------------------*', '*-------------------*')
        //.addField('**> Tier 5**', `*-------------------*`)
        .addField('**> Bestia + Cognitio\n = Humanus**', `${Bestia} + ${Cognitio} = ${Humanus}`, true)
        .addBlankField()
        .setTimestamp()
        .setFooter('WariansForce! and Dollars • © Todos os direitos reservados.', logo),

        Page6 = new RichEmbed()
        .setAuthor("Thaumcraft 4")
        .setTitle("Página #5")
        .setColor("#ab0dcf")
        .setThumbnail('https://imgur.com/iWS2sr4.png')
        .setDescription(`Tier 6`)
        .addField('**> Humanus + Ordo\n = Instrumentum**', `${Humanus} + ${Ordo} = ${Instrumentum}`, true)
        .addField('**> Fames + Humanus\n = Lucrum**', `${Fames} + ${Humanus} = ${Lucrum}`, true)
        .addField('**> Herba + Humanus\n = Messis**', `${Herba} + ${Humanus} = ${Messis}`, true)
        .addField('**> Humanus + Terra\n = Perfodio**', `${Humanus} + ${Terra} = ${Perfodio}`, true)
        .addBlankField()
        .setTimestamp()
        .setFooter('WariansForce! and Dollars • © Todos os direitos reservados.', logo),

        Page8 = new RichEmbed()
        .setAuthor("Thaumcraft 4")
        .setTitle("Página #7")
        .setColor("#ab0dcf")
        .setThumbnail('https://imgur.com/iWS2sr4.png')
        .setDescription(`Tier 7`)
        .addField('**> Humanus + Instrumentum\n = Fabrico**', `${Humanus} + ${Instrumentum} = ${Fabrico}`, true)
        .addField('**> Instrumentum + Motus\n = Machina**', `${Instrumentum} + ${Motus} = ${Machina}`, true)
        .addField('**> Instrumentum + Messis\n = Meto**', `${Instrumentum} + ${Messis} = ${Meto}`, true)
        .addField('**> Bestia + Instrumentum\n = Pannus**', `${Bestia} + ${Instrumentum} = ${Pannus}`, true)
        .addField('**> Instrumentum + Ignis\n = Telum**', `${Instrumentum} + ${Ignis} = ${Telum}`, true)
        .addField('**> Instrumentum + Terra \n = Tutamen**', `${Instrumentum} + ${Terra} = ${Tutamen}`, true)
        .addBlankField()
        .setTimestamp()
        .setFooter('WariansForce! and Dollars • © Todos os direitos reservados.', logo)
        
     ]);

    }
}