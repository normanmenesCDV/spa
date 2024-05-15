// punkt 15 b
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const WebSocket = require("ws");
//const wsServer = new WebSocket.Server({ port: 3000 });
//const wsServer = new WebSocket.Server({ server: server }); // punkt 15d
const wsServer = new WebSocket.Server({ server: server, path: "/voting" }); // punkt 16a
app.use(express.static("client"));
server.listen(3000);

let results = {
  pizza: 0,
  pasta: 0,
};

const clients = new Set(); // punkt 17a

wsServer.on("connection", (socket) => {
  console.log("Client connected!");
  clients.add(socket); // punkt 17b
  socket.on("message", (message) => {
    // handle vote
    console.log("Message received: " + message);
    //punkt 11a
    if (message == "Pizza") results.pizza++;
    else if (message == "Pasta") results.pasta++;

    wsServer.clients.forEach(function (client) {
      if (client.readyState === WebSocket.OPEN) {
        console.log("Sending to a client from clients.");
        client.send(JSON.stringify(results)); // punkt 11b
      }
    });
  });
  // punkt 17c
  socket.on("close", () => {
    clients.delete(socket);
    console.log(
      "Client disconnected, total number of clients is: ",
      clients.size
    );
  });
  socket.on("error", (error) => {
    console.log("Error:" + error);
  });
  // send current results to a newly connected client
  console.log("Sending to a newly connected client.");
  socket.send(JSON.stringify(results)); // punkt 11c
});
