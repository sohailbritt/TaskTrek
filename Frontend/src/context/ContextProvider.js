import React,{useState} from 'react';
import { taskTrekContext, userContext } from './Context';

const ContextProvider = ({ children }) => {
const [userData, setUserData] = useState([{user: 'sohail', defaulter: 'dashboard'}]);
const [task, setTask] = useState([
    { id: 1, task: 'Walk the dog', isCompleted: true },
    { id: 2, task: 'Buy groceries', isCompleted: false },
    { id: 3, task: 'Read a book', isCompleted: true },
    { id: 4, task: 'Clean the house', isCompleted: false },
    { id: 5, task: 'Cook dinner', isCompleted: true },
    { id: 6, task: 'Exercise', isCompleted: false },
    { id: 7, task: 'Attend meeting', isCompleted: true },
    { id: 8, task: 'Fix the car', isCompleted: false },
    { id: 9, task: 'Write a report', isCompleted: true },
    { id: 10, task: 'Call a friend', isCompleted: false }]);
    return (
        <taskTrekContext.Provider value={{task, setTask}}>
            <userContext.Provider value={{userData, setUserData}}>
                {children}
            </userContext.Provider>
        </taskTrekContext.Provider>
    )
}

export default ContextProvider;