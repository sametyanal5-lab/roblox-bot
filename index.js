const Discord = require('discord.js');
const express = require('express');
const app = express();
const client = new Discord.Client({ intents: [32767] });

let oyunDurumu = "ACIK"; 

app.get('/durum', (req, res) => {
    res.send(oyunDurumu);
});

app.listen(3000, () => console.log("Sistem Aktif!"));

client.on('messageCreate', async (message) => {
    if (message.content === '!aktif et') {
        oyunDurumu = "KAPALI"; 
        message.reply("⛔ **SİSTEM AKTİF:** Oyun girişlere kapatıldı!");
    }
    if (message.content === '!pasif et') {
        oyunDurumu = "ACIK";
        message.reply("✅ **SİSTEM PASİF:** Oyun tekrar girişe açıldı!");
    }
});

client.login(process.env.BOT_TOKEN); // Şifreni buraya yazma, Render'a ekleyeceğiz
