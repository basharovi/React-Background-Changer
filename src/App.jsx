import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('grey');

  return (
    <div className="w-full h-screen transition-all duration-1000 ease-in flex justify-center items-center"
    style={{backgroundColor: color}}
    >

    <div className="fixed left-5 flex flex-col justify-center gap-4">
     
      <button className="bg-red-500 px-3 py-1 rounded-lg shadow-md"
              onClick={() => setColor("darkred") } >Red</button>

      <button className="bg-blue-400 px-3 py-1 rounded-lg shadow-md"
              onClick={() => setColor("darkblue") }>Blue</button>
      
      <button className="bg-green-400 px-3 py-1 rounded-lg shadow-md"
              onClick={() => setColor("green") }>Green</button>
    </div>

    <div className="fixed right-5 flex flex-col justify-center gap-4">
     

    <button className="bg-teal-400 px-3 py-1 rounded-lg shadow-md"
              onClick={() => setColor("teal") }>Teal</button>

      <button className="bg-yellow-500 px-3 py-1 rounded-lg shadow-md"
              onClick={() => setColor("yellow") } >Yellow</button>

      <button className="bg-cyan-400 px-3 py-1 rounded-lg shadow-md"
              onClick={() => setColor("cyan") }>Cyan</button>
    </div>

    </div>

    
  )
}

export default App
