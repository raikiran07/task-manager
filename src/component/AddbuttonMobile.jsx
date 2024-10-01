import React from 'react'
import {Plus} from '@phosphor-icons/react'

const AddbuttonMobile = ({setIsModel}) => {
  return (
    <div className='absolute bottom-[5rem] right-2 border md:hidden bg-orange-300 p-2 z-30 rounded-full text-white' onClick={()=>setIsModel(true)}>
        <Plus size={20}/>
    </div>
  )
}

export default AddbuttonMobile