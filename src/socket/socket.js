import { io } from 'socket.io-client';

let socket;

export const initializeSocket = (userId) => {
  socket = io('https://chat-app-backend-inky-six.vercel.app', {
    query: { userId },
  });

  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
  });

  return socket;
};

export const getSocket = () => socket;
