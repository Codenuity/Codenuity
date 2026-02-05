import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { WebSocketServer } from "ws";
import router from "./routes.js";
import manager from "./nlp.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

const wss = new WebSocketServer({ noServer: true });

// Track connected clients
const connectedClients = new Set();

wss.on("connection", (ws) => {
  console.log("WebSocket connection established");
  connectedClients.add(ws);

  ws.on("message", async (message) => {
    try {
      const msg = message.toString().trim();
      
      if (!msg) {
        ws.send(JSON.stringify({ error: "Empty message" }));
        return;
      }

      console.log(`Received message: ${msg}`);

      const response = await manager.process("en", msg);
      const answer = response?.answer || "I'm sorry, I don't understand that. Could you rephrase your question?";

      console.log("Processed response:", answer);

      ws.send(JSON.stringify({ message: answer, success: true }), (error) => {
        if (error) {
          console.error("Error sending message:", error);
        } else {
          console.log("Response sent successfully");
        }
      });
    } catch (error) {
      console.error("Error processing message:", error);
      ws.send(
        JSON.stringify({
          error: "Failed to process message",
          success: false,
        })
      );
    }
  });

  ws.on("close", () => {
    console.log("WebSocket connection closed");
    connectedClients.delete(ws);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
    connectedClients.delete(ws);
  });
});

// Middleware
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/bot", router);

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    connectedClients: connectedClients.size,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Express error:", err);
  res.status(500).json({ error: "Internal server error" });
});

const server = app.listen(PORT, () => {
  console.log(`✓ Server started on port ${PORT}`);
  console.log(`✓ CORS enabled for origin: ${CORS_ORIGIN}`);
  console.log(`✓ WebSocket server running`);
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});

export default wss;
