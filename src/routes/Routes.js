import React , {} from 'react'

import { Routes , Route } from 'react-router-dom'
import AddClient from '../add/AddClient'
import HomeScreen from '../home/HomeScreen'
import LoginScreen from '../login/LoginScreen'
import Profile from '../profile/ProfileCustomer'


const PrivateRoute = () => {
    
}

 const Router= () => {
    return(
       <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen/>} />
            <Route path="/profile/:id" element={<Profile/>} />
            <Route path='/add' element={<AddClient/>} />
        </Routes>
    )

}

export default Router