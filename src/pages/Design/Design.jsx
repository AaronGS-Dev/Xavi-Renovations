import React, { useState }  from 'react'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import { useTranslation } from 'react-i18next';
import './Design.css'

const Design = () => {
    const { setActiveLink } = useActiveLink();
    const { t } = useTranslation();
    setActiveLink('/design');

    const images = [
        "https://res.cloudinary.com/dytjoh7oh/image/upload/v1718024889/XaviRenovaties/Designs/dcde697f-c851-4eca-a5df-1623b85ba6a2_rga3pc.jpg",
        "https://res.cloudinary.com/dytjoh7oh/image/upload/v1718024887/XaviRenovaties/Designs/056fe5c2-ff7a-4625-9f1d-6f2645ef0d28_n2fyzc.jpg",
        "https://res.cloudinary.com/dytjoh7oh/image/upload/v1718024887/XaviRenovaties/Designs/0f210fe8-1bf0-41af-8af0-b560ca898048_qxuwqc.jpg",
        "https://res.cloudinary.com/dytjoh7oh/image/upload/v1718024887/XaviRenovaties/Designs/0e98e423-5c5a-49b9-816a-4c11fcbb3db5_bjr0jy.jpg",
        "https://res.cloudinary.com/dytjoh7oh/image/upload/v1718024888/XaviRenovaties/Designs/a5b98eec-ecc9-46ec-b871-28a952d30870_ceplri.jpg",
        "https://res.cloudinary.com/dytjoh7oh/image/upload/v1718024887/XaviRenovaties/Designs/71075be5-e2a6-4c0f-a9cf-564b72a22e4c_xcfy0x.jpg",
        "https://res.cloudinary.com/dytjoh7oh/image/upload/v1718024889/XaviRenovaties/Designs/868991b7-f886-4425-a865-54669f63a82e_w9gbvm.jpg",
        "https://res.cloudinary.com/dytjoh7oh/image/upload/v1718024888/XaviRenovaties/Designs/2fe6559c-6e53-434a-b24d-3794657d3433_vvhkjd.jpg",
        "https://res.cloudinary.com/dytjoh7oh/image/upload/v1718024888/XaviRenovaties/Designs/a9fd690b-51ea-4b37-b677-83b0b40ebc4a_yy7v4d.jpg",
        "https://res.cloudinary.com/dytjoh7oh/image/upload/v1718024889/XaviRenovaties/Designs/fe2f2af3-2881-4322-8efc-b7b6a081fa0c_cylrd6.jpg"
      ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const showDesigns = () => {
        const result = images.map((image, index) => {
            return (
                <img 
                key={index} 
                src={image} 
                alt="" 
                className='cursor-pointer max-w-full h-auto transition transform hover:scale-105 hover:shadow-lg' 
                onClick={() => setSelectedImage(image)}
            />
            )
        })
        return result
    }
      
    return (
        <div className='h-full w-[90%] flex justify-center items-center'>
            <div className='h-full w-2/6 flex justify-center items-center px-8 text-3xl'>{t('design.text')}</div>
            <div className='h-full w-4/6 flex justify-center items-center'>
                <div className='h-[80%] w-[90%] flex'>
                    <div className='w-[90%] flex justify-center items-center'>
                        <img src={selectedImage} alt="Selected Design" className='max-w-[80%] h-auto' />
                    </div>
                    <div id='minis' className='w-[20%] overflow-y-auto h-full'>
                        {showDesigns()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design