import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {orderTypes} from '../../types/type'
import axios from 'axios';

export const eatsDetail = createAsyncThunk(
    'eatsDetail',
    async (id)=> {
        const res = await axios.get(`http://localhost:3000/eats/${id}`);
        return res.data
    }
)

const initialState : {order : orderTypes, loading : boolean, error : boolean, view : {}} = {
  order : {
    tableId : "",
    employeeId : "",
    eatsId : "",
    count : 0,
    price : 0 
  },
  loading : false,
  error : false,
  view : {}
};

const orderSlice = createSlice({
    name : 'orderSlice',
    initialState,
    reducers : {
       setOrder(state, actions){
        //@ts-ignore
        state.tableId = actions
       }
    },
    extraReducers :(builder) =>{
        builder.addCase(eatsDetail.pending, (state)=>{
            state.loading = true
        })
        .addCase(eatsDetail.rejected,(state)=>{
            state.error = true
        })
        .addCase(eatsDetail.fulfilled,(state,actions)=>{
            state.view = actions.payload
            state.loading = false
        })
    }
});


export  const {setOrder} = orderSlice.actions;
export default orderSlice.reducer;

// export const selectMode = (state : {
//     uiSlice: any;
//     mode : boolean}) => state.uiSlice.mode;