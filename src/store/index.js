import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slice/auth";
import errorReducer from "./slice/errors";


const store = configureStore ({
    reducer: {
        auth: authSlice,
        error: errorReducer
    }
});
export default store;