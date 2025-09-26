import { Server } from "socket.io";
import { Message } from "../models/message.model.js";

export const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });
  const userSockets = new Map(); // {userId:socketId}
  const userActivities = new Map(); // {userId:activity}
  io.on("connection", (socket) => {
    socket.on("user_connected", (userId) => {
      userSockets.set(userId, socket.id);
      userActivities.set(userId, "Idle");
      // broadcasts to all connected sockets that this user just logged in
      io.emit("user_connected", userId);
    });
  });
};
