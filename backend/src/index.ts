import express from "express";
import cors from "cors";
import http from "http";
import sequelize from "./config/db";
import corsOptions from "./config/corsOptions";
import Sale from "./models/Sale";

const socketIO = require("socket.io");

// const addColumnRouter = require("./routes/add-column");

import deleteColumnRouter from "./routes/delete-column";
import salesRouter from "./routes/sales";

const app = express();

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// Other middleware and configurations
app.use(express.json());
app.use("/add-column", require("./routes/add-column"));
app.use("/delete-column", deleteColumnRouter);
app.use("/sales", salesRouter);

sequelize
  .sync()
  .then((result) => {
    console.log("Result received");
  })
  .catch((err) => {
    console.log(err);
  });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully."); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err); // eslint-disable-line no-console
  });

const PORT = process.env.PORT || 7000;
const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

const io = socketIO(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

io.on("connection", (socket) => {
  console.log("A client connected");

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });

  socket.on("new-sale", (updatedData) => {
    console.log("a new sale likely made:", updatedData);
    io.emit("new-sale", updatedData);
  });

  // Handle custom events here
  socket.on("send-message", (message) => {
    console.log("Received message:", message);
    socket.emit("receive-message", message);
    // io.broaemit("chat message", message); // Broadcast the message to all connected clients
  });
});
