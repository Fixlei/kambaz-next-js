import { createSlice } from "@reduxjs/toolkit";

const INITIAL = 7;
const counterSlice = createSlice({
    name: "counter",
initialState: {count:INITIAL},
reducers:{
    up:(state)=>{
        state.count+=1;
    },
    down: (state)=>{
        state.count-=1;
    },
    reset: (state)=>{
        state.count= INITIAL;
    }
},
}); 

export const{up, down, reset} = counterSlice.actions;
export default counterSlice.reducer;