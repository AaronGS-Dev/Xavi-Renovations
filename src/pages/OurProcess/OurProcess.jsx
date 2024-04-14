import React, { useState } from 'react'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
// import './OurProcess.css'
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import StaggerText from "react-stagger-text"


const OurProcess = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [textAppear, setTextAppear] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [textAppear2, setTextAppear2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [textAppear3, setTextAppear3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);
    const [textAppear4, setTextAppear4] = useState(false);
    const { setActiveLink } = useActiveLink();
    setActiveLink('/process')

    const handleClick = () => {
        setIsClicked(!isClicked);
        setTimeout(() => {
            setTextAppear(!textAppear)
        }, 500);
    };
    const handleClick2 = () => {
        setIsClicked2(!isClicked2);
        setTimeout(() => {
            setTextAppear2(!textAppear2)
        }, 500);
    };
    const handleClick3 = () => {
        setIsClicked3(!isClicked3);
        setTimeout(() => {
            setTextAppear3(!textAppear3)
        }, 500);
    };
    const handleClick4 = () => {
        setIsClicked4(!isClicked4);
        setTimeout(() => {
            setTextAppear4(!textAppear4)
        }, 500);
    };
    
    return (
        <div className='h-full w-full flex flex-col items-center justify-center'>
            <div className='h-[90%] w-[80%] bg-[url("https://res.cloudinary.com/dytjoh7oh/image/upload/v1712826578/XaviRenovaties/asdfad_zwuhoa.jpg")] flex justify-center items-center'>
                <div className='h-[90%] w-[80%] bg-blue-100 flex flex-col items-center gap-4 p-8'>
                    <h1 className='text-4xl'>Nuestro proceso en Xavi Renovaties</h1>
                    <p className='w-[70%] text-[20px]'>Si estás pensando en renovar uno, ¡has venido al lugar indicado! Xavi Renovatie mantendrá una conversación contigo en la que identificaremos y describiremos claramente tus deseos.</p>
                    <div className='h-full w-[80%] flex flex-col justify-evenly'>
                        <div className='flex relative bg-red-100 z-10 h-[50px] ' onClick={handleClick}>
                            <div className={`absolute ${isClicked ? 'left-[0%]' : 'left-[50%]'} transition-all duration-1000`}>
                                <Filter1Icon sx={{ fontSize: 50 }}/>
                            </div>
                            {textAppear && 
                            <div className='absolute left-[10%] flex items-center h-full'>
                                <StaggerText>
                                    Mantendremos una conversación contigo en la que identificaremos y describiremos claramente sus deseos.
                                </StaggerText>
                            </div>}
                        </div>
                        <div className='flex relative bg-red-100 z-10 h-[50px]' onClick={handleClick2}>
                            <div className={`absolute ${isClicked2 ? 'left-[0%]' : 'left-[50%]'} transition-all duration-1000`}>
                                <Filter2Icon sx={{ fontSize: 50 }}/>
                            </div>
                            {textAppear2 && 
                            <div className='absolute left-[10%] flex items-center h-full'>
                                <StaggerText>
                                    El equipo crea un asesoramiento adecuado y profesional en un plan de reforma..
                                </StaggerText>
                            </div>}
                        </div>
                        <div className='flex relative bg-red-100 z-10 h-[50px]' onClick={handleClick3}>
                            <div className={`absolute ${isClicked3 ? 'left-[0%]' : 'left-[50%]'} transition-all duration-1000`}>
                                <Filter3Icon sx={{ fontSize: 50 }}/>
                            </div>
                            {textAppear3 && 
                            <div className='absolute left-[10%] flex items-center h-full'>
                                <StaggerText>
                                    Todos los trabajos y costes se pueden planificar basándose en el plan de reforma.
                                </StaggerText>
                            </div>}
                        </div>
                        <div className='flex relative bg-red-100 z-10 h-[50px]' onClick={handleClick4}>
                            <div className={`absolute ${isClicked4 ? 'left-[0%]' : 'left-[50%]'} transition-all duration-1000`}>
                                <Filter4Icon sx={{ fontSize: 50 }}/>
                            </div>
                            {textAppear4 && 
                            <div className='absolute left-[10%] flex items-center h-full'>
                                <StaggerText>
                                    Después de la aprobación del cliente, se iniciará la reforma.
                                </StaggerText>
                            </div>}
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProcess