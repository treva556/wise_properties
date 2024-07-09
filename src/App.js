
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
          <div className=' bg-blue-400 p-10'>Hotels</div>
          <div className='bg-custom-pink p-10'>Apartments</div>
          <div className='bg-custom-yellow p-10'>Mansions</div>
        </div>
        <div className='flex justify-around mt-10'>

          <div className='bg-custom-blue p-10'>Why Choose Us?</div>
          <div className='bg-custom-pink p-10'>Add later</div>
        </div>
        <div className='flex justify-around mt-10'>
        <div className='bg-custom-pink p-10'>Our Client Reviews</div>

        <div className='bg-custom-cream p-10'>Things I'll add later</div>
        </div>
        <footer className='bg-custom-dark-green p-4 text-center text-white'>
          FOOTER
          ll 
        </footer>
        <div>
          jjj
        </div>
      </div>
    </div>
  );
}

export default App;

////