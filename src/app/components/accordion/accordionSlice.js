import { createSlice } from '@reduxjs/toolkit';

const accordionSlice = createSlice({
  name: 'accordion',
  initialState: {
    activeIndex: 0
  },
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
  },
});

export const {
    setActiveIndex
} = accordionSlice.actions;
export const getActiveIndexState = (state) => state.accordion.activeIndex;

export default accordionSlice.reducer;
