const { teams } = require('../data.json');
const { noBotPerms } = require('../utils/errors');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return noBotPerms(message, 'EMBED_LINKS');

    let list = args[0];
    let position = parseInt(args[1]) - 1;

    if (teams[list] === undefined) return message.channel.send('This list does not exist!');
    if (teams[list][position] === undefined) return message.channel.send('There\'s nothing this position of this list!');

    teams[list].splice(position, 1);
    message.channel.send('Removed item from ' + list + ' in position ' + (position + 1) + '.');
};

exports.help = {
    name: 'remove',
    aliases: [],
    description: 'Remove an item from a position of a list, starting from 0',
    usage: 'remove <list> <item #>'
};