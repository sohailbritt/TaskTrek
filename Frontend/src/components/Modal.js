import React,{useContext, useRef} from 'react'
import {taskTrekContext} from '../context/Context';
import { IoCloseSharp } from "react-icons/io5";
import './Modal.css'
const Modal = (props) => {
  const {item} = props;
  const {task, setTask} = useContext(taskTrekContext);
  const updateInput = useRef();
  const handleclose = () => {
   const {setShowModal} = props;
   setShowModal(false);
  }
  const updateTask = () => {
    const newTaskData = {
      id: item.id,
      task: updateInput.current.value,
      isCompleted: item.isCompleted
  }
  const oldTask = task.filter((task)=>{
    return task.id !== item.id
  })
  setTask([newTaskData, ...oldTask]);
  console.log(newTaskData);
  handleclose();
  }
    return (
        <div className='popUp'>
          <IoCloseSharp className="close" onClick={handleclose} />
          <h5>Update Task</h5>
          <hr/>
          <input
            type='text'
            className='input-modal'
            ref={updateInput}
            defaultValue={item.task}
          />
          <div className='button-container'>
            <button className='btn cancel' onClick={handleclose}>Cancel</button>
            <button className='btn' onClick={()=>{updateTask()}}>Update</button>
          </div>
        </div>
    )

}

export default Modal