import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('lightblue');

  return (
    <div className="w-full h-screen duration-500"
    style={{backgroundColor: color}}
    >
      
    </div>
  )
}

export default App
