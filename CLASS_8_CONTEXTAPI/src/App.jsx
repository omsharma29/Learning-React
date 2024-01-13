import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './context/components/Login'
import Profile from './context/components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React</h1>
      <Login/>
      <Profile />
    </UserContextProvider>
  )
}

export default App
