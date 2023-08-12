const http=require("http");


//though we can use native web sockets but here we will use ws package
const ws=require("ws");//is a third party module for node js

const server=http.createServer((req,res)=>{
    res.end("hey am active ")
})


const Wss=new ws.WebSocketServer({server:server});
Wss.on("headers",(headers,req)=>{console.log(headers);console.log(req)});
Wss.on("connection",(websocket,req)=>{console.log(websocket);console.log(req)
                    websocket.send("heyy")})
//but on client side we have to do ws.onmessage=(message)=>{console.log(message.data)}
//to print data or look in network section message to see message                   


server.listen(8000,()=>{console.log("am working on port 8080")});
