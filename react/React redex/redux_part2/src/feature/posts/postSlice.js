import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:'1',
        title:"Learning the redux",
        content:"it is easy"
    },
    {
        id:'2',
        title:"Learning the trading",
        content:"it is not"
    }
]


const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        // posting the new post
        postAdded(state,action){
            state.push(action.payload)
        }

    }
})

export const selectAllPosts=(state)=>state.posts;

export const{postAdded}=postSlice.actions
export default postSlice.reducer;