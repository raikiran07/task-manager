import React from 'react'
// import taskList from '../data'
import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Trash } from '@phosphor-icons/react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/taskSlice'
import { PencilSimple } from '@phosphor-icons/react'
import { setEditId } from '../store/editSlice'
import { sortByDueDate,saveToLocalStorage } from '../util/utils'

// Table component to show available tasks
const TaskList = ({setIsModel,search,filter}) => {
const tasks = useSelector(state=>state.taskList)

const deleteItem = useSelector(state=>state.delete)
const dispatch = useDispatch()




  const taskList = sortByDueDate(tasks);
  
  const filteredTaskList = filter == "All" ? taskList : taskList.filter(task=>task.status==filter)
//   console.log(filteredTaskList)




const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Define the formatting options
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
  
    // Format the date using Intl.DateTimeFormat
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };


  const handleDelete = (id) => {
   
    const userDecision = confirm("Do you want to delete?")
    if(userDecision){
        dispatch(remove(id))
        const newTaskList = taskList.filter(task=>task.id!=id)
        // console.log(newTaskList)
        saveToLocalStorage(newTaskList)
    
    }
    
   

  }

  const handleEdit = (id) => {
    setIsModel(true)
    console.log("hello")
    dispatch(setEditId(id))
  }


  return (
    <div>


<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6 mb-6 max-h-[330px] md:max-h-[600px] overflow-y-auto z-10 rounded-lg">
    <table class="w-full text-xs text-left rtl:text-right rounded-lg">
        <thead class="text-xs  uppercase text-white    bg-gray-800 sticky top-0">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Task
                </th>
                <th scope="col" class="px-6 py-3">
                    Due Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
              
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
               
            </tr>
        </thead>
        <tbody className='text-xxs md:text-sm'>
            {
                filteredTaskList.length < 1 && <tr>
                    <p className='p-2 text-gray-500'>No data to show</p>
                </tr>
            }
           
           {
            filteredTaskList?.filter(task=>task.title.toLowerCase().includes(search) || task.status.toLowerCase().includes(search) || task.status.includes(filter)).map(task=>
                <tr class="bg-white border-b  hover:bg-gray-50" id={task.id}>
                <td class="px-6 py-4 font-medium">
                   {task.title}
                </td>
                <td class="px-6 py-4">
                    {
                        formatDate(task.dueDate)
                    }
                </td>
                <td class={`px-6 py-4 ${task.status=="Completed" ? "text-green-500" : ""} ${task.status=="Pending" ? "text-red-700" : ""} ${task.status=="In Progress" ? "text-orange-600" : ""}`}>
                    {
                        task.status
                    }
                </td>
              
                <td class="px-6 py-4 flex items-center justify-start gap-2">
                    <PencilSimple className='text-base' onClick={()=>handleEdit(task.id)} />
                    {
                        task.status=="Completed" && <Trash className='text-base cursor-pointer' onClick={()=>handleDelete(task.id)}/>
                    }
                </td>
              
            </tr>
            )
           }
           
        </tbody>
    </table>
</div>

    </div>
  )
}

export default TaskList