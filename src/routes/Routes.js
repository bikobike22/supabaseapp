import React , {} from 'react'

import { Routes , Route } from 'react-router-dom'
import AddClient from '../add/AddClient'
import HomeScreen from '../home/HomeScreen'
import Profile from '../profile/Profile'

 const Router= () => {
    return(
       <Routes>
            <Route path="/supabaseapp" element={<HomeScreen/>} />
            <Route path="/supabaseapp/profile" element={<Profile/>} />
            <Route path='/supabaseapp/add' element={<AddClient/>} />
        </Routes>
    )

}

export default Router