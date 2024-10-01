import React from 'react'
import { SearchBar } from './SearchBar'
import WomanImage from '../assets/woman-icon.png'
import btnImage from '../assets/btn-image.png'
import Image1 from '../assets/img-1.png'
import Image2 from '../assets/img-2.png'
import { CaretRight } from '@phosphor-icons/react'
import { GithubLogo } from '@phosphor-icons/react'
import { LinkedinLogo } from '@phosphor-icons/react'
import { TwitterLogo } from '@phosphor-icons/react'


const Sidebar = ({search,setSearch,filter,setFilter}) => {
  return (
    <aside>
        <SearchBar setSearch={setSearch} search={search} filter={filter} setFilter={setFilter}/>
        <div>
            <img src={btnImage} alt="image of a boy" />
        </div>

        <h1 className='font-semibold ml-2'>List Your Task</h1>
       <ul className='ml-2'>
        <li className='flex items-center text-gray-500'>
          <CaretRight/> <span>Assignments</span>
        </li>
        <li className='flex items-center text-gray-500'>
          <CaretRight/> <span>Personal</span>
        </li>
        <li className='flex items-center text-gray-500'>
          <CaretRight/> <span>Professional</span>
        </li>
        <li className='flex items-center text-gray-500'>
          <CaretRight/> <span>Todos</span>
        </li>
        <li className='flex items-center text-gray-500'>
          <CaretRight/> <span>Vacations</span>
        </li>
        <li className='flex items-center text-gray-500'>
          <CaretRight/> <span>Goals</span>
        </li>
       </ul>
        <hr className='my-8' />
      <div className="footer ml-2">
      <h2 className='font-semibold'>Let's Connect</h2>
       <div className="socials mt-2 flex items-center justify-start gap-2">
        <a href="https://github.com/raikiran07" target='_blank' className='inline-block border p-1 rounded-full bg-orange-400 text-white'>
          <GithubLogo/>
        </a>
        <a href="https://www.linkedin.com/in/kiran-rai-50b836196/" target='_blank' className='inline-block border p-1 rounded-full bg-orange-400 text-white'>
          <LinkedinLogo/>
        </a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2FKiranRai425" target='_blank' className='inline-block border p-1 rounded-full bg-orange-400 text-white'>
          <TwitterLogo/>
        </a>
       </div>
      </div>
       
         
    </aside>
  )
}

export default Sidebar