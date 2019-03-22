const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
//websocket library
const socketIO  = require('socket.io')(server);

const LISTEN_PORT = 8080;
//set default directory for http requests
app.use( express.static(__dirname +'/public') );

//http routes
app.get('/index',function (req, res){
    res.sendFile(__dirname +'/public/index.html');
});
app.get('/controller',function (req, res){
    res.sendFile(__dirname +'/public/controller.html');
});

socketIO.on('connection',function(socket){
    //listen for connection event from client then do some stuff
    console.log(socket.id + ' connected!');
    
    socket.on('disconnect',function(){
        console.log(socket.id +' disconnected');
    });
    socket.on('disconnect',function(){
        console.log(socket.id +' disconnected');
    });
    //up events
    
    //left events
    socket.on('R1left',function(){
        console.log("row1 left event");
        socketIO.sockets.emit('rotate_row',{row: 1, direction: 1});
    });    
    socket.on('R2left',function(){
        console.log("row2 left event");
        socketIO.sockets.emit('rotate_row',{row: 2, direction: 1});
    }); 
    socket.on('R3left',function(){
        console.log("row3 left event");
        socketIO.sockets.emit('rotate_row',{row: 3, direction: 1});
    }); 
    socket.on('R4left',function(){
        console.log("row4 left event");
        socketIO.sockets.emit('rotate_row',{row: 4, direction: 1});
    }); 
    socket.on('R5left',function(){
        console.log("row5 left event");
        socketIO.sockets.emit('rotate_row',{row: 5, direction: 1});
    }); 
    //right events
    socket.on('R1right',function(){
        console.log("row1 left event");
        socketIO.sockets.emit('rotate_row',{row: 1, direction: -1});
    });    
    socket.on('R2right',function(){
        console.log("row2 left event");
        socketIO.sockets.emit('rotate_row',{row: 2, direction: -1});
    }); 
    socket.on('R3right',function(){
        console.log("row3 left event");
        socketIO.sockets.emit('rotate_row',{row: 3, direction: -1});
    });  
    socket.on('R4right',function(){
        console.log("row4 left event");
        socketIO.sockets.emit('rotate_row',{row: 4, direction: -1});
    });  
    socket.on('R5right',function(){
        console.log("row5 left event");
        socketIO.sockets.emit('rotate_row',{row: 5, direction: -1});
    });     
});
    
//start server
server.listen(LISTEN_PORT);
console.log('Listening on port:'+LISTEN_PORT);