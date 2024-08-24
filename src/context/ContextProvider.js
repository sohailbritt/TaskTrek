import React,{useState} from 'react';
import { taskTrekContext, userContext } from './Context';

const ContextProvider = ({ children }) => {
const [userData, setUserData] = useState([{user: 'sohail', defaulter: 'dashboard'}]);
const [task, setTask] = useState([{id: 1, task: 'walk with dog', isCompleted: true}]);
    return (
        <taskTrekContext.Provider value={{task, setTask}}>
            <userContext.Provider value={{userData, setUserData}}>
                {children}
            </userContext.Provider>
        </taskTrekContext.Provider>
    )
}

export default ContextProvider;