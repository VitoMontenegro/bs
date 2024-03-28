import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     error: null,
//     date: new Date()
// }
const initialState = '';

const index = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      return action.payload;
    },
    clearError: () => {
      return initialState;
    },
  },
});

export const { setError, clearError } = index.actions;

export const selectErrorMessage = (state) => state.error;

export default index.reducer;
