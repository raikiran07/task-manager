import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
import deleteSlice from "./deleteSlice";
import editSlice from "./editSlice";

const store = configureStore({
    reducer:{
        taskList:taskSlice,
        deleteItem:deleteSlice,
        editItem:editSlice
    }
})

export default store;