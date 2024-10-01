import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Dot } from '@phosphor-icons/react'

const TotalCard = () => {
  const [total,setTotal] = useState(null)
  const [pending,setPending] = useState(null)
  const [completed,setCompleted] = useState(null)
  const [inprogress,setInprogress] = useState(null)

  const tasks = useSelector(state=>state.taskList)

  useEffect(()=>{
    const totalTask = tasks.length;
    const totalPending = tasks.filter(task=>task.status=="Pending").length;
    const totalCompleted = tasks.filter(task=>task.status=="Completed").length;
    const totalInprogress = tasks.filter(task=>task.status=="In Progress").length

    setTotal(totalTask)
    setPending(totalPending)
    setCompleted(totalCompleted)
    setInprogress(totalInprogress)

  },[tasks])
  return (
    <div className='border flex items-center justify-between p-4 rounded-lg mt-3 md:mt-[-30px] shadow-customShadow md:p-0 md:border-none md:shadow-none lg:justify-start md:gap-1 lg:gap-2'>
        <div className="total text-center md:min-w-[120px] lg:min-w-[120px] md:border md:p-6 md:rounded-md md:shadow-customShadow relative bg-white md:hover:translate-y-[-10px] md:transition-all md:ease-linear cursor-pointer">
            <h2 className='text-4xl font-semibold'>{`${total < 10 ? '0' : ''}`}{total}</h2>
            <p className='text-gray-500'>Total</p>
            <div className='absolute top-[-5px] left-[-5px] md:top-2 md:left-2 w-2 h-2 bg-gray-400 rounded-full shadow-md shadow-gray-300'></div> 
        </div>
        <div className="pending md:min-w-[120px] text-center lg:min-w-[120px] md:border md:p-6 md:rounded-md md:shadow-customShadow relative bg-red-100 text-red-600 md:hover:translate-y-[-10px] md:transition-all md:ease-linear cursor-pointer">
            <h2 className='text-4xl font-semibold'>{`${pending < 10 ? '0' : ''}`}{pending}</h2>
            <p className='opacity-50'>Pending</p>
            <div className='absolute top-0 md:top-2 md:left-2 w-2 h-2 bg-red-600 rounded-full shadow-md shadow-red-300'></div>
        </div>
        <div className="com md:hover:translate-y-[-10px] md:transition-all md:ease-linearpleted md:min-w-[120px] lg:min-w-[100px] text-center  md:border md:p-6 md:rounded-md md:shadow-customShadow relative bg-orange-100 text-orange-600 cursor-pointer">
            <h2 className='text-4xl font-semibold'>{`${inprogress < 10 ? '0' : ''}`}{inprogress}</h2>
            <p className='opacity-50'>Progress</p>
            <div className='absolute top-0 left-3 md:top-2 md:left-2 w-2 h-2 bg-orange-400 rounded-full shadow-md shadow-orange-300'></div>
        </div>
        <div className="completed md:min-w-[120px] lg:min-w-[120px] text-center md:border md:p-6 md:rounded-md md:shadow-customShadow relative bg-green-100 md:hover:translate-y-[-10px] md:transition-all md:ease-linear cursor-pointer text-green-600">
            <h2 className='text-4xl font-semibold'>{`${completed < 10 ? '0' : ''}`}{completed}</h2>
            <p className='opacity-50'>Completed</p>
            <div className='absolute top-0 left-3 md:top-2 md:left-2 w-2 h-2 bg-green-400 rounded-full shadow-md shadow-green-300'></div>
        </div>
    </div>
  )
}

export default TotalCard