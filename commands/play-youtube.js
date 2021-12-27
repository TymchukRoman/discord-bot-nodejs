const ytdl = require('ytdl-core');
const {
    AudioPlayerStatus,
    StreamType,
    createAudioPlayer,
    createAudioResource,
    joinVoiceChannel,
} = require('@discordjs/voice');

module.exports = async (message, args) => {

    if (!message.member.voice.channel) {
        message.channel.send("Please, join the voice channel.");
        return null;
    }

    const connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guildId,
        adapterCreator: message.guild.voiceAdapterCreator,
    });

    const stream = ytdl(args[0], { filter: 'audioonly' });
    const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
    const player = createAudioPlayer();

    let info = await ytdl.getInfo(args[0]);

    console.log(info.videoDetails);

    message.channel.send(`Now playing ${info.videoDetails.title}`);
    player.play(resource);
    connection.subscribe(player);


    player.on(AudioPlayerStatus.Idle, () => connection.destroy());
}