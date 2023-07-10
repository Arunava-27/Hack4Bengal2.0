import React from 'react'
import MessageBox from '../../components/MessageBox'

function index() {
  return (
    <div className='w-full h-full flex'>
      <div className='w-4/12 h-full bg-[#9681eb] rounded-r-[50px] p-10 flex flex-col'>
      <div className='flex justify-between items-center'>
        <div>1</div>
        <div>2</div>
      </div>
      <div>2</div>
      </div>
      <div className='w-full h-full '>
        <MessageBox />
      </div>
    </div>
  )
}

export default index
