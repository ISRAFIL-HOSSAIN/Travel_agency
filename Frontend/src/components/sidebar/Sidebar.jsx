import React, { useState } from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'
import {UilSignOutAlt,UilBars} from '@iconscout/react-unicons'
import { SidebarData } from '../../Data/Data'
import {motion} from 'framer-motion'

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true:{
      left:'0'
    },
    false:{
      left:'-50%'
    }
  }
  return (
    <>
    <div className = "bars" style={expanded ? {left:'50%'}:{left:'5%'}}
    onClick={()=> setExpanded(!expanded)}
    >
        <UilBars/>
    </div>
    <motion.div className="Sidebar"
    variants={sidebarVariants}
    animate = {window.innerWidth <= 768 ? `${expanded}` : ''}
    >
        {
            /*logo*/
        }
        <div className="logo">
            <img src={Logo} alt="logo"/>
            <span id='logotext'>Ticket <span>System  </span></span>
        </div>
        {/* menu */}
        <div className="menu">
          {SidebarData.map((item,index)=>{
            return(
              <div className={selected === index?'menuItem active': 'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
              >
                <item.icon/>
                <span>
                  {item.heading}
                </span>
              </div>
            )
          })}
          <div className="menuItem">
            <UilSignOutAlt/>Signout
          </div>
        </div>
        
    </motion.div>
    </>
  )
}

export default Sidebar