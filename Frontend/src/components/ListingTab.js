import React, { useContext, useRef, useState, useEffect } from 'react';
import { LuCheckCircle } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import InputField from './InputField';
import Modal from './Modal';
import Button from './Button';
import { taskTrekContext, userContext } from '../context/Context';
import {deleteTask} from '../api/api';
import './ListingTab.css';

const ListingTab = () => {
  const [newTask, setNewTask] = useState(null);
  const [currentTask, setCurrenTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const searchInput = useRef();
  const getInputChecked = useRef();
  const { userData, setUserData } = useContext(userContext);
  const { task, setTask } = useContext(taskTrekContext);
  const [filterTask, setFilterTask] = useState(task);

  useEffect(() => {
    setFilterTask(task);
  }, [task]);

  // task to add
  const getInputData = (data) => {
    const isDone = getInputChecked.current.checked;
    setNewTask({data, isDone});
  }

  // update or delete popup
  const handlePopup = (item) => {
    setShowModal(true);
    setCurrenTask(item)
  }

  const handleSearch = () => {
    const inputValue = searchInput.current.value.toLowerCase();
    const updatedTasks = task.filter(t => t.task.toLowerCase().includes(inputValue));
    setFilterTask(updatedTasks);
  }

  const handleDelete = ({id}) => {
    deleteTask(id).then((res)=>{
      console.log('delete item', task);
      const nonDelete = task.filter(t => t.id !== id);
      setTask(nonDelete);
    })
  }

  const switchTab = (tabs) => {
    setUserData((prevData) =>
      prevData.map((item) => ({ ...item, defaulter: tabs }))
    );
  }

  return (
    <div className='listingTab'>
      {/* Dashboard Section */}
      {userData[0].defaulter === 'dashboard' && (
        <section>
          <h2 className='wrapper listing-title'>Dashboard</h2>
          <p className='wrapper listing-subtitle'>{`Hey ${userData[0].user}`}</p>
          <div className='wrapper'>
            <div key='dashboard' className='form-wrapper dashboard'>
              <InputField getInputData={getInputData} />
              <div class="switch-toggle">
                    <input class="switch-toggle-checkbox" type="checkbox" id="pricing-plan-switch" ref={getInputChecked}/>
                    <label class="switch-toggle-label" for="pricing-plan-switch">
                      <span>Not Yet</span>
                      <span>Done</span>
                    </label>
                  </div>
              <span className='add-button'>
                <Button type='Add' addData={newTask}/>
              </span>
            </div>
          </div>
          <ul className='tasklist'>
            {task.slice(0, 4).map((item, index) => (
              <>
              <li key={index}>
                {item.task}
                <span className='status'>{item.isCompleted && <LuCheckCircle color='green' fontSize='18px' />}</span>
              </li>
              <span className='status delete'>
                 <RiDeleteBin5Line color='red' fontSize='20px' onClick={() => handleDelete(item)} />
                </span>
              </>
            ))}
            <span
            className='more'
            onClick={()=>{switchTab('tasklist')}}
            >more...<FaLongArrowAltRight className='arrow'/></span>
          </ul>
        </section>
      )}

      {/* Tasklist Section */}
      {userData[0].defaulter === 'tasklist' && (
        <section>
          <h2 className='wrapper listing-title'>TaskList</h2>
          <div className='wrapper'>
            <div className='form-wrapper listing'>
              <input
                type='text'
                className='input'
                ref={searchInput}
                placeholder='Search Task'
                onChange={handleSearch}
              />
              <span className='search'>
                <IoSearch color='#efefef' fontSize='21px' fontWeight='bold' onClick={handleSearch} />
              </span>
            </div>
          </div>
          <ul className='tasklist'>
            {filterTask.map((item, index) => (
              <>
              <li key={index} className='items'  onClick={() => handlePopup(item)}>
                {item.task} <span className='status'>{item.isCompleted && <LuCheckCircle color='green' fontSize='18px' />}</span>
              </li>
              <span className='status delete'>
                  <RiDeleteBin5Line color='red' fontSize='20px' onClick={() => handleDelete(item.task)} />
                </span>
              </>
            ))}
            {showModal && <Modal setShowModal={setShowModal} item={currentTask} />}
          </ul>
        </section>
      )}

      {/* Completed Tasklist Section */}
      {userData[0].defaulter === 'completed' && (
        <section>
          <h2 className='wrapper listing-title'>Completed Tasklist</h2>
          <ul className='tasklist completed-task'>
            {task.filter(item => item.isCompleted).map((item, index) => (
              <>
              <li onClick={() => handlePopup(item)}
                key={index} className='items'>
                {item.task} <span className='status'>{item.isCompleted && <LuCheckCircle color='green' fontSize='18px' />}</span>
              </li>
              <span className='status delete'>
                  <RiDeleteBin5Line color='red' fontSize='20px' onClick={() => handleDelete(item.task)} />
                </span>
              </>
            ))}
            {showModal && <Modal setShowModal={setShowModal} item={currentTask} />}
          </ul>
        </section>
      )}
    </div>
  )
}

export default ListingTab;
