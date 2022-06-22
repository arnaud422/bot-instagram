import Insta from '@androz2091/insta.js';
import { readFileSync } from 'fs';
import fs from 'fs/promises';

const DEFAULT_FILE = "./assets/message.json"

export async function loginInstagram(username, password){

    const client = new Insta.Client();

    client.on('connected', () => {
        console.log(`Logged in as ${client.user.username}`);
    });

    client.on('messageCreate', (message) => {
        if (message.author.id === client.user.id) return

        message.markSeen();

        if (message.content) {
            const data = JSON.parse(readFileSync(DEFAULT_FILE)) 
            console.log(data)
            message.reply(data.messageBasic);
        }
    });

    client.login(username, password);

}

async function readFile(file){
    const isFileExist = await fileExist(file)
    if(!isFileExist){
        throw new Error("Le fichier de message n'a pas été trouvé")
    }

    const buffer = await fs.readFile(file);
    const json = buffer.toString();
    const data = parseJson(json)
    return data
}

async function fileExist(file){
    try{
        await fs.access(file)
        return true
    }catch(err){
        return false
    }
}
function parseJson(json){
    try{
        return JSON.parse(json)
    }catch(e){
        throw new Error("Invalid JSON")
    }
}