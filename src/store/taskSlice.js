import { createSlice } from "@reduxjs/toolkit";
import taskList from "../data";
import { loadTasks } from "../util/utils";



const initialList = loadTasks()

const taskSlice = createSlice({
    name:'taskList',
    initialState:initialList,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            return state.filter(task=>task.id != action.payload)
        },
        update:(state,action)=>{
            const {id,title,status,dueDate} = action.payload
            const taskItem = state.find(task=>task.id == id)
            if(taskItem){
                taskItem.title = title;
                taskItem.status = status;
                taskItem.dueDate = dueDate
            }
        }
    }
})



export const {add,remove,update} = taskSlice.actions;
export default taskSlice.reducer;