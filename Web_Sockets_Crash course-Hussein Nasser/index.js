const http=require("http");
const WebSocketServer=require("websocket").server

const httpserver=http.createServer((req,res)=>{
    console.log("we have received a request");
})



let connection=null;
const websocket=new WebSocketServer({"httpServer":httpserver});//handshake part

websocket.on("request",request=>{

    connection=request.accept(null,request.origin);//this request is a socket connection i think

    connection.on("open",()=>{console.log("Open !")});

    connection.on("close",()=>{console.log("Close !")});

    
    connection.on("message",message=>{
        console.log(`Message Received from client ${message.utf8Data}`)
    });
})

httpserver.listen(8081,()=>{
    console.log("My server is listening on port 8081")
})
