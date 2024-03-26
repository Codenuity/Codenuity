import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { WebSocketServer } from "ws";
import router from "./routes.js";
import manager from "./nlp.js";

const app = express();
const wss = new WebSocketServer({ noServer: true });

wss.on("connection", (ws) => {
  console.log("WebSocket connection established");

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);

    try {
      const msg = message.toString();

      manager.process("en", msg).then((response) => {
        console.log("Processed message:", response?.answer);

        let answers = response?.answer;

        if (!response?.answer) {
          console.log("No response message found");
          answers = "I'm sorry, I don't understand that";
        }
        ws.send(answers, (error) => {
          if (error) {
            console.log("Error sending message:", error);
          } else {
            console.log("Response message sent successfully");
          }
        });
      });
    } catch (error) {
      console.log("Error parsing JSON:", error);
    }
  });
});

app.use(cors());
app.use(bodyParser.json());

app.use("/bot", router);

const server = app.listen(5000, () => {
  console.log("Server started on port 5000");
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

export default wss;
