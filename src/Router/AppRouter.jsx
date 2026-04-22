import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../Pages/Home'
import Detail from '../Pages/Detail'
import Fave from '../Pages/Fave'

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
   <Route path='/DetailPage' element={ <Detail />} />
   <Route path='/Favorites' element={ <Fave />} />
    </Routes>
  )
}

export default AppRouter