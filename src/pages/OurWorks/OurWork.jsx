import React, { useEffect } from 'react'
import './OurWork.css'
import renovations from '../../assets/renovations.json'
import RenovCard from '../../components/RenovCard/RenovCard'

const OurWork = () => {


  const showRenov = () => {
    const result = renovations.map((renovation, index) => {
      return <RenovCard name={renovation.name} cover={renovation.cover} key={index} id={renovation.id}/>
    })
    return result
  }

  return (
    <div className='bg-blue-100 h-full w-full flex flex-col items-center '>
        <h1 className='h-[10%] flex justify-center items-center'>Our Works</h1>
        <div id='work-display' className='h-[85%] w-[85%] flex flex-wrap justify-center bg-blue-300 overflow-auto gap-2'>{showRenov()}</div>
    </div>
  )
}

export default OurWork