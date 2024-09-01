import { io } from 'socket.io-client';

let socket;

export const initializeSocket = (userId) => {
  socket = io('http://localhost:5000', { query: { userId } });

  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
  });

  return socket;
};

export const getSocket = () => socket;
