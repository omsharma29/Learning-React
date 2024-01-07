import React from 'react'
import { useState } from 'react'


function Color() {
    const [color, colorChanger] = useState("black")
  return (
    <div className='w-full h-screen duration-200 '
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='rounded-xl flex flex-wrap justify-center gap-4 shadow-2xl bg-white px-3'>
          <button onClick={()=> colorChanger("Green")} className='px-4 py-1 rounded-full outline-none shadow-2xl text-white' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={()=> colorChanger("red")} className='px-4 py-1 rounded-full outline-none shadow-2xl text-white' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={()=> colorChanger("Pink")} className='px-4 py-1 rounded-full outline-none shadow-2xl text-white' style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={()=> colorChanger("Blue")} className='px-4 py-1 rounded-full outline-none shadow-2xl text-white' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={()=> colorChanger("Yellow")} className='px-4 py-1 rounded-full outline-none shadow-2xl text-white' style={{ backgroundColor: "yellow" }}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default Color