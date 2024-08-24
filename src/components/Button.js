import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { taskTrekContext } from '../context/Context'
import './Button.css'


const Button = ({type, addData}) => {
const {task, setTask} = useContext(taskTrekContext);
const newTaskData = {
    id: uuidv4(),
    task: addData,
    isCompleted: false
}

const addTask = () => {
  let duplicate = false;
  task.forEach(item => {
    duplicate = item.task.includes(newTaskData.task)
  });
  duplicate === true && alert('Task already added')
  if(!duplicate) {
    setTask([newTaskData, ...task])
  }
}

  return (
    <><button className='btn' onClick={()=> addTask()}>{type}</button></>
  )
}

export default Button