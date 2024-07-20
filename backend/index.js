const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const port = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Import your announcement routes
const announcementRoutes = require("./routes/announcement");

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Initialized" });
});

app.use("/api/announcement", (req, res, next) => {
  const originalSend = res.send;
  
  res.send = function(body) {
    if (this.statusCode === 201) {
      try {
        const announcement = JSON.parse(body);
        broadcastAnnouncement(announcement);
      } catch (e) {
        console.error("Error parsing announcement for broadcast:", e);
      }
    }
    originalSend.call(this, body);
  };
  
  next();
});

app.use("/api/announcement", announcementRoutes);

// WebSocket server setup
wss.on("connection", (ws) => {
  console.log("New client connected");
  ws.on("message", (message) => {
    console.log("Received message:", message);
  });
  ws.on("close", () => {
    console.log("Client disconnected");
  });
  ws.send("Connected to socket server");
});

const broadcastAnnouncement = (announcement) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(announcement));
    }
  });
};

// Middleware to broadcast announcement after creation
app.use("/api/announcement", (req, res, next) => {
  const originalSend = res.send;
  
  res.send = (body) => {
    if (res.statusCode === 201) {
      try {
        const announcement = JSON.parse(body);
        broadcastAnnouncement(announcement);
      } catch (e) {
        console.error("Error parsing announcement for broadcast:", e);
      }
    }
    originalSend.call(res, body);
  };
  
  next();
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
