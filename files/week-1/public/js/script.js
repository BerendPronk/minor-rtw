const socket = io();
const form = document.querySelector('form');
const input = document.querySelector('#m');
const chat = document.querySelector('#messages');

form.addEventListener('submit', function(event) {
	socket.emit('msg', input.value);
	input.value = '';

	event.preventDefault();
});

socket.on('msg', function(msg) {
	const li = document.createElement('li');

	li.innerText = msg;
	chat.appendChild(li);
});