const WebSocket = require("ws");
let results = {
  pizza: 0,
  pasta: 0,
};
const wsServer = new WebSocket.Server({ port: 3000 });
wsServer.on("connection", (socket) => {
  console.log("Client connected!");
  socket.on("message", (message) => {
    // handle vote
    console.log("Message received: " + message);
    wsServer.clients.forEach(function (client) {
      if (client.readyState === WebSocket.OPEN) {
        //punkt 11a
        if (message == "Pizza") results.pizza++;
        else if (message == "Pasta") results.pasta++;
        console.log("Sending to a client from clients.");
      }
    });
  });
  socket.on("error", (error) => {
    console.log("Error:" + error);
  });
  // send current results to a newly connected client
  console.log("Sending to a newly connected client.");
});
