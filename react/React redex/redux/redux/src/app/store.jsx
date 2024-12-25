import {configureStore} from '@reduxjs/toolkit'

// import from the slice
import counterReducer from '../features/counter/counterSlice'

// creating the store

export const store=configureStore({
    // It’s responsible for handling updates to the application state in response to dispatched actions.
    reducer:{
        counter:counterReducer,
    }
})