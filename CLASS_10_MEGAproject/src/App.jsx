import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authservice from './appwrite/auth'
import {login, logOut} from './store/authSlice'
import { Footer, Header } from './components'



function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrUser()
      .then((userData) => {
        if(userData){
            dispatch(login({userData}))
        }else{dispatch(logOut())}
   })
      .finally(()=> setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between
     bg-gray-400'>
      <div className='w-full block'>
        <Header /> 
        <main>
          {/* <Outlet></Outlet> */}
        </main>
        <Footer /> 
      </div>
     </div>
  ) : (null)

}

export default App
