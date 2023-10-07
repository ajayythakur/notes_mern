import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from '../Components/SignUp'
import Login from '../Components/Login'
import NotesComp from '../Components/NotesComp'
import UpdateNote from '../Components/UpdateNote'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/get/notes' element={<NotesComp />} />
        <Route path='/update/note' element={<UpdateNote />} />
      </Routes>
    </div>
  )
}

export default Routing