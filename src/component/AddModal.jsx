import React, { useEffect, useState } from 'react'
import { add,update } from '../store/taskSlice';
import { setEditId } from '../store/editSlice';
import { useDispatch, useSelector } from 'react-redux';
import { saveToLocalStorage } from '../util/utils';


// Model to add new task
const AddModal = ({setIsModel,isEdit,setFilter,toast}) => {
    const dispatch = useDispatch()
    const taskList = useSelector(state=>state.taskList);
    const {editId} = useSelector(state=>state.editItem)
    // console.log(editId)
    // console.log(isEdit)
    
    const [task,setTask] = useState({
        id:"",
        title:"",
        dueDate:"",
        status:"Pending"
        
    })

    const updateTask = (key, value) => {
        setTask((prevState) => ({
          ...prevState,
          [key]: value, // dynamically updating key-value
        }));
      };

    const handleCancle = () => {
        setIsModel(false);
        dispatch(setEditId(null))
    }

    // Helper function to get today's date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

    const handleAdd = (e) => {
        e.preventDefault();
        // const readableDate = formatDate(task.dueDate);
        // task.dueDate = readableDate

        if(editId){
            console.log(task)
            dispatch(update(task));
            dispatch(setEditId(null))
            setIsModel(false);
            setFilter("All")

            
            const tasks = taskList.map(item=>{
                if(item.id==editId){
                    return {...item,...task}
                }

                return item
            })

            
            
            saveToLocalStorage(tasks)
            toast.success("task updated successfully")
            
        }
        else{
            const listLength = taskList.length;
        const newId = listLength > 0 ? taskList[listLength-1]["id"] + 1 : 1;
        task.id = newId;
         // Check if the selected date is before the current date
    if (new Date(task.dueDate) < new Date(getCurrentDate())) {
        console.log("error")
        toast.error("Task cannot be set in the past")
        return;
      }
      else{
        dispatch(add(task));
        setIsModel(false);
        saveToLocalStorage(taskList)
        const tasks = [...taskList]
        
        tasks.push(task)
       
        saveToLocalStorage(tasks)
        toast.success("task added successfully")
        }
      }
       

        
        
        
    }

    function isEditOn(){
        if(editId){
           const item = taskList.find(task=>task.id == editId)
           setTask(item);
          
        }
    }

    useEffect(()=>{
        isEditOn()
    },[])

  
  return (
    <div className='z-50 w-[300px]  p-4'>
        <form onSubmit={(e)=>handleAdd(e)}>
            <div className="task-title">
                <label htmlFor="task-title" className='font-semibold'>Task</label><br></br>
                <input type="text" id="task-title" required className='w-full bg-[#dfecfc] mt-1 p-2 rounded-lg focus:outline-[#BAC8FF] text-gray-500 ' placeholder='cook food'
                value={task.title}
                onChange={(e)=>updateTask("title",e.target.value)}
                
                />
            </div>
            <div className="dueDate mt-4">
                <label htmlFor="due-date" className='font-semibold'>Due Date</label><br></br>
                <input type="date" id="due-date" className='w-full bg-[#dfecfc] mt-1 p-2 rounded-lg focus:outline-[#BAC8FF] text-gray-500 ' 
                value={task.dueDate}
                onChange={(e)=>updateTask("dueDate",e.target.value)}
                required
                />
            </div>
            <div className="status mt-4">
                <label htmlFor="status" className='font-semibold'>
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status" className='w-full bg-[#dfecfc] mt-1 p-2 rounded-lg focus:outline-[#BAC8FF] text-gray-500 '
                    value={task.status}
                    onChange={(e)=>updateTask("status",e.target.value)}
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </label>
            </div>

            <div className="btn-container mt-6 flex items-center justify-start gap-2">
                {
                    editId ? <button className='border p-1 w-[60px] bg-[#E3FAFC] text-[#1098AD] rounded-md' type="submit">Update</button> : <button className='border p-1 w-[60px] bg-[#E3FAFC] text-[#1098AD] rounded-md' type="submit">Add</button>
                }
                
                <button className='border p-1 w-[60px] bg-[#FFE3E3] text-[#F35B5B] rounded-md' onClick={handleCancle}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default AddModal