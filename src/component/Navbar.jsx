import React from 'react'
import { Bell } from '@phosphor-icons/react'
import { User } from '@phosphor-icons/react'

// Navbar component
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-gray-800 py-4 rounded-md px-2 text-white'>
      <h1 className='flex items-center justify-center gap-2 font-bold'>
        <User/>
        <span>Task Manager</span>
      </h1>
      <Bell/>
    </nav>
  )
}

export default Navbar