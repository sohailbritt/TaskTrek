import React,{useContext, useRef, useState} from 'react';
import { LuCheckCircle } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import InputField from './InputField';
import Modal from './Modal';
import Button from './Button';
import {taskTrekContext, userContext } from '../context/Context';
import './ListingTab.css'

const ListingTab = () => {
  const [newTask, setNewTask] = useState(null);
  const [currentTask, setCurrenTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const searchInput = useRef();
  const {userData} = useContext(userContext);
  const {task, setTask} = useContext(taskTrekContext);
  const [filterTask, setFilterTask] = useState(task);

  //task to add
  const getInputData = (data) => {
    setNewTask(data);
  }


  // update or delete popup
  const handlePopup = (item) => {
    setShowModal(true);
    setCurrenTask(item);
  }

  const handleSearch = () => {
    const inputValue = searchInput.current.value;
    const updatedTasks = filterTask.filter(task =>
      task.task.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log(updatedTasks);
    setFilterTask(updatedTasks);
    if(inputValue.trim() === '') {
      setFilterTask(task);
    }
  }


  return (
    <div className='listingTab'>
      {/* ------------------------dashboard-------------- */}
        {userData[0].defaulter === 'dashboard' && (
          <section>
          <h2 className='wrapper listing-title'>Dashboard</h2>
          <p className='wrapper listing-subtitle'>{`Hey ${userData[0].user}`}</p>
          <div className='wrapper'>
            <div key='dashboard' className='form-wrapper dashboard'>
                <InputField
                  getInputData={getInputData}
                />
                <span className='add-button'>
                  <Button
                  type='Add'
                  addData={newTask}
                  />
                </span>
            </div>
          </div>
          <ul className='tasklist'>
            {task.map((item)=>
              <>
                <li key={item.task}>{item.task}
                    <span className='status'>{item.isCompleted && <LuCheckCircle color='green' fontSize = '18px'/> }
                    </span>
                </li>
              </>)}
          </ul>
        </section>
        )}
        {/* ------------------Tasklist---------------------- */}
        { userData[0].defaulter === 'tasklist' && (
        <section>
          <h2 className='wrapper listing-title'>TaskList</h2>
          <div className='wrapper'>
            <div className='form-wrapper listing'>
              <input
              type='text'
              className='input'
              ref={searchInput}
                placeholder='Search Task'
                onChange={()=>{handleSearch()}}
              />
              <span className='search'>
                <IoSearch
                  color='#efefef'
                  fontSize = '21px'
                  fontWeight='bold'
                  onClick={()=>{handleSearch()}}
                  />
              </span>
            </div>
          </div>
          <ul className='tasklist'>
            {filterTask.map((item)=>
            <>
              <li key={item.task} className='items' onClick={()=>{handlePopup(item)}}>{item.task} <span className='status'>{item.isCompleted && <LuCheckCircle color='green' fontSize = '18px'/>}</span>
              </li>
              {showModal &&
              <Modal
              setShowModal={setShowModal}
              item={currentTask}
              />}
            </>)}
          </ul>
        </section>)}

        {userData[0].defaulter === 'completed' && (
        <section>
          <h2 className='wrapper listing-title'>Completed Tasklist</h2>
          <ul className='tasklist completed-task'>
            {task.map((item)=>
            <>
              {userData[0].defaulter === 'completed' && item.isCompleted === true && (<li key={item.task}className='items'>{item.task} <span className='status'>{item.isCompleted && <LuCheckCircle color='green' fontSize = '18px'/> }</span>
                </li>)}
            </>)}
          </ul>
        </section>) }
    </div>
  )
}

export default ListingTab