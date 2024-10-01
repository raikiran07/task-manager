import React from 'react'
import { FaOtter } from 'react-icons/fa'
import { Plus } from '@phosphor-icons/react'
import BtnImage from '../assets/btn-image.png'

const AddTaskButton = ({setIsModel}) => {
  const handleOn = () => {
    setIsModel(true)
  }
  return (
    
        <div className='border  border-orange-400 bg-orange-100 shadow-customShadow mt-2  rounded-lg text-center p-2 cursor-pointer' onClick={handleOn}>
            {/* <img src={BtnImage} alt="btn image" className='max-w-[3rem] inline-block' /> */}
            <p className='text-orange-400 font-semibold'>Add Task</p>
        </div>
    
  )
}

export default AddTaskButton