import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/configiration'
import {logOut} from '../../store/authSlice'

function LogOutBtn() {
    const dispatch = useDispatch()
    const logOutHandler = ()=> {
        authService.userlogOut().then(()=>{
            dispatch(logOut())
        })
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick = {logOutHandler}>Logout</button>
  )
}

export default LogOutBtn