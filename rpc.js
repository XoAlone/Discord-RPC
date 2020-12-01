const RPC = require('discord-rpc');
const prompt = require('readline-sync');

const client = new RPC.Client({
    transport: 'ipc',
});

let clientId = prompt.question('What is the client ID of the bot? (MANDATORY)');
if (clientId === '') {
    return console.log('\x1b[31mInvalid client ID! Please try again and type a client ID!\x1b[0m');
};

let detail = prompt.question('What is the RPC detail that you want? (MANDATORY)');
if (detail === '') {
    return console.log('\x1b[31mInvalid client ID! Please try again and type a detail!\x1b[0m');
};

let state = prompt.question('What is the RPC state that you want? (MANDATORY)');
if (state === '') {
    return console.log('\x1b[31mInvalid client ID! Please try again and type a state!\x1b[0m');
};

let largeImg = prompt.question('What is the RPC large image that you want? (OPTIONAL)') || '';
let largeImgText = prompt.question('What is the RPC large image text that you want? (OPTIONAL)') || '';
let smallImg = prompt.question('What is the RPC small image that you want? (OPTIONAL)') || '';
let smallImgText = prompt.question('What is the RPC small image text that you want? (OPTIONAL)') || '';

client.on('ready', () => {
    client.setActivity({
        details: detail,
        state: state,
        largeImageKey: largeImg,
        largeImageText: largeImgText,
        smallImageKey: smallImg,
        smallImageText: smallImgText
    });

    console.log(`\x1b[32mRPC is active!\x1b[0m`);
});

client.login({
    clientId: clientId,
}).catch(err => {
  console.log(`An error has occured while trying to login using the client ID! ${err}`)
})