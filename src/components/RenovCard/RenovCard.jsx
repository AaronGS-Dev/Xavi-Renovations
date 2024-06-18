import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const RenovCard = ({name, cover, id}) => {
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate()
    const handleClick = (path) => {
      navigate(path);
    };
  return (
    <div>
            <div id="card-container" className='size-[300px] xl:size-[550px] relative cursor-pointer' onClick={() => handleClick(`/reform/${id}`)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={cover} alt="" className='xl:object-cover w-full h-full' />
                {isHovered && <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-0 hover:bg-opacity-50 transition-bg-opacity duration-1000 text-lg xl:text-2xl ${isHovered ? 'opacity-50' : 'opacity-0'}"> {name} </div>}
            </div>
    </div>
  )
}

export default RenovCard