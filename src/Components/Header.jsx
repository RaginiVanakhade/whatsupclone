import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { LuCross } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { TbHistoryToggle } from "react-icons/tb";
import ToggleSlide from '../custom/ToggleSlide';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSetting, setIsSetting] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=''>
      <div className="h-full p-2 w-full flex justify-between bg-[#1F1F1F]  shadow-xl relative ">
        <div className="m-1 p-2 w-96 flex justify-between items-start  ">
          <div className='font-["Dancing_Script"] text-2xl ml-4 '>Hello Everyone..!</div>
          <div onClick={() => setIsOpen(!isOpen)} className=''> {isOpen ? <LuCross size={25} /> : <FaBars size={25} />}</div>
        </div>

        <div className=' m-1 p-2 w-full flex justify-between'>
          <div className='flex justify-evenly w-72 font-semibold  '>
            <div className='flex gap-2 cursor-pointer' onClick={() => {
              setIsSetting(!isSetting);
              setIsNotificationOpen(false);
            }}>Setting
              <div className=''><MdOutlineKeyboardArrowDown size={30} /></div>
            </div>
            <div>
              <div className='flex gap-2 cursor-pointer' onClick={() => {
                setIsNotificationOpen(!isNotificationOpen);
                setIsSetting(false);
              }}>Notification
                <div className=' bg-red-400 rounded-full'><IoIosNotifications size={25} /></div>
              </div>
            </div>

            <div>
              {isNotificationOpen && (
                <div className="absolute left-96 top-16 z-50">
                  <ToggleSlide title='Notification' />
                </div>
              )}
            </div>

          </div>
          <div className='flex gap-2 font-semibold cursor-pointer'> <div> <TbHistoryToggle size={25} /></div>Status Updates 
          <span><button onClick={() => navigate("/")}><RiLogoutCircleRLine  size={25}/></button></span>
          </div>
        </div>
        <div>
          {isSetting && (
            <div className="absolute left-80 top-16 z-50 h-[100%] w-[20%]">
              <ToggleSlide title='Setting' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header