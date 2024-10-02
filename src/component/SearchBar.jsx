import React, { useEffect } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { FunnelSimple } from '@phosphor-icons/react'
import { useRef } from 'react'

// Search and filter component
export const SearchBar = ({search,setSearch,filter,setFilter}) => {
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <div className='mt-6'>
        <div className="inputfield flex items-center justify-start gap-1  p-2 border-2 border-[#BAC8FF]  rounded-lg bg-inputBg">
            <MagnifyingGlass className='text-gray-400 mt-1'/>
            <input type="text" className='w-full outline-none border-none bg-inputBg text-gray-400' value={search}  placeholder="Search..." onChange={(e)=>setSearch(e.target.value)} ref={inputRef} />
        </div>

        {/* filtering */}
        <div className="filter-container flex items-center justify-start gap-2 mt-4 border w-fit p-1 rounded-md shadow-customShadow md:w-full bg-inputBg">
            <FunnelSimple/>
            <select name="status" id="status" className='outline-none border-none w-full bg-inputBg text-gray-600' value={filter} onChange={(e)=>setFilter(e.target.value)} >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    </div>
  )
}
