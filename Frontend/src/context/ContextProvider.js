import React,{useEffect, useState} from 'react';
import { taskTrekContext, userContext } from './Context';
import {getAllTask} from '../api/api';

const ContextProvider = ({ children }) => {
const [userData, setUserData] = useState([{user: 'sohail', defaulter: 'dashboard'}]);
const [task, setTask] = useState([]);

useEffect(()=>{
    getAllTask().then((res)=> setTask(res[0].tasks))
},[]);

    return (
        <taskTrekContext.Provider value={{task, setTask}}>
            <userContext.Provider value={{userData, setUserData}}>
                {children}
            </userContext.Provider>
        </taskTrekContext.Provider>
    )
}

export default ContextProvider;