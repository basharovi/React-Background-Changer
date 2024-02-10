import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('grey');

  return (
    <div className="w-full h-screen transition-all duration-1000 ease-in flex justify-center items-center"
    style={{backgroundColor: color}}
    >

    <div className="fixed right-5 flex flex-col justify-center inset-y-0 gap-3">
     
      <button className="bg-red-400 px-3 py-1 rounded-lg shadow-md"
              onClick={() => setColor("darkred") } >Red</button>

      <button className="bg-blue-400 px-3 py-1 rounded-lg"
              onClick={() => setColor("lightblue") }>Blue</button>
      
      <button className="bg-green-400 px-3 py-1 rounded-lg"
              onClick={() => setColor("green") }>Green</button>
    </div>

    </div>

    
  )
}

export default App
