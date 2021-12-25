const Discord = require("discord.js");
const config = require("./config.json");
const commands = require("./commands/commands_router");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = "!";

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
        default: { 
            break;
        }
    }
});

try {
    client.login(config.BOT_TOKEN);
} catch (e) {
    console.log("Errors when starting: ", JSON.stringify(e));
} finally {
    console.log("Bot started")
}

