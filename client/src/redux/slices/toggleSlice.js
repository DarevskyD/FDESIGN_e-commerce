import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    active: false,
    target: '',
  },
  reducers: {
    toggleClick: (state) => {
      state.active = !state.active;
    },
    handleClick: (state, action) => {
      if (
        (action.payload === 'sc-cwSeag hMWsJt' ||
          action.payload === 'sc-ezOQGI cNYKBo' ||
          action.payload === 'sc-iJnaPW bnmyOZ') &&
        window.innerWidth <= '800'
      ) {
        state.target = action.payload;
        state.active = !state.active;
      }
    },
  },
});

export const { toggleClick, handleClick } = toggleSlice.actions;
export default toggleSlice.reducer;
