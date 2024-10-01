import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './component/Navbar'
import TotalCard from './component/TotalCard'
import UpcomingTask from './component/UpcomingTask'
import { SearchBar } from './component/SearchBar'
import AddTaskButton from './component/AddTaskButton'
import TaskList from './component/TaskList'
import AddModal from './component/AddModal'
import DeleteModel from './component/DeleteModel'
import Sidebar from './component/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './component/Header'
import AddbuttonMobile from './component/AddbuttonMobile'


function App() {
 const [isModel,setIsModel] = useState(false)
const [search,setSearch] = useState("")
const [filter,setFilter] = useState("All")

  return (
    <div className='px-8 w-[100%] h-[100vh] overflow-hidden relative border bg-gray-100'>
      {
        isModel && <div className="overlay"></div>
      }
    
    <div className="flex-container md:flex md:items-start md:justify-center md:gap-6">
    <div className="left-container hidden md:block md:w-[20%] min-h-[95vh] px-2 bg-white shadow-customShadow mt-4 rounded-md">
    <Sidebar setSearch={setSearch} search={search} filter={filter} setFilter={setFilter} />
   </div>

   <div className="right-container mt-4 md:w-[60%] overflow-auto h-[100vh]">
   <Navbar/>
   <Header setIsModel={setIsModel}/>
   <div className='md:hidden'>
   <UpcomingTask/>
   </div>
    

    <div className="total-card-container lg:flex items-center justify-between md:gap-2 relative">
    
    <TotalCard/>
    </div>
    
    <div className='md:hidden'>
    <SearchBar setSearch={setSearch} search={search} filter={filter} setFilter={setFilter}/>
    </div>
    
    
    <TaskList setIsModel={setIsModel} search={search} filter={filter} />
    
    

    {
      isModel && <div className={`absolute transition-all ease-linear  duration-300   left-[50%]   z-50  bg-white shadow-customShadow rounded-lg ${isModel ? "translate-y-[-50%] translate-x-[-50%] top-[50%] animate-fadeIn" : "top-[150%] transition-all ease-linear duration-75"}`}>
        <AddModal setIsModel={setIsModel} setFilter={setFilter} toast={toast} />
      </div>
    }

    <AddbuttonMobile setIsModel={setIsModel}/>

<ToastContainer />

   </div>
    </div>

   
    
     
    
    
   

    {/* delete model */}
    {/* {
      isDelete && <div className={`absolute transition-all ease-linear  duration-300   left-[50%]  translate-x-[-50%]  z-50  bg-white shadow-customShadow rounded-lg ${isDelete ? "translate-y-[-50%] top-[50%]" : "top-[150%] transition-all ease-linear duration-75"}`}>
      <DeleteModel setIsDelete={setIsDelete}/>
    </div>

    } */}
    
   
      
    </div>
  )
}

export default App
