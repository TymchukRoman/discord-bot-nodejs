module.exports = (message) => {
    message.reply("Hello world", { fetchReply: true })
        .then(() => {
            const filter = m => true;
            const collector = message.channel.createMessageCollector({ filter, time: 10000 });

            collector.on('collect', m => {
                console.log(`Collected ${m.content}`);
            });

            collector.on('end', collected => {
                message.channel.send(collected.reduce((acc, m) => { return acc + String(m) }, ""));
                console.log(`Collected ${collected.size} items`);
            });
        });
}