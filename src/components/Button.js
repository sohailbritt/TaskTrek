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
console.log(newTaskData);

const addTask = () => {
  let duplicate = false;

    if(newTaskData.task === '' || null){
      alert('Please add Task');
    }
    newTaskData.task.trim().length > 0 && task.forEach(item => {
      duplicate = item.task.includes(newTaskData.task)
    });
    if(!duplicate && newTaskData.task.trim().length != 0) {
    duplicate === true && alert('Task already added')
    setTask([newTaskData, ...task])
    }
  }
  return (
    <><button className='btn' onClick={()=> addTask()}>{type}</button></>
  )
}



export default Button