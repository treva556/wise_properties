
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='bg-custom-cream'>
      <nav className='flex justify-around p-4'>
        <a href='#' className='text-black'>Services</a>
        <a href='#' className='text-black'>Contacts</a>
        <a href='#' className='text-black'>About Us</a>
      </nav>
      <div className='text-center mt-10'>
        <h1 className='text-5xl'>BUILD WITH US</h1>
        <p className='mt-4'>World's number one property developer</p>
        <div className='flex justify-around mt-10'>
          <div className='bg-custom-blue p-10'>Hotels</div>
          <div className='bg-custom-pink p-10'>Apartments</div>
          <div className='bg-custom-yellow p-10'>Mansions</div>
        </div>
        <div className='mt-10'>
          <div className='bg-custom-blue p-10'>Why Choose Us?</div>
          <div className='bg-custom-pink p-10'>Our Client Reviews</div>
          <div className='bg-custom-yellow p-10'>Things I'll add later</div>
        </div>
        <div className='bg-custom-cream p-10'>Things I'll add later</div>
        <footer className='bg-custom-dark-green p-4 text-center text-white'>
          FOOTER
        </footer>
      </div>
    </div>
  );
}

export default App;

////