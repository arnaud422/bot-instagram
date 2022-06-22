import Insta from '@androz2091/insta.js';
import { readFileSync, writeFileSync } from 'fs';
import fs from 'fs/promises';

const DEFAULT_FILE = "./assets/message.json"
const MESSAGEPERSO_FILE = "./assets/messagePerso.json"
const MESSAGE_REC = "./message/message.json"

export async function loginInstagram(username, password){

    const client = new Insta.Client();

    client.on('connected', () => {
        console.log(`Logged in as ${client.user.username}`);
    });

    client.on('messageCreate', (message) => {
        if (message.author.id === client.user.id) return

        message.markSeen();
        if(message.content.toLocaleLowerCase() === "note perso"){
            const messagePerso = JSON.parse(readFileSync(MESSAGEPERSO_FILE))
            const messageForUser = messagePerso.find((author) => author.user === message.author.username)
            if(messageForUser === undefined) message.reply("Pas de message perso.")
            else message.reply(messageForUser.message)
        }
        else if(message.content.toLowerCase() === "comment va arnaud ?"){
            const data = JSON.parse(readFileSync(DEFAULT_FILE)) 
            message.reply(data.note);
        }
        else if (message.content) {
            const data = JSON.parse(readFileSync(DEFAULT_FILE)) 
            
            message.reply(data.messageBasic);
            message.reply(data.tache);
        }
    });

    client.login(username, password);
}
