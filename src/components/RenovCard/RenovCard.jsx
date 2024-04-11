import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RenovCard = ({name, cover, id}) => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div>
        <Link to={`/reform/${id}`}>
            <div id="card-container" className='size-[300px] relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={cover} alt="" className='object-cover w-full h-full'/>
                {isHovered && <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-0 hover:bg-opacity-50 transition-bg-opacity duration-1000 ${isHovered ? 'opacity-50' : 'opacity-0'}"> {name} </div>}
            </div>
        </Link>
    </div>
  )
}

export default RenovCard