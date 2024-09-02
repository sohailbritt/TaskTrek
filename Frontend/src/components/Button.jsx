import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { taskTrekContext } from '../context/Context'
import {createTask} from '../api/api';

import './Button.css'


const Button = ({type, addData}) => {
  // const {data, isDone} = addData;
const {task, setTask} = useContext(taskTrekContext);
const newTaskData = {
    id: uuidv4(),
    task: addData?.data,
    isCompleted: addData?.isDone
}


const addTask = () => {

    if(newTaskData.task === '' || null){
      alert('Please add Task');
    }
    createTask(newTaskData).then((resolve)=>{
       console.log(resolve, 'task done');
       setTask([newTaskData, ...task])
    })
  }
  return (
    <><button className='btn' onClick={()=> addTask()}>{type}</button></>
  )
}



export default Button