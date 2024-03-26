const socket = new WebSocket("ws://localhost:5000");
export const connect = () => {
  socket.onopen = () => {
    console.log("connected");
    socket.send("hello");
  };
};

export const sendMessage = (message: string) => {
  console.log("message sent");
};

export const receiveMessage = (callback: (message: string) => void) => {
  socket.onmessage = (event) => {
    console.log(JSON.parse(event.data))
  };
};


export default socket;  