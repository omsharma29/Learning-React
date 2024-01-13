import React, { useContext, useState } from 'react'
import UserContext from '../UserContext'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='username'  /> <br />
        <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login