import React from 'react';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
const home = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-100">
        <div className='h-[40vh] w-full bg-cyan-300 absolute z-1'></div>
        <div className='flex '>
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default home;