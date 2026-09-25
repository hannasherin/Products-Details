
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

//  delete
export const deleteProducts=createAsyncThunk(
    'products/deleteProducts',
    async(id,{rejectWithValue})=>{
        try{
            await api.delete(`/products/${id}`)
            return id
        }catch(error){
            return rejectWithValue('No Products Found')
        }
    }
)

export const createProducts=createAsyncThunk(
    'products/createProducts',
    async(formData,{rejectWithValue})=>{
        try{
            const response=await api.post('/products',formData)
            return response.data
        }catch(error){
            return rejectWithValue('No Products Found')
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
    //    delete Products 
       .addCase(deleteProducts.pending,(state,action)=>{
        state.isloading=true
       })
       .addCase(deleteProducts.fulfilled,(state,action)=>{
        state.isloading=false
        state.products=state.products.filter((product)=> product.id !== action.payload)
        
       })
       .addCase(deleteProducts.rejected,(state,action)=>{
        state.isloading=false
        state.error=action.payload
        
       })

    //    create product 
    .addCase(createProducts.pending,(state,action)=>{
        state.isloading=true
    })
    .addCase(createProducts.fulfilled,(state,action)=>{
        state.isloading=false
        state.products.push(action.payload)
    })
    .addCase(createProducts.rejected,(state,action)=>{
        state.isloading=false
        state.error=action.payload.error
    })


    }
})
export default productSlice.reducer