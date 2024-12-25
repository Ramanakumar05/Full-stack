import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
}

export const counterSlice=createSlice({
    // slice name
    name:'counter',
    // initial state
    initialState:initialState,
    // return the new state
    reducers:{
        // state is anonymous fnciton
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        reset:(state)=>
        {
            state.count=0;
        },
        incrementbyamount:(state,action)=>
        {
            state.count=state.count+action.payload;
        }
    }
})

export const {increment,decrement,reset,incrementbyamount}=counterSlice.actions;

export default counterSlice.reducer;