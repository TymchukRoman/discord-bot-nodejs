module.exports = async (message) => {
    console.log(2)
    message.reply(`Dwarf ragul 1`);
    const users = await message.guild.members.fetch();
    console.log(users)
    users.then(fetchedMembers => {
        console.log(3)
        const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
        // Now you have a collection with all online member objects in the totalOnline variable
        message.reply(`There are currently ${totalOnline.size} members online in this guild!`);
    });
}