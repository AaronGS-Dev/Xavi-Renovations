import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import renovations from '../../assets/renovations.json'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const Reform = () => {
    const [reform, setReform] = useState({})
    const [imageView, setImageView] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const {id} = useParams();
    const { setActiveLink, activeLink } = useActiveLink();
    setActiveLink('/ourwork')

    useEffect(() => {
        const findById = (id) => {
            const result = renovations.find(item => item.id === parseInt(id));
            setReform(result)
        };
        findById(id)
    })

    const handlePhotoClick = (index) => {
      setSelectedPhoto(reform.photos[index]);
      setImageView(true);
    };

    const handleClosePreview = () => {
      setSelectedPhoto(null);
      setImageView(false);
    };
    
    const showPhotos= () => {
        if (reform && reform.photos) {
            const result = reform.photos.map((photo, index) => {
              return (
              <div>
                <img src={photo} alt="" className='object-cover size-[250px] cursor-pointer' onClick={() => handlePhotoClick(index)}/>
                {imageView && (
                <div className='absolute inset-0 flex items-center justify-between bg-black bg-opacity-50' onClick={handleClosePreview}>
                  <KeyboardArrowLeftIcon sx={{ fontSize: 50 }}/>
                  <img src={selectedPhoto} alt="" />
                  <KeyboardArrowRightIcon sx={{ fontSize: 50 }}/>
                </div>
                )}
              </div>
            )
            })
            return result
        } else {
            return null
        }
      }

  return (
    <div className='bg-blue-100 h-full w-full flex flex-col items-center justify-center'>
        <div className='h-[95%] w-[80%] flex flex-wrap items-center justify-evenly bg-blue-300 overflow-auto gap-2'>
            <div className='h-[95%] w-[70%] flex flex-wrap bg-blue-500 overflow-auto gap-2'>
                {showPhotos()}
            </div>
            <div className='h-[95%] w-[25%] bg-blue-400 p-5'>
              <h1 className='h-1/5'>{reform.name}</h1>
              <p>Descripcion que tendremos que poner en el JSON. Lorem ipsum bla bla bla</p>
            </div>
        </div>
    </div>
  )
}

export default Reform