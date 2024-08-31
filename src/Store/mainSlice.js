import { createSlice } from '@reduxjs/toolkit';

export const url = 'http://localhost:5000/api/';

const main = createSlice({
  name: 'main',
  initialState: {
    userData: null,
    myData: JSON.parse(localStorage.getItem('chatAppUser')),
    isLogin: JSON.parse(localStorage.getItem('chatAppUser')) ? true : false,
    sideBar: true,
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
  },
});
export const { setUserData, setIsLogin, switchSideBar, setMyData } = main.actions;
export default main.reducer;
