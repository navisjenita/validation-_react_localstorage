import React from 'react'
import Login from "./login"
import Register from './Signup.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Table from './table'



export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/table' element={<Table/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
