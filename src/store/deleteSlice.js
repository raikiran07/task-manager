import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deleteId:null
}

const deleteReducer = createSlice({
    name:'deleteItem',
    initialState,
    reducers:{
        deleteItem:(state,action)=>{
            state.deleteId = action.payload
        }
    }
})

export const {deleteItem} = deleteReducer.actions
export default deleteReducer.reducer