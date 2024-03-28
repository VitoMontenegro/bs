import {createSlice} from "@reduxjs/toolkit";
import {loginUser} from "../../thunks/auth/index.js";

const initialState = {
    user: {},
    isLogged: false,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {

        builder
            .addCase(loginUser.pending, (state) => {
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLogged = true
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload;
            });
    }
});
export const selectTitleFilter = (state) => state.user;
export default authSlice.reducer;