
import React from 'react';
import SideTab from './components/SideTab';
import ListingTab from './components/ListingTab';
import ContextProvider from './context/ContextProvider';
import './App.css';

function App() {
  return (
    <ContextProvider>
        <div className='container'>
          <SideTab/>
          <ListingTab/>
        </div>
    </ContextProvider>

  );
}

export default App;
