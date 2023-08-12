on server side do : 
npm i websocket; 
and run the code on debugger adding breakpoints on request.accept() and on end of websocket.on block ending
run debugger and then connect websockets from client and step in to code manually using debuuger and do connection.send()



on client  or on browser open dev tools and do this on console:
let ws=new WebSocket("ws://localhost:8080");
ws.onmessage=(message)=>{console.log(`message from Server: ${message.data}`)};
ws.send("heyyyyy am from client") //for sending message to server
