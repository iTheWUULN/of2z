const { Client, Collection, MessageButton, MessageActionRow, MessageSelectMenu,MessageEmbed } = require('discord.js');
const client = (global.client = new Client({ intents: 32767}));
const Settings = require('./source/Configurations/Client_Settings');

client.commands = new Collection();
client.aliases = new Collection();

require("./source/Utilities/eventHandler");
require("./source/Utilities/commandHandler");
require('./source/Utilities/functions')(client);

client.login(Settings.botToken)
.then(() => console.log(`Volterin ${client.user.username} adlı botu ismiyle giriş yaptı`))
.catch((err) => console.log(`[CLIENT] bot aktif değil. Sebep: ${err}`));

client.on("messageCreate", message => {
    if (message.content.toLowerCase() === "sa") {
      message.reply("as hg");
    }
  });
  client.on('messageCreate', async message => {
    if (message.author.bot || !message.member) return;

    if (message.member.permissions.has('ADMINISTRATOR')) return;

    if (reklamnieyapıon(message.content)) {
        await message.delete();
        await message.channel.send(`${message.author}, lütfen link paylaşmayın!`);
    }
});
function reklamnieyapıon(message) {
    const link = ['http://', 'https://', 'www.'];

    for (const keyword of link) {
        if (message.includes(keyword)) {
            return true;
        }
    }
    return false;
}



const prefix = '.';
const fs = require('fs');


const kufurDosyaYolu = 'küfür.txt';
const kufurListesi = fs.readFileSync(kufurDosyaYolu, 'utf8').split('\n').map(word => word.trim());

function kufurKontrol(message) {
    const kelimeler = message.content.toLowerCase().split(' ');

    for (const kelime of kelimeler) {
        if (kufurListesi.includes(kelime)) {
            message.delete();
            message.channel.send('Lütfen küfür etmeyin!');
            return;
        }
    }
}

client.on('messageCreate', message => {
    if (message.author.bot) return;
    kufurKontrol(message);
});
client.on("messageCreate", message => {
    if (message.content.toLowerCase() === "reis") {
      message.reply("Buyrun");
    }
});

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log("Server Online because of Axo Coder ✅!!");
});





