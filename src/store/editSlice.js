import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editId:null
}
const editSlice = createSlice({
    name:"editItem",
    initialState,
    reducers:{
        setEditId:(state,action)=>{
            state.editId = action.payload
        }
    }
})

export const {setEditId} = editSlice.actions
export default editSlice.reducer