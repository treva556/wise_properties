

// src/App.jsx
import React from 'react';
import '../App.css';
import Hotel from '../assets/hotel.jpeg';
import Build from '../assets/build.jpeg';
import House from '../assets/house.jpeg';
import Other from '../assets/other.jpeg';
import Phone from '../assets/phone.png';
import Counter from '../sections/counter';

function Home() {
  return (
    <div className='bg1 lg:px-52'>
      <nav className='flex justify-end p-4 space-x-4 md:space-x-16 bg-gray-800 fixed top-0 left-0 w-full'>
        <a href='/' className='c1 font-mono'>Home</a>
        <a href='/showcase' className='c1 font-mono '> Showcase </a>

      </nav>

      <div className='text-center mt-10 '>
      <div className='text-center mt-10'>
  <div className='p-5 md:p-20 border border-b-blue-950'>
    <h1 className='text-3xl md:text-5xl p-8'>BUILD WITH US</h1>
    <p className='mt-4'>Leading the way in innovative property development.</p>
    <div className='mt-8 flex justify-center'>
      <div className='p-2 px-4 rounded-full shadow-xl flex items-center justify-center bg-red-600'>
        <img src={Phone} alt="Phone" className='bg-white rounded-full p-1 w-6 h-6 object-cover mr-2' />
        <div className='text-lg font-semibold text-white'>+254795156246</div>
      </div>
    </div>
  </div>
</div>
        <div className=' flex flex-row justify-center gap-4' >
          <div className=' bg-gray-400 p-2'>
            Buy
          </div>
          <div className=' bg-gray-400 p-2'>
            Sell
          </div>
          <div className=' bg-gray-400 p-2'> 
            Rent In
          </div>
          <div className=' bg-gray-400 p-2'>
            Rent Out
          </div>
        </div>

        <div id='about' className='p-4'>
          <h2 className='text-2xl font-semibold'>About Us</h2>
          <p className='mt-2'>At Wise Properties, we are committed to redefining the property development landscape. Our team of experts combines passion with experience to deliver exceptional results in every project.</p>
        </div>

        <div className='p-4 b12'>
          <h2 className='text-2xl font-semibold'>What We Do</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
            <div className='p-4'>
              <h3 className='text-xl font-semibold'>Property Management</h3>
              <p className='mt-2'>Expert management services to ensure the best value and efficiency for your properties.</p>
            </div>
            <div className='p-4'>
              <h3 className='text-xl font-semibold'>Buying, Remodelling & Reselling</h3>
              <p className='mt-2'>Transforming properties through buying, remodelling, and reselling to maximize value.</p>
            </div>
            <div className='p-4'>
              <h3 className='text-xl font-semibold'>Building Modern Structures</h3>
              <p className='mt-2'>Designing and constructing state-of-the-art buildings & homes that set new standards.</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 lg:p md:grid-cols-4 justify-around mt-10 mr-6 p-4'>
          <div className='b12 lg:h-80 p-5 rounded m-2 md:m-0 w-full md:w-auto flex flex-col items-center'>
            <img src={Hotel} alt="Hotels" className='w-full h-60 object-cover rounded mb-2'/>
            <div className='text-lg font-semibold'>Hotels</div>
          </div>
          <div className='b11 p-5 rounded m-2 md:m-0 w-full md:w-auto shadow-xl flex flex-col items-center'>
            <img src={House} alt="Apartments" className='w-full h-60 object-cover rounded mb-2'/>
            <div className='text-lg font-semibold'>Apartments</div>
          </div>
          <div className='bg-pink-300 p-5 rounded m-2 md:m-0 w-full md:w-auto shadow-xl flex flex-col items-center'>
            <img src={Build} alt="Buildings" className='w-full h-60 object-cover rounded mb-2'/>
            <div className='text-lg font-semibold'>Buildings</div>
          </div>
          <div className='bg-yellow-300 p-5 rounded m-2 md:m-0 w-full md:w-auto flex flex-col items-center'>
            <img src={Other} alt="Other" className='w-full h-60 object-cover rounded mb-2'/>
            <div className='text-lg font-semibold'>Other</div>
          </div>
        </div>

        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Our Work
        </button>

        <div className='p-4'>
          <h2 className='text-2xl font-semibold'>Mission</h2>
          <p className='mt-2'>Our mission is to deliver excellence in every aspect of property development, setting benchmarks for quality, innovation, and sustainability. We strive to exceed our clients' expectations by providing exceptional service and results.</p>
        </div>

        <div>
           <h6 className=' text-2xl font-bold' >Featured Properties</h6>
           <div className=' py-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
            <div> House 1</div>
            <div> Apartment 1</div>
            <div> Ranch</div>
            <div> House 2</div>
           </div>
        </div>

        <div className='p-4'>
          <h2 className='text-2xl font-semibold'>Assets Numbers</h2>
          <div className=' grid grid-cols-3 py-4'>
            <div className='text-xl font-bold'>Clients: <Counter endValue={3000} duration={5000} /></div>
            <div className='text-xl font-bold'>Properties: <Counter endValue={350} duration={5000} /></div>
            <div className='text-xl font-bold'>Total Assets $<Counter endValue={100} duration={4000} />B</div>
          </div>
        </div>

        <div className='p-4'>
          <h2 className='text-2xl font-semibold'>Top Management</h2>
          <p className='mt-2'>Meet our team of industry leaders who drive our vision forward with expertise and dedication. Our top management is committed to leading our company to new heights of success.</p>
          <div className=' p-4 grid grid-cols-3'> 
            <div>1. Director</div>
            <div>2. CFO</div>
            <div>3. CMO</div>
          </div>
        </div>

        {/* <div className=" w-80 h-48 bg-gradient-to-br from-red-800 to-red-400 p-4 rounded-lg">
        <p className="text-white">Your content here</p>
      </div> */}

        <div className='p-4 b11 '>
          <h2 className='text-2xl font-semibold'>Top Clients</h2>
          <p className='mt-2'>We are proud to work with a diverse range of esteemed clients who trust us with their property needs. Our client base includes leading businesses and individuals from various sectors.</p>
          <div className=' px-20 py-4 grid grid-cols-3'> 
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
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

export default Home;