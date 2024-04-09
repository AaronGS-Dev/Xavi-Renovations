import React, { useEffect } from 'react'
import './OurWork.css'

const OurWork = () => {

  const worksList = [
    '../public/image/logo2.png',
    '../public/image/logo2.png',
    '../public/image/logo2.png',
    '../public/image/logo2.png',
    '../public/image/logo2.png',
    '../public/image/logo2.png',
    '../public/image/logo2.png',
    '../public/image/logo2.png',
    '../public/image/logo2.png',
    '../public/image/logo2.png',
    '../public/image/logo2.png',
    '../public/image/logo2.png',
    '../public/image/logo2.png',
  ]

  const showWorks = () => {
    const result = worksList.map((work, index) => {
      return <img src={work} key={index} className='border border-black size-[300px]' />
    })
    return result
  }

  return (
    <div className='bg-blue-100 h-full w-full flex flex-col items-center '>
        <h1 className='h-[10%] flex justify-center items-center'>Our Works</h1>
        <div id='work-display' className='h-[85%] w-[85%] flex flex-wrap justify-center bg-blue-300 overflow-auto gap-2'>{showWorks()}</div>
    </div>
  )
}

export default OurWork