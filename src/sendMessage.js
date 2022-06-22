import Insta from '@androz2091/insta.js';


export function loginInstagram(username, password){

    const client = new Insta.Client();

    client.on('connected', () => {
        console.log(`Logged in as ${client.user.username}`);
    });

    client.on('messageCreate', (message) => {
        if (message.author.id === client.user.id) return

        message.markSeen();

        if (message.content === '!ping') {
            message.reply('!pong');
        }
    });

    client.login(username, password);

}

