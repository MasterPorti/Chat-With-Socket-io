const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  //   console.log("usuario conectado");
  //   socket.on("disconnect", () => {
  //     console.log("usuario desconectado");
  //   });
  socket.on("chat", (msg) => {
    io.emit("chat", msg);
  });
});

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/cliente/index.html`);
});

server.listen(3000, () => {
  console.log(`servidor corriendo en 3000`);
});
