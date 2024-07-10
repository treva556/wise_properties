
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
        <p>hh</p>
        <div className='bg-green-200'>
          <div className='flex flex-col md:flex-row justify-around mt-5'>
            <div className='p-10 md:p-32 text-2xl font-bold'>Why Choose Us?</div>
            <div className='bg-custom-pink p-5 md:p-10'>
              <p> Here at Ser, we are dedicated to build our clients their dream properties</p>
            </div>
          </div>
        </div>

        <div className='bg-green-200'>
          <div className='flex flex-col md:flex-row justify-around mt-5'>
            <div className='p-5 md:p-16 text-2xl font-bold'>Our Projects</div>
            <div className='bg-custom-pink p-3 md:p-5'>
              <p> Link</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-around mt-4'>
          <div className='bg-custom-pink p-5 md:p-10'>Our Client Reviews</div>
          <div className='bg-custom-cream p-5 md:p-10'>Things I'll add later</div>
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

export default App;

////