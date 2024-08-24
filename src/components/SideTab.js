import React, {useState, useContext} from 'react';
import { userContext } from '../context/Context';
import { IoEarthSharp} from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { GiStack } from "react-icons/gi";
import './SideTab.css';

const SideTab = () => {
const {userData, setUserData} = useContext(userContext);

const onSwitchTab = (tabs) => {
  setUserData((prevData) =>
    prevData.map((item) => ({ ...item, defaulter: tabs }))
  );
}
  return (
    <div className='sidetab' >
        <div className={userData[0].defaulter === 'dashboard' ? 'item item-highlight' : 'item'}
          onClick={()=>onSwitchTab('dashboard')}
        >
           <IoEarthSharp
             color='white'
             fontSize = '21px'
           />
        </div>
        <div className={userData[0].defaulter === 'tasklist' ? 'item item-highlight' : 'item'}

          onClick={()=>onSwitchTab('tasklist')}
        >
            <GiStack
              color='white'
              fontSize = '22px'
            />
        </div>
        <div className={userData[0].defaulter === 'completed' ? 'item item-highlight' : 'item'}
          onClick={()=>onSwitchTab('completed')}
        >
          <FaRegCheckCircle
            color='white'
            fontSize = '19px' />
        </div>
        <div className={userData[0].defaulter === 'recent' ? 'item item-highlight' : 'item'}
          onClick={()=>onSwitchTab('recent')}
        >
          <MdOutlineWatchLater
           color='white'
           fontSize = '22px'
          />
        </div>

    </div>
  )
}

export default SideTab;