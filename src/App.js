
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="relative items-center p-4 bg-amber-100 h-16">
        <p className="absolute right-0 text-3xl">Happy Coding!</p>
      </div>

      <div className="grid grid-cols-3 gap-5 ml-5 mr-5">
        <div className="item col-span-1 bg-blue-200 p-20 items-center">
          <p className=' text-center text-4xl font-bold text-red-700'> HAPPY CODING!</p>
        </div>
        <div className="item col-span-1 bg-blue-300 p-20">Item 2</div>
        <div className="item col-span-1 bg-blue-400 p-4">Item 3</div>
       
      </div>
...

      <div className=' items-end'>
        <p className=' items-end'>first</p>
        <p>mid</p>
        <p>end</p>
      </div>
      <div className="container mx-auto p-4">
      <div className="grid grid-rows-5 gap-5">
        <div className="row-span-1 bg-green-200 p-4">Item 1</div>
        <div className="row-span-2 bg-green-300 p-4">Item 2</div>
        <div className="row-span-1 bg-green-400 p-4">Item 3</div>
        <div className="row-span-1 bg-green-500 p-4">Item 4</div>
        <div className="row-span-1 bg-green-600 p-4">Item 5</div>
      </div>


    </div>

    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-5">
        <div className="item col-span-1 bg-blue-200 p-4">Item 1</div>
        <div className="item col-span-2 bg-blue-300 p-4">Item 2</div>
        <div className="item col-span-1 bg-blue-400 p-4">Item 3</div>
        <div className="item col-span-1 bg-blue-500 p-4">Item 4</div>
        <div className="item col-span-1 bg-blue-600 p-4">Item 5</div>
      </div>
    </div>

    </div>
  );
}

export default App;


