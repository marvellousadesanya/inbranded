"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const corsOptions_1 = __importDefault(require("./config/corsOptions"));
const socketIO = require("socket.io");
// const addColumnRouter = require("./routes/add-column");
const delete_column_1 = __importDefault(require("./routes/delete-column"));
const sales_1 = __importDefault(require("./routes/sales"));
const app = (0, express_1.default)();
// Cross Origin Resource Sharing
app.use((0, cors_1.default)(corsOptions_1.default));
// Other middleware and configurations
app.use(express_1.default.json());
app.use("/add-column", require("./routes/add-column"));
app.use("/delete-column", delete_column_1.default);
app.use("/sales", sales_1.default);
db_1.default
    .sync()
    .then((result) => {
    console.log("Result received");
})
    .catch((err) => {
    console.log(err);
});
db_1.default
    .authenticate()
    .then(() => {
    console.log("Connection has been established successfully."); // eslint-disable-line no-console
})
    .catch((err) => {
    console.error("Unable to connect to the database:", err); // eslint-disable-line no-console
});
const PORT = process.env.PORT || 7000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
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
//# sourceMappingURL=index.js.map