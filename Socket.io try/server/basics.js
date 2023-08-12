const express=require("express");
const socketio=require("socket.io");

const app=express();

app.use(express.static(__dirname + "/../client"));

const expressServer=app.listen(8000);

const io=socketio(expressServer);//we are sending the http server to socket.io same as we did in native web sockets
io.on("connection",(socket)=>{console.log(socket.id);
       socket.emit("messageFromServer",{data:"welcome to my server"});
       socket.on("messageFromClient",(data)=>{console.log(data)})});





