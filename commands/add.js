const { prefix } = require('../config');
const { teams } = require('../data.json');
const { noBotPerms } = require('../utils/errors');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return noBotPerms(message, 'EMBED_LINKS');
    // list
    let list = args[0];

    if (teams[list] === undefined) return message.channel.send('This list does not exist!');
    // add to list
    let item = message.content.slice(9);
    if (!item) return message.channel.send('You can\'t add nothing to a list!');
    teams[list].push(item);
    message.channel.send('Added \"' + item + '\" to ' + list + '.');
};

exports.help = {
    name: 'add',
    aliases: [''],
    description: 'Add an item to a list.',
    usage: 'add <list> <item>'
};