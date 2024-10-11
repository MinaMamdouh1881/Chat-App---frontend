import { createSlice } from '@reduxjs/toolkit';
import { initializeSocket } from '../socket/socket';

export const url = 'http://localhost:5000/api/';
// export const url = 'https://chat-app-backend-inky-six.vercel.app/api/';
let socket;
if (JSON.parse(localStorage.getItem('chatAppUser')))
  socket = initializeSocket(
    JSON.parse(localStorage.getItem('chatAppUser'))?._id
  );
console.log(socket);

const main = createSlice({
  name: 'main',
  initialState: {
    userData: null,
    myData: JSON.parse(localStorage.getItem('chatAppUser')),
    isLogin: JSON.parse(localStorage.getItem('chatAppUser')) ? true : false,
    sideBar: true,
    onlineUsers: [],
  },
  reducers: {
    setUserData: (store, action) => {
      store.userData = action.payload;
    },
    setMyData: (store, action) => {
      store.myData = action.payload;
    },
    setIsLogin: (store, action) => {
      store.isLogin = action.payload;
    },
    switchSideBar: (store) => {
      store.sideBar = !store.sideBar;
    },
    setOnlineUsers: (store, action) => {
      store.onlineUsers = [...action.payload];
    },
  },
});
export const {
  setUserData,
  setIsLogin,
  switchSideBar,
  setMyData,
  setOnlineUsers,
} = main.actions;
export default main.reducer;
