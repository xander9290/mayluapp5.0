import app from "./app";
import http from "http";
import open from "open";
import "./database";
import { Server as SocketServer } from "socket.io";

const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("newCuenta", (newCuenta) => {
    socket.broadcast.emit("newCuenta", newCuenta);
  });

  socket.on("updatedCuenta", (changedCuenta) => {
    socket.broadcast.emit("updatedCuenta", changedCuenta);
  });

  socket.on("cuentaOcupada", (cuentaId) => {
    socket.broadcast.emit("cuentaOcupada", cuentaId);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("cuentaOcupada", "");
  });
});

server.listen(app.get("port"), () => {
  console.log("Servidor iniciado en puerto ", app.get("port"));
});
(async () => {
  console.log("Iniciando aplicación");
  await open(`http://localhost:${app.get("port")}`);
})();
