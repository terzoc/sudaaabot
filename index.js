const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();
var prefix = "+"


client.on('ready', () => {
    client.user.setActivity('with Vsause | +help')
    console.log('Ready!');
});
client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command){
    case 'ping' :
        message.channel.send('Dong!');
    break;
    case 'dong':
        message.channel.send("https://youtu.be/OxRMyPsLtTk");
    break;
    case 'hey' :
        message.channel.send('vsauce, michael here');
    break;
    case 'kick':
    const taggedUser = message.mentions.users.first();

    message.channel.send(`You wanted to kick: ${taggedUser.username} but i cant figure out how to make this bot do that.`);
    // // Assuming we mention someone in the message, this will return the user
    // // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    // const user = message.mentions.users.first();
    // // If we have a user mentioned
    // if (user) {
    //   // Now we get the member from the user
    //   const member = message.guild.member(user);
    //   // If the member is in the guild
    //   if (member) {
    //     /**
    //      * Kick the member
    //      * Make sure you run this on a member, not a user!
    //      * There are big differences between a user and a member
    //      */
    //     member.kick('Optional reason that will display in the audit logs').then(() => {
    //       // We let the message author know we were able to kick the person
    //       message.reply(`Successfully kicked ${user.tag}`);
    //     }).catch(err => {
    //       // An error happened
    //       // This is generally due to the bot not being able to kick the member,
    //       // either due to missing permissions or role hierarchy
    //       message.reply('I was unable to kick the member');
    //       // Log the error
    //       console.error(err);
    //     });
    //   } else {
    //     // The mentioned user isn't in this guild
    //     message.reply('That user isn\'t in this guild!');
    //   }
    // // Otherwise, if no user was mentioned
    // } else {
    //   message.reply('You didn\'t mention the user to kick!');
    // }
    break;
    case 'join' :
        if(message.member.voiceChannel){
            message.member.voiceChannel.join()
            .then (connection =>{
                message.channel.send('joined');
            });
        }else{
            message.channel.send('you must be in a voice channel to do this');
        }

    break;

    case 'math' :
    if(message.member.voiceChannel){
        message.member.voiceChannel.join()
        .then (connection =>{
            const dispatcher = connection.playFile('C:/Users/corvin/Desktop/bot2/math.mp3')
        });
    }else{
        message.channel.send('you must be in a voice channel to do this');
    }
    break;
    
    case 'leave' :
    if(message.guild.voiceConnection){
        message.guild.voiceConnection.disconnect();
        message.channel.send('bye bye :wave:')
    }else{
        message.channel.send('no')
    }
    break;
    case 'nfl' :
    if(message.member.voiceChannel){
        message.member.voiceChannel.join()
        .then (connection =>{
            const dispatcher = connection.playFile('C:/Users/corvin/Desktop/bot2/nfl.mp3')
        });
    }else{
        message.channel.send('you must be in a voice channel to do this');
    }
    break;
    
    case 'fortnite' :
    if(message.member.voiceChannel){
        message.member.voiceChannel.join()
        .then (connection =>{
            const dispatcher = connection.playFile('C:/Users/corvin/Desktop/bot2/fortnitedance.mp3')
        });
    }else{
        message.channel.send('you must be in a voice channel to do this');
    }
    break;
    case 'ali-a' :
    if(message.member.voiceChannel){
        message.member.voiceChannel.join()
        .then (connection =>{
            const dispatcher = connection.playFile('C:/Users/corvin/Desktop/bot2/alia.mp3')
        });
    }else{
        message.channel.send('you must be in a voice channel to do this');
    }
    break;
    case 'cr.com' :
    if(message.member.voiceChannel){
        message.member.voiceChannel.join()
        .then (connection =>{
            const dispatcher = connection.playFile('C:/Users/corvin/Desktop/bot2/crcom.mp4')
        });
    }else{
        message.channel.send('you must be in a voice channel to do this');
    }
    break;
    case 'shrek' :
    if(message.member.voiceChannel){
        message.member.voiceChannel.join()
        .then (connection =>{
            const dispatcher = connection.playFile('C:/Users/corvin/Desktop/bot2/shrek.mp4')
        });
    }else{
        message.channel.send('you must be in a voice channel to do this');
    }
    break;
    case 'help' :
    message.channel.send('prefix is +')
    message.channel.send('shrek - plays the whole shrek movie')
    message.channel.send('ping - dong')
    message.channel.send('dong - sends you dong')
    message.channel.send('hey - u know what')
    message.channel.send('kick - use as follows +kick @expaple')
    message.channel.send('join - joins')
    message.channel.send('leave - leaves')
    message.channel.send('math - plays math')
    message.channel.send('nfl - plays nfl earrape')
    message.channel.send('fortnite - plays fornite dance earrape')
    message.channel.send('ali-a - plays ali-a earrape')
    message.channel.send('cr.com - plays credit report.com baby')
    break;
}
});

client.login(token);