import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Biodata from './pages/Biodata'

export default function App () {


  return (
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/biodata' element={<Biodata/>} />

    </Routes>
      
  )
}