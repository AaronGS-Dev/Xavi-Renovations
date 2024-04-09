import { useState } from 'react'
import './App.css'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <div className='h-5/6'>
        <Outlet/>
      </div>
    </>
  )
}

export default App
