module.exports = (message) => {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.react('👍');
    message.channel.send(`Pong! ${timeTaken} delay. `);
} 