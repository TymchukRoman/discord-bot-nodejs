const Discord = require("discord.js");
const mongoose = require("mongoose");
require('dotenv').config();
const config = require("./config.json");
const commands = require("./commands/commands_router");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = "!";

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("error", err => {
    console.log("Error: ", err)
})
mongoose.connection.on("connected", (err, res) => {
    console.log("Mongoose is connected")
})

client.on("messageCreate", function (message) {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    console.log(command);
    switch (command) {
        case "ping": {
            commands.ping(message);
            break;
        }
        case "sum": {
            commands.sum(message, args);
            break;
        }
        case "wtb": {
            commands.wtb(message, args);
            break;
        }
        default: {
            break;
        }
    }
});

client.login(config.BOT_TOKEN);

