import {createAsyncThunk} from "@reduxjs/toolkit";
import Server from "../../../engine/Server.js";
import config from '../../../config.json';


const App= new Server(config)


export const loginUser = createAsyncThunk(
    'auth/login',
    async (data, {rejectWithValue}) =>{
        try {
            const resp = await App.Post('/login_by_email', data);
            if (resp.success) {
                return resp.user;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)