const { RichEmbed } = require('discord.js');
const { embedColor } = require('../config');
const { teams } = require('../data.json');
const { noBotPerms } = require('../utils/errors');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return noBotPerms(message, 'EMBED_LINKS');
    // list
    let list = args[0];

    if (teams[list] === undefined) return message.channel.send('This list does not exist!');
    
    let listForm = teams[args[0]].toString().replace(/,/g, '\n\n');

    const displayEmbed = new RichEmbed()
        .setTitle('To-do list for ' + args[0])
        .setDescription(listForm)
        .setColor(embedColor)
        .setFooter('Made with <3 by Aidan Din (00100000#9491)')
        .setTimestamp();
    message.channel.send(displayEmbed);
};

exports.help = {
    name: 'display',
    aliases: [''],
    description: 'Display a to-do list.',
    usage: 'display <list>'
};