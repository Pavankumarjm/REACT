import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const getAllProducts = createAsyncThunk('/getAllProducts', async () => {
    const responce = await axios.get('https://dummyjson.com/products');
    const data = await responce.data;
    return data;
})

export const login = createAsyncThunk('/login',async (userData,thunk)=>{
    const responce = await axios.post('http://localhost:3000/users/login',{identifier:userData.username,password:userData.password},{withCredentials:true}).catch(error=>thunk.rejectWithValue(error));
    const data = await responce.data;
    return data.accessToken;
})




const UserSlice = createSlice({
    name: 'user',
    initialState: {
        data: [],
        status: 'pending',
        error: null,
        userInformation:{},
        userLoggedIn:false,
        userError:null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.status = 'pending';
        }).addCase(getAllProducts.fulfilled, (state, actions) => {
            state.status = 'success';
            state.data = actions.payload.products;
        }).addCase(getAllProducts.rejected, (state, actions) => {
            state.error = actions.error;

        })
        builder.addCase(login.fulfilled, (state, actions) => {
            state.userInformation = actions.payload;
            if (state.userInformation.id) {
                state.userLoggedIn = true;
            }
        }).addCase(login.pending, (state) => {
            state.userLoggedIn = false;
        }).addCase(login.rejected, (state, actions) => {
            state.userLoggedIn = false;
            state.error = actions.error;
        })


    }
})


export default UserSlice.reducer;