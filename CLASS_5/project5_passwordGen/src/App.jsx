import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [Na, setNa] = useState(false)
  const [Charcter, setCharacter] = useState(false)
  const [password, setpassword] = useState("")
  const passwrodref = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(Na) str += "0123456789"
    if(Charcter) str += "~!@#$%^&*()_+" 

    for (let i = 0; i < length; i++) {
      let arr = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(arr)
    }
    setpassword(pass)
 
  }, [length,Na,Charcter,setpassword])

const copytoclipboard = useCallback(()=>{
  passwrodref.current?.select()
  passwrodref.current?.setSelectionRange(0,999)
  window.navigator.clipboard.writeText(password)
},[password])
  
useEffect(()=>{passwordGenerator()}, [length,Na,Charcter,passwordGenerator, setpassword])
  return (
    <> 
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-gray-800 text-center  '>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 text-center'>
        <input type="text"
        value={password}
        ref={passwrodref} 
        placeholder='password'
        className='outline-none w-full py-1 px-3'
        readOnly/>
        <button onClick={copytoclipboard} className='outline-none bg-green-600 text-white px-3 py-0.5 shrink-0' >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input onChange={(e)=>{setLength(e.target.value)}} type="range" min={8} max={100} value={length} className='cursor-pointer' />
          <label>length: {length} </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {Na} 
          onChange={()=>{setNa((prev) => !prev)}}/>
          <label htmlFor="">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {Charcter}
          onChange={()=>{setCharacter((prev) => !prev)}}/>
          <label htmlFor="">Charcter</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
