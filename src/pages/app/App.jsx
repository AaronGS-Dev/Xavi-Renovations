import './App.css'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <div className='h-5/6 flex justify-center'>
        <Outlet/>
      </div>
    </>
  )
}

export default App
