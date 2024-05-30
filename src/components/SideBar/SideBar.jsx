import { useState } from 'react'
import {assets} from '../../assets/assets'
import '../../App.css'


const SideBar = () => {

const [extend, setExtend] = useState(true)

  return (
    <div className='inline-flex h-full flex-col justify-between bg-[#f0f4f9] sidebar py-6 px-4'>
    <div className='top'>
        <div>
          <img src={assets.menu_icon} className='cursor-pointer block ml-3' alt="menu_icon" onClick={()=> setExtend(prev=>!prev) }/>
          <div className='inline-flex gap-4 items-center mt-12  bg-[#e6eaf1] py-1 px-3 rounded-full text-[14px] cursor-pointer text-gray-700'>

            <img src={assets.plus_icon}  alt="plus_icon" />
            {extend?<p>New Chat</p>:null} 
          </div>
      </div>
            {extend ?
            
            <div className='recent inline-flex flex-col'>
              <p className='recent-title mt-8 mb-3'>Recent</p>
              <div className='recent-entry '>
              <img src={assets.message_icon} alt="message_icon" />
                <p className='ml-2'>Whats is React.</p>
            </div>
          </div> : null}
    </div>
    <div className="bottom flex flex-col pr-3 cursor-pointer ">
      <div className='recent-entry '> 
        <img src={assets.question_icon} alt="" />
       {extend? <p className='ml-2'>Help</p> : null} 
      </div>
      <div className='recent-entry'>
        <img src={assets.history_icon} alt="" />
        <p></p>
       {extend? <p className='ml-2'>Activity</p> : null} 
      </div>
      <div className='recent-entry'>
        <img src={assets.setting_icon} alt="" />
        {extend? <p className='ml-2'>Settings</p> : null} 
      </div>
    </div>
    </div>

  )
}

export default SideBar
