const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("605140105048489986")
setInterval(function() {
channel.send("credits credits credits credits credits credits credits credits credits credits credits credits credits credits credits credits");
}, 30)
})

client.login(process.env.BOT_TOKEN);