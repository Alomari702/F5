const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async() => {
var server = "514041053544972299"; // ايدي السررفر
var channel = "514041054132043780";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , Klads Spam , ')
    },305);
})

client.login("توكن حسآبك");