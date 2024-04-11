import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import renovations from '../../assets/renovations.json'

const Reform = () => {
    const [reform, setReform] = useState({})
    const {id} = useParams();

    useEffect(() => {
        const findById = (id) => {
            const result = renovations.find(item => item.id === parseInt(id));
            setReform(result)
        };
        findById(id)
    })
    
    const showPhotos= () => {
        if (reform && reform.photos) {
            const result = reform.photos.map((photo, index) => {
              return <img src={photo} alt="" className='object-cover size-[300px]'/>
            })
            return result
        } else {
            return null
        }
      }
    console.log(reform)

  return (
    <div className='bg-blue-100 h-full w-full flex flex-col items-center justify-center'>
        <div className='h-[95%] w-[80%] flex flex-wrap items-center bg-blue-300 overflow-auto gap-2'>
            <div className='h-[95%] w-[70%] flex flex-wrap bg-blue-500 overflow-auto gap-2'>
                {showPhotos()}
            </div>
        </div>
    </div>
  )
}

export default Reform