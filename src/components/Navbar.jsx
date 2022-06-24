import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiQuestionFill } from "react-icons/ri";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar4.jpg';
import { Resources, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content = {title} position ="BottomCenter ">
     <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
)
const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClick, isClicked, setIsClicked, screenSize, setscreenSize } = useStateContext()
  useEffect(() =>{

  },[])

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title= "Menu" 
      customFunc={()=>setActiveMenu((prevActiveMenu)=> !prevActiveMenu)} 
      color='blue' 
      icon={<AiOutlineMenu />}/>

      <div className="flex">
      <NavButton title= "Resource" 
      customFunc={()=>handleClick('resource')} 
      color='blue' 
      icon={<RiQuestionFill />}/>

      <NavButton title= "chat" 
      dotColor="03c9D7"
      customFunc={()=>handleClick('chat')} 
      color='blue' 
      icon={<BsChatLeft />}/>

      <NavButton title= "notification" 
      dotColor="03c9D7"
      customFunc={()=>handleClick('notification')} 
      color='blue' 
      icon={<RiNotification3Line />}/>
    <TooltipComponent
            content = 'profile' position="BottomCenter"
          >
            <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={()=> handleClick("userProfile")}
            >
              <img className="rounded-full w-8 h-8" src ={avatar} />
              <p>
                <span className='text-gray-400 text-14'> Hi, </span> {' '}
                <span className='text-gray-400 font-bold ml-1 text-14'> Eric</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14'/>
            </div>
          </TooltipComponent>
            { isClicked.resource && <Resources />}
            { isClicked.chat && <Chat />}
            { isClicked.notification && <Notification />}
            { isClicked.userProfile && <UserProfile />}
      </div>

    </div>
  )
}

export default Navbar