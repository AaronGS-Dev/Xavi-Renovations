import './App.css'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Menu } from '../../components/Menu/Menu'

function App() {

  return (
    <>
      <Header/>
      
      <div className='h-5/6 flex justify-center'>
        <Outlet/>
      </div>
      <div id='languages' className="fixed inset-0 bg-none z-10 pointer-events-none flex items-start justify-end m-4">
        <div className='pointer-events-auto'>
          <Menu/>
        </div>
      </div>
    </>
  )
}

export default App
