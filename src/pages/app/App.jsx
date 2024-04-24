import { useState } from 'react'
import './App.css'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Menu } from '../../components/Menu/Menu'

function App() {

  return (
    <>
      <div className='absolute right-0'>
        <Menu/>
      </div>
      <Header/>
      <div className='h-5/6'>
        <Outlet/>
      </div>
    </>
  )
}

export default App
