const Discord = require("discord.js");
const mongoose = require("mongoose");
require('dotenv').config();
const config = require("./config.json");
const msg_router = require("./core/msg_router");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"] });
const prefix = process.env.PREFIX;

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
    msg_router(message, prefix);
});

client.login(config.BOT_TOKEN);

client.on('ready', () => {
    client.user.setUsername(process.env.NAME);
    // client.user.setAvatar(process.env.IMG_URL);
    client.user.setActivity('Codding on RUST', { type: 'COMPETING' });
    client.user.setStatus('dnd');
    console.log(`${client.user.tag} started`);
});

