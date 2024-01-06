import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)
  const addValue = ()=>{
    setcounter(counter+1)
  }
  const decValue = ()=>{
   if(counter > 0 ){
    setcounter(counter - 1)
   }else{
    setcounter(0)
   }
  }
  return(
    <>
      <h1>Helo</h1>
      <h2>Counter Value: {counter }</h2>
      <button onClick={addValue}>Add Value: {counter}</button> <br /> <br />
      <button onClick={decValue}>Decrease Value: {counter}</button>
    </>
  )
}

export default App
