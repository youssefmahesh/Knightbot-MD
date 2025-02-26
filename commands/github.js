async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 KnightBot MD*

*📂 GitHub Repository:*
https://github.com/mruniquehacker/Knightbot-MD

*📢 Official Channel:*
https://youtube.com/@mr_unique_hacker

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '0029Vb2ZhRF77qVbEkhgqv25@newsletter',
                    newsletterName: 'KnightBot MD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 