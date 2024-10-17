import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/taskSlice'
// import { deleteItem } from '../store/deleteSlice'


// Delete model
const DeleteModel = ({setIsDelete}) => {

  const dispatch = useDispatch()
  const itemId = useSelector(state=>state.deleteItem)

const handleCancle = () => {
    setIsDelete(false)
}

const handleDelete = () => {
  dispatch(remove(itemId))
 
  setIsDelete(false)
}




  return (
    <div className='z-50 w-[300px]  p-4'>
        <h1>Are you sure you want to delete it?</h1>
        <div className="btn-container mt-6 flex items-center justify-start gap-2">
                <button className='border p-1 w-[60px] bg-[#E3FAFC] text-[#1098AD] rounded-md' onClick={()=>handleDelete(true)}>100%</button>
                <button className='border p-1 w-[60px] bg-[#FFE3E3] text-[#F35B5B] rounded-md' onClick={handleCancle}>Cancel</button>
            </div>
    </div>
  )
}

export default DeleteModel