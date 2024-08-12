
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
          <h1 className='text-3xl md:text-5xl p-8'>BUILD WITH US</h1>
          <p className='mt-4'>World's number one property developer</p>
        </div>
        <div>
          <h2>About Us </h2>
        </div>
        <div>
          <h2> What we Do</h2>
          <div className=' grid grid-cols-3'>
          <p>  Property management
          </p>
          <p> Buying,remodelling & reselling estates </p>
          <p> Building modern structures </p>


          </div>
          
        </div>
        <div className='flex flex-col md:flex-row justify-around mt-10 mr-6 p-4'>
          <div className='bg-blue-400 p-5 rounded text-sm m-2 md:m-0 w-full md:w-auto'>
            Hotels
          </div>
          <div className='bg-pink-300 p-5 rounded m-2 md:m-0 w-full md:w-auto shadow-xl'>Apartments</div>
          <div className='bg-pink-300 p-5 rounded m-2 md:m-0 w-full md:w-auto shadow-xl'>Buildings</div>

          <div className='bg-yellow-300 p-5 m-2 md:m-0 w-full md:w-auto rounded'>Other</div>
        </div>
        <div>
          <h2>Mission</h2>
        </div>
        <div>
          <h2> Assets numbers</h2>
        </div>
        <div>
          <h2> Top Management </h2>
        </div>
        <div>
          <h2> Top Clients </h2>
        </div>
        

        <footer className=' columns-2 h-32 bg-gray-800 p-4 text-center text-white'>
          <div>
          FOOTER
          </div>
          <div>
          <h6> FOOTER </h6>
            <p> contacts & headquaters</p>
          </div>
          
        </footer>
      </div>
    </div>
  );
}
//
export default App;

////