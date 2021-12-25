const Test = require("../models/test");

module.exports = async (message, args) => {

    const msg = args.join(' ');
    const newtest = new Test({
        channel: message.channelId,
        msg,
        author: {
            id: message.author.id,
            username: message.author.username
        }
    })

    await newtest.save();

    message.reply(`Message saved: ${msg}`);
} 