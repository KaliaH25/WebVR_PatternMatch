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
    socket.on('C1up',function(){
        console.log("col1 up event");
        socketIO.sockets.emit('rotate_column',{column: 1, direction: 1});
    });
    socket.on('C2up',function(){
        console.log("col2 up event");
        socketIO.sockets.emit('rotate_column',{column: 2, direction: 1});
    });
    socket.on('C3up',function(){
        console.log("col3 up event");
        socketIO.sockets.emit('rotate_column',{column: 3, direction: 1});
    });
    socket.on('C4up',function(){
        console.log("col4 up event");
        socketIO.sockets.emit('rotate_column',{column: 4, direction: -1});
    });
    socket.on('C5up',function(){
        console.log("col5 up event");
        socketIO.sockets.emit('rotate_column',{column: 5, direction: -1});
    });
    socket.on('C6up',function(){
        console.log("col6 up event");
        socketIO.sockets.emit('rotate_column',{column: 6, direction: -1});
    });
    //down events
    socket.on('C1down',function(){
        console.log("col1 down event");
        socketIO.sockets.emit('rotate_column',{column: 1, direction: -1});
    });
    socket.on('C2down',function(){
        console.log("col2 down event");
        socketIO.sockets.emit('rotate_column',{column: 2, direction: -1});
    });
    socket.on('C3down',function(){
        console.log("col3 down event");
        socketIO.sockets.emit('rotate_column',{column: 3, direction: -1});
    });
    socket.on('C4down',function(){
        console.log("col4 down event");
        socketIO.sockets.emit('rotate_column',{column: 4, direction: 1});
    });
    socket.on('C5down',function(){
        console.log("col5 down event");
        socketIO.sockets.emit('rotate_column',{column: 5, direction: 1});
    });
    socket.on('C6down',function(){
        console.log("col6 down event");
        socketIO.sockets.emit('rotate_column',{column: 6, direction: 1});
    });
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
});
    
//start server
server.listen(LISTEN_PORT);
console.log('Listening on port:'+LISTEN_PORT);