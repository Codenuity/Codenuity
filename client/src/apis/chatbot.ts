let socket: WebSocket | null = null;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;
const RECONNECT_DELAY = 3000;

const getWebSocketUrl = (): string => {
  if (typeof window === "undefined") {
    return "ws://localhost:5000"; // Fallback for SSR
  }
  return process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:5000";
};

export const connect = (onMessageCallback?: (message: string) => void): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      resolve();
      return;
    }

    try {
      socket = new WebSocket(getWebSocketUrl());

      socket.onopen = () => {
        console.log("WebSocket connected");
        reconnectAttempts = 0;
        resolve();
      };

      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
        reject(error);
      };

      socket.onmessage = (event) => {
        try {
          const message = event.data;
          if (onMessageCallback) {
            onMessageCallback(message);
          }
        } catch (error) {
          console.error("Error processing message:", error);
        }
      };

      socket.onclose = () => {
        console.log("WebSocket disconnected");
        attemptReconnect(onMessageCallback);
      };
    } catch (error) {
      console.error("Failed to create WebSocket:", error);
      reject(error);
    }
  });
};

const attemptReconnect = (onMessageCallback?: (message: string) => void) => {
  if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
    reconnectAttempts++;
    console.log(`Attempting to reconnect (${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})...`);
    setTimeout(() => {
      connect(onMessageCallback).catch((error) => {
        console.error("Reconnection failed:", error);
      });
    }, RECONNECT_DELAY);
  } else {
    console.error("Max reconnection attempts reached");
  }
};

export const sendMessage = (message: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      reject(new Error("WebSocket is not connected"));
      return;
    }

    try {
      socket.send(message);
      console.log("Message sent:", message);
      resolve();
    } catch (error) {
      console.error("Error sending message:", error);
      reject(error);
    }
  });
};

export const receiveMessage = (callback: (message: string) => void): void => {
  if (socket) {
    socket.onmessage = (event) => {
      callback(event.data);
    };
  }
};

export const disconnect = (): void => {
  if (socket) {
    socket.close();
    socket = null;
  }
};

export const isConnected = (): boolean => {
  return socket !== null && socket.readyState === WebSocket.OPEN;
};

export default { connect, sendMessage, receiveMessage, disconnect, isConnected };  