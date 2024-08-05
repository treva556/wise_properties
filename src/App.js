
import React from 'react';
import './App.css';
import Projects from './sections/projects';

function App() {
  return (
    <div className='bg1'>
      <nav className='flex justify-end p-4 space-x-4 md:space-x-16 bg-gray-800 fixed top-0 left-0 w-full '>
        <a href='#' className='c1 font-mono'>Services</a>
        <a href='#' className='c1'>Contacts</a>
        <a href='#' className='c1'>About Us</a>
      </nav>

      <div className='text-center mt-10'>
        <div className='p-5 md:p-20 '>
          <h1 className='text-3xl md:text-5xl'>BUILD WITH US</h1>
          <p className='mt-4'>World's number one property developer</p>
        </div>
        <div className='flex flex-col md:flex-row justify-around mt-10 mr-6'>
          <div className='bg-blue-400 p-5 rounded text-sm m-2 md:m-0 w-full md:w-auto'>
            Hotels
            <p> We at ser have various hotels,</p>
            <p> click below for more</p>
          </div>
          <div className='bg-pink-300 p-5 rounded m-2 md:m-0 w-full md:w-auto shadow-xl'>Apartments</div>
          <div className='bg-yellow-300 p-5 m-2 md:m-0 w-full md:w-auto rounded'>Mansions</div>
        </div>
        
        <footer className=' columns-2 h-32 bg-gray-800 p-4 text-center text-white'>
          <div>
          FOOTER
          </div>
          <div>
          FOOTER
          </div>
          
        </footer>
      </div>
    </div>
  );
}
//
export default App;

////