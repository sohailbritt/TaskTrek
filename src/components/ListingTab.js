import React,{useContext, useEffect, useState} from 'react';
import { LuCheckCircle } from "react-icons/lu";
import InputField from './InputField';
import Modal from './Modal';
import Button from './Button';
import {taskTrekContext, userContext } from '../context/Context';
import './ListingTab.css'

const ListingTab = () => {
  const [newTask, setNewTask] = useState(null);
  const [currentTask, setCurrenTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {userData} = useContext(userContext);
  const {task} = useContext(taskTrekContext);

  //task to add
  const getInputData = (data) => {
    setNewTask(data);
  }


  // update or delete popup
  const handlePopup = (item) => {
    setShowModal(true);
    setCurrenTask(item);
  }


  return (
    <div classNataskme='listingTab'>
      {/* ------------------------dashboard-------------- */}
        {userData[0].defaulter === 'dashboard' && (
          <section>
          <h2 className='wrapper listing-title'>Dashboard</h2>
          <p className='wrapper listing-subtitle'>{`Hey ${userData[0].user}`}</p>
          <div className='wrapper'>
            <div className='form-wrapper'>
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
                    <span>{item.isCompleted && <LuCheckCircle color='green' fontSize = '18px'/> }
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
          <ul>
            {task.map((item)=>
            <>
              <li key={item.task} className='items' onClick={()=>{handlePopup(item)}}>{item.task} <span>{item.isCompleted && <LuCheckCircle color='green' fontSize = '18px'/>}</span>
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
          <ul>
            {task.map((item)=>
            <>
              {userData[0].defaulter === 'completed' && item.isCompleted === true && (<li key={item.task}className='items'>{item.task} <span>{item.isCompleted && <LuCheckCircle color='green' fontSize = '18px'/> }</span>
                </li>)}
            </>)}
          </ul>
        </section>) }















        {/* <div className='dashboard-item'>
            <div className='d-item'>1</div>
            <div className='d-item'>2</div>
        </div>
        <div className='dashboard-item'>
            <div className='d-item'>3</div>
            <div className='d-item'>4</div>
        </div> */}
    </div>
  )
}

export default ListingTab