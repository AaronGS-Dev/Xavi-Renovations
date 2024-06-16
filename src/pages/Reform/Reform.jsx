import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import renovations from '../../assets/renovations.json'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './Reform.css'


const Reform = () => {
    const [reform, setReform] = useState({})
    const [imageView, setImageView] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const {id} = useParams();
    const [photoIndex, setPhotoIndex] = useState()
    const { setActiveLink, activeLink, langCode, setLangCode } = useActiveLink();
    useEffect(() => {
      setActiveLink('/ourwork')
    },[])
    

    useEffect(() => {
        const findById = (id) => {
            const result = renovations.find(item => item.id === parseInt(id));
            setReform(result)
        };
        findById(id)
    })

    useEffect(() => {
      const handleKeyDown = (event) => {
          if (imageView) {
              switch (event.key) {
                  case 'ArrowLeft':
                      handleLeftClick();
                      break;
                  case 'ArrowRight':
                      handleRightClick();
                      break;
                  default:
                      break;
              }
          }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
          document.removeEventListener('keydown', handleKeyDown);
      };
  }, [imageView, photoIndex, reform.photos]);

    const handlePhotoClick = (index) => {
      setSelectedPhoto(reform.photos[index]);
      setImageView(true);
      setPhotoIndex(index)
    };

    const handleClosePreview = () => {
      setSelectedPhoto(null);
      setImageView(false);
    };

    const handleLeftClick = () => {
      const previousIndex = photoIndex === 0 ? reform.photos.length - 1 : photoIndex - 1;
      setPhotoIndex(previousIndex);
      setSelectedPhoto(reform.photos[previousIndex]);
    }

    const handleRightClick = () => {
      const nextIndex = photoIndex === reform.photos.length - 1 ? 0 : photoIndex + 1;
      setPhotoIndex(nextIndex);
      setSelectedPhoto(reform.photos[nextIndex]);
    }
    
    const showPhotos = () => {
        if (reform && reform.photos) {
            const result = reform.photos.map((photo, index) => {
              return (
              <div key={index} className='size-[200px] xl:size-[250px] relative'>
                <img src={photo} alt="" className={`object-cover size-[200px] xl:size-[250px] z-0 cursor-zoom-in transform transition-transform hover:scale-[105%] ${imageView ? 'z-10' : ''}`} onClick={() => handlePhotoClick(index)}/>
              </div>
            )
            })
            return result
        } else {
            return null
        }
      }
    
    const handleNameLang = () => {
      if (langCode === 'es') {
        return reform.title_es;
      } else if (langCode === 'en') {
        return reform.title_en
      }
    }

  return (
    <div className='h-full w-full flex items-center justify-center'>
        <div className='h-[95%] w-[80%] flex flex-col-reverse justify-evenly
                        xl:flex items-center xl:justify-evenly overflow-auto gap-2'>
            <div id='reform-photo-display' className='h-[70%] w-[90%]
                                                      xl:h-[95%] xl:w-[70%] flex flex-wrap justify-center overflow-auto gap-2 content-start'>
                {showPhotos()}
            </div>
            <div className='xl:w-[25%]'>
              <h1 className='h-1/5 text-center'>{handleNameLang()}</h1>
              {/* <p>Descripcion que tendremos que poner en el JSON. Lorem ipsum bla bla bla</p> */}
            </div>
        </div>
        {imageView && (
                <div className='absolute inset-0 flex items-center justify-between bg-black bg-opacity-70' onClick={handleClosePreview}>
                  <KeyboardArrowLeftIcon sx={{ fontSize: 50, color: 'white' }} onClick={(e) => {
                    e.stopPropagation();
                    handleLeftClick()
                    }}/>
                  <img src={selectedPhoto} className='h-[90%] xl:h-full' alt="" />
                  <KeyboardArrowRightIcon sx={{ fontSize: 50, color: 'white' }} onClick={(e) => {
                    e.stopPropagation();
                    handleRightClick()
                    }}/>
                </div>
                )}
    </div>
  )
}

export default Reform