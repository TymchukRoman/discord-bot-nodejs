const commands = require("../commands/commands_router");

module.exports = (message, prefix) => {
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
        case "playyt": {
            commands.playYt(message, args);
            break;
        }
        case "getonl": {
            commands.getonl(message);
            break;
        }
        case "collector": {
            commands.collector(message);
            break;
        }
        default: {
            break;
        }
    }
}