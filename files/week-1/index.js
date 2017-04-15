const express = require('express');
const path = require('path');
const httpServer = require('http').Server;
const socketio = require('socket.io');

const app = express();
const server = httpServer(app);
const io = socketio(server);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
	socket.on('msg', msg => {
		io.emit('msg', msg);
	});
});

server.listen(process.env.PORT || 5000, () => {
	console.log('Lift-off!');
});
