const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const express = require('express');
const { response } = require('express');
const client = new Client();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
client.on('qr', (qr) => {
  // Generate and scan this code with your phone
  console.log('QR RECEIVED', qr);
  qr.size
  qrcode.generate(qr, { small: true })
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', msg => {
  if (msg.body == 'ivo sayang ais') {
    msg.reply('I LOVE U IVO');
  } if (msg.body == 'ris') {
    msg.reply('???');
  } if (msg.body == 'Y') {
    msg.reply('Terimakasih sudah melakukan update data diri anda di system HRIS');
  } if (msg.body == 'y') {
    msg.reply('Terimakasih sudah melakukan update data diri anda di system HRIS');
  } if (msg.body == 'T') {
    msg.reply('Terimakasih sudah melakukan konfirmasi');
  } if (msg.body == 't') {
    msg.reply('Terimakasih sudah melakukan konfirmasi');
  }

});

app.get('/msg/:id/:msg', (req, res) => {
  const number = req.params.id;
  const msg = "Hallo!!! \nApakah anda ingin mengupdate data anda? \nReplay 'Y' untuk menkonfirmasi data anda, \nReplay 'T' untuk mengcancel data anda \n\n whatsapp notif by faris";

  client.sendMessage(number, msg)
    .then(response => {
      res.status(200).json({
        status: true,
        message: "Message successfully sent to " + phone,
        response: response
      });
      // console.log(`Message successfully sent to ${number}`);
    }).catch(err => {
      res.status(500).json({
        status: false,
        response: err
      })
    })
})

client.initialize();

app.listen(3000, () => {
  console.log("Server Running Live on Port : " + 3000);
});
