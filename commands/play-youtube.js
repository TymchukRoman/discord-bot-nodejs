const ytdl = require('ytdl-core');
const {
    AudioPlayerStatus,
    StreamType,
    createAudioPlayer,
    createAudioResource,
    joinVoiceChannel,
} = require('@discordjs/voice');

module.exports = (message, args) => {
    console.log("st1");
    console.log(message.member.voice.channel.id, message.guildId, args[0], message.guild.voiceAdapterCreator)


    const connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guildId,
        adapterCreator: message.guild.voiceAdapterCreator,
    });

    const stream = ytdl(args[0], { filter: 'audioonly' });
    const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
    const player = createAudioPlayer();

    player.play(resource);
    connection.subscribe(player);

    player.on(AudioPlayerStatus.Idle, () => connection.destroy());
}