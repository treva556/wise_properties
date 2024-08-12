

import React from 'react';
import './App.css';
import Hotel from './assets/hotel.jpeg';
import Build from './assets/build.jpeg';
import House from './assets/house.jpeg';
import Other from './assets/other.jpeg';

function App() {
  return (
    <div className='bg1'>
      <nav className='flex justify-end p-4 space-x-4 md:space-x-16 bg-gray-800 fixed top-0 left-0 w-full'>
        <a href='#' className='c1 font-mono'>Services</a>
        <a href='#' className='c1'>Contacts</a>
        <a href='#' className='c1'>About Us</a>
      </nav>

      <div className='text-center mt-10'>
        <div className='p-5 md:p-20'>
          <h1 className='text-3xl md:text-5xl p-8'>BUILD WITH US</h1>
          <p className='mt-4'>World's number one property developer</p>
        </div>
        <div>
          <h2>About Us</h2>
        </div>
        <div>
          <h2>What we Do</h2>
          <div className='grid grid-cols-3'>
            <p>Property management</p>
            <p>Buying, remodelling & reselling estates</p>
            <p>Building modern structures</p>
          </div>
        </div>
        <div className=' grid grid-cols-2 lg:grid-cols-4 lg:px-96  md:grid-cols-4 justify-around mt-10 mr-6 p-4'>
          <div className='bg-blue-400 lg:h-80 p-5 rounded m-2 md:m-0 w-full md:w-auto'>
            <img src={Hotel} alt="Hotels" className='w-full h-60 object-cover rounded mb-2'/>
            <div>Hotels</div>
          </div>
          <div className='bg-pink-300 p-5 rounded m-2 md:m-0 w-full md:w-auto shadow-xl'>
            <img src={House} alt="Apartments" className='w-full h-60 object-cover rounded mb-2'/>
            <div>Apartments</div>
          </div>
          <div className='bg-pink-300 p-5 rounded m-2 md:m-0 w-full md:w-auto shadow-xl'>
            <img src={Build} alt="Buildings" className='w-full h-60 object-cover rounded mb-2'/>
            <div>Buildings</div>
          </div>
          <div className='bg-yellow-300 p-5 rounded m-2 md:m-0 w-full md:w-auto'>
            <img src={Other} alt="Other" className='w-full h-32 object-cover rounded mb-2'/>
            <div>Other</div>
          </div>
        </div>

        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Our Work
        </button>

        <div>
          <h2>Mission</h2>
        </div>
        <div>
          <h2>Assets numbers</h2>
        </div>
        <div>
          <h2>Top Management</h2>
        </div>
        <div>
          <h2>Top Clients</h2>
        </div>

        <footer className='columns-2 h-32 bg-gray-800 p-4 text-center text-white'>
          <div>
            FOOTER
          </div>
          <div>
            <h6>FOOTER</h6>
            <p>Contacts & headquarters</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;