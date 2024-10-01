import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { sortByDueDate } from '../util/utils';

const UpcomingTask = () => {
  const date = new Date().getDate()
  const tasks = useSelector(state=>state.taskList)
  console.log("task from store")
  console.log(tasks)
 

  const sortedTaskList = sortByDueDate(tasks);
  const [upcomingList,setUpcomingList] = useState([])
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const month = new Date().getMonth();
  const mongthWords = monthNames[month]

  useEffect(()=>{
    let count = 2;
    const list = []
    for(let task of sortedTaskList){
      if(count > 0){
        if(task.status=="Pending" || task.status=="In Progress"){
          list.push(task)
          count--;
        }
      }
    }
    console.log(list)
    // const list = tasks.slice(0,2).filter(task=>task.status=="Pending" || task.status=="In Progress")
    setUpcomingList(list)
  },[tasks])
  
  return (
    <div className='border flex items-center justify-between bg-white p-4 mt-4 md:mt-6 rounded-lg shadow-customShadow'>
        <div className="left flex-1 text-center">
        <h1 className='text-6xl font-bold'>{date}</h1>
        <span className='font-semibold text-gray-500'>{mongthWords}</span>
        </div>
        <div className="right flex-1 relative">
            <p className='font-semibold'>Up next</p>
            {
              upcomingList.length == 0 && <p className="before:content-[''] relative before:w-1 before:h-5 before:bg-green-400 before:absolute before:left-[-8px] before:bottom-0 mt-1 ml-2 before:rounded-md text-gray-500">
                no upcoming task
            </p>
            }
            {
              upcomingList.map(task=>{
                return <p className="text-xxs md:text-xs before:content-[''] relative before:w-1 before:h-4 before:bg-red-400 before:absolute before:left-[-8px] before:bottom-0 mt-1 ml-2 before:rounded-md text-gray-400">
                  {
                    task.title
                  }
                </p>
              })
            }
        </div>
    </div>
  )
}

export default UpcomingTask