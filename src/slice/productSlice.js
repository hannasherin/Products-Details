
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";

const initialState={
    products:[],
    isloading:false,
    error:'',
}

export const getProductfromServer=createAsyncThunk(
    'products/getProductfromServer',
    async(_,{rejectWithValue})=>{
        try{
         const response=await api.get('/products')
         return response.data
        }catch(error){
         return rejectWithValue('No Product Found ')  
        }
    }
)

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        //pending
        .addCase(getProductfromServer.pending,(state,action)=>{
            state.isloading=true;
            state.error='';
        })
        //fullfilled
        .addCase(getProductfromServer.fulfilled,(state,action)=>{
            state.isloading=false;
            state.error='',
            state.products=action.payload
        })
        //rejected
        .addCase(getProductfromServer.rejected,(state,action)=>{
            state.isloading=false;
            state.error=action.payload;
            state.products=[]
        })
    }
})
export default productSlice.reducer