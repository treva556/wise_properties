
import React from 'react';
import './App.css';


function App() {
  return (
    <div className='bg1'>
      <nav className='flex justify-end p-4 space-x-16 bg-gray-800'>
        <a href='#' className='c1 font-mono'>Services</a>
        <a href='#' className=' c1'>Contacts</a>
        <a href='#' className=' c1'>About Us</a>
      </nav>


      <div className='text-center mt-10'>
        <div className=' p-36'>
        <h1 className='text-5xl'>BUILD WITH US</h1>
        <p className='mt-4'>World's number one property developer</p>
        </div>
        <div className='flex justify-around mt-10'>
          <div className=' bg-blue-400 p-5 rounded'>Hotels</div>
          <div className=' bg-pink-300 p-2 rounded-2xl'>Apartments</div>
          <div className=' bg-yellow-300 p-2'>Mansions</div>
        </div>
        <div className=' bg-green-200'>
        <div className='flex justify-around mt-10'>

          <div className=' p-32'>Why Choose Us?</div>
          <div className='bg-custom-pink p-10'>Add later</div>
        </div>

        </div>
        <div className='flex justify-around mt-10'>
        <div className='bg-custom-pink p-10'>Our Client Reviews</div>

        <div className='bg-custom-cream p-10'>Things I'll add later</div>
        </div>
        <footer className=' h-32 bg-gray-800 p-4 text-center text-white'>
          FOOTER
        </footer>
      
      </div>
    </div>
  );
}

export default App;

////