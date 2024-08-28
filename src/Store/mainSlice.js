import { createSlice } from '@reduxjs/toolkit';

const main = createSlice({
  name: 'main',
  initialState: {
    sideButton: false,
  },
  reducers: {
    switchSideButton: (store) => {
      store.sideButton = !store.sideButton;
    },
  },
});
export const { switchSideButton } = main.actions;
export default main.reducer;
