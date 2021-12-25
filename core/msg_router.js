const commands = require("../commands/commands_router");

module.exports = (message) => {
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
}