const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', () => {
    console.log('Um usuário conectou');
})

aplicacao.use(express.static('public'));

servidorHttp.listen(1000);