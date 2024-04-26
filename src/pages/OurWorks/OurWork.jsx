import React, { useEffect } from 'react'
import './OurWork.css'
import renovations from '../../assets/renovations.json'
import RenovCard from '../../components/RenovCard/RenovCard'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';


const OurWork = () => {
  const { setActiveLink, activeLink, langCode, setLangCode } = useActiveLink();
  setActiveLink('/ourwork')

  const showRenov = () => {
    const result = renovations.map((renovation, index) => {
      const handleNameLang = () => {
        if (langCode === 'es') {
          return renovation.name_es;
        } else if (langCode === 'en') {
          return renovation.name_en
        }
      }
      return <RenovCard name={handleNameLang()} cover={renovation.cover} key={index} id={renovation.id}/>
    })
    return result
  }



  return (
    <div className='h-full w-full flex flex-col items-center '>
      <div className='h-[95%] w-[90%] flex justify-center items-end'>
        <div id='work-display' className='h-[95%] w-full flex flex-wrap justify-center overflow-auto gap-2'>{showRenov()}</div>
      </div>
    </div>
  )
}

export default OurWork