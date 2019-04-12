var express = require('express');
var app = express();
var io = require('socket.io')();

const port = process.env.PORT || 3000;

//tell express where our static files are
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const server = app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
io.attach(server);

// socket.io chat app stuff to follow

io.on('connection', function(socket){

  console.log('a user has connected', socket);
  socket.emit('connected', {socketID: `${socket.id}`, message: 'new connection'});

  //listen for an incoming message from anyone connected to the app

  socket.on('chat message', function(msg){

    // send the message to everyone connected to the app
    console.log('message: ', msg, 'socket:', socket.id);
    io.emit('chat message', {id: `${socket.id}`, message: msg});

  })

  socket.on('disconnect', function(){

      console.log(this.rooms);

  });

});
