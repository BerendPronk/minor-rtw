const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
	socket.on('chat message', msg => {
		io.emit('chat message', msg);
	});
});

http.listen(3000, () => {
	console.log('Lift-off!');
});
