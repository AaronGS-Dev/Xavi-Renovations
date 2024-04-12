import React, { useEffect } from 'react'
import './OurWork.css'
import renovations from '../../assets/renovations.json'
import RenovCard from '../../components/RenovCard/RenovCard'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';


const OurWork = () => {
  const { setActiveLink, activeLink } = useActiveLink();
  setActiveLink('/ourwork')

  const showRenov = () => {
    const result = renovations.map((renovation, index) => {
      return <RenovCard name={renovation.name} cover={renovation.cover} key={index} id={renovation.id}/>
    })
    return result
  }

  return (
    <div className='h-full w-full flex flex-col items-center '>
      <div className='h-[90%] w-[80%] flex justify-center items-center'>
        <div id='work-display' className='h-[85%] w-full flex flex-wrap justify-center overflow-auto gap-2'>{showRenov()}</div>
      </div>
    </div>
  )
}

export default OurWork