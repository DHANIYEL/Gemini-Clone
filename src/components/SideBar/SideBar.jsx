import {assets} from '../../assets/assets'
import '../../index.css'


const SideBar = () => {
  return (
    <div className='inline-flex h-full flex-col justify-between bg-[#f0f4f9] sidebar py-6 px-4'>
    <div className='top'>
      <div className=''>
        <div>
          <img src={assets.menu_icon} className='cursor-pointer block ml-3' alt="menu_icon" />
          <div className='flex gap-4 items-center mt-12  bg-[#e6eaf1] py-1 px-[10px] rounded-full text-[14px] cursor-pointer text-gray-700'>

            <img src={assets.plus_icon} alt="plus_icon" />
            <p>New Chat</p>
          </div>
          <div className='recent inline-flex flex-col'>
              <p className='recent-title mt-8 mb-3'>Recent</p>
              <div className='recent-entry '>
              <img src={assets.message_icon} alt="message_icon" />
                <p>Whats is React.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom pr-3 cursor-pointer">
      <div className='recent-entry'> 
        <img src={assets.question_icon} alt="" />
        <p>Help</p>
      </div>
      <div className='recent-entry'>
        <img src={assets.history_icon} alt="" />
        <p>Activity</p>
      </div>
      <div className='recent-entry'>
        <img src={assets.setting_icon} alt="" />
        <p>Settings</p>
      </div>
    </div>
    </div>

  )
}

export default SideBar
