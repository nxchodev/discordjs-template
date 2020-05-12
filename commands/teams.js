const { RichEmbed } = require('discord.js');
const { embedColor } = require('../config');
const { noBotPerms } = require('../utils/errors');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return noBotPerms(message, 'EMBED_LINKS');

    let teamEmbed = new RichEmbed()
        .setTitle('Teams and team keys')
        .addField('App', 'app', true)
        .addField('Awards', 'awa', true)
        .addField('CAD', 'cad', true)
        .addField('Competitions', 'com', true)
        .addField('Design and Building', 'des', true)
        .addField('Digital and Social Media', 'dig', true)
        .addField('Fundraising', 'fun', true)
        .addField('Outreach', 'out', true)
        .addField('Merchandising', 'mer', true)
        .addField('Programming', 'pro', true)
        .addField('Promotion and Spirit', 'pas', true)
        .addField('Safety', 'saf', true)
        .addField('Scouting/Strategy', 'sco', true)
        .setColor(embedColor)
        .setFooter('Made with <3 by Aidan Din (00100000#9491)')
        .setTimestamp();

    message.channel.send(teamEmbed);
};

exports.help = {
    name: 'teams',
    aliases: ['t'],
    description: 'All teams and team keys',
    usage: 'teams'
};