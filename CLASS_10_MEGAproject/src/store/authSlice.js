import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: num
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducer: {
        login: (state, action)=>{
            state.status =true
            state.userData = action.payload 
        },

        logOut: (state) => {
            state.status = false
            state.userData = null
        }


    }
})



export default authSlice.reducer;

export const {login, logOut} = authSlice.actions