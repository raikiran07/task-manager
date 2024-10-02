import React from 'react'
import HeaderImage from '../assets/headerImage.svg'
import WomanImage from '../assets/woman-icon.png'
import UpcomingTask from './UpcomingTask'
import AddTaskButton from './AddTaskButton'

// Header component with just a title and an image align in flex
const Header = ({setIsModel}) => {
  return (
    <header className='items-start justify-between gap-1 mt-2 hidden md:flex'>
       
        <div className="content">
        <h1 className='text-2xl  font-bold'>Welcome back to task manager</h1>
        <span className='text-gray-400'>be consistent to see the results</span>
        <UpcomingTask/>
        <AddTaskButton setIsModel={setIsModel}/>
        </div>
         <div className="image-container max-w-[320px]">
            <img src={WomanImage} alt="header image" />
        </div>
        
    </header>
  )
}

export default Header