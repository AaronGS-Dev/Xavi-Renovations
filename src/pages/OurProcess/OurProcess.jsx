import React, { useEffect, useState } from 'react'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
// import './OurProcess.css'
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import LooksTwoRoundedIcon from '@mui/icons-material/LooksTwoRounded';
import Looks3RoundedIcon from '@mui/icons-material/Looks3Rounded';
import Looks4RoundedIcon from '@mui/icons-material/Looks4Rounded';
import Filter4Icon from '@mui/icons-material/Filter4';
import StaggerText from "react-stagger-text"
import { useTranslation } from 'react-i18next';


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
    const { t } = useTranslation();

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setTextAppear(true)
        }, 500);
    };
    const handleClick2 = () => {
        setIsClicked2(true);
        setTimeout(() => {
            setTextAppear2(true)
        }, 500);
    };
    const handleClick3 = () => {
        setIsClicked3(true);
        setTimeout(() => {
            setTextAppear3(true)
        }, 500);
    };
    const handleClick4 = () => {
        setIsClicked4(true);
        setTimeout(() => {
            setTextAppear4(true)
        }, 500);
    };
    useEffect(()=>{
        setTimeout(handleClick, 1000)
        setTimeout(handleClick2, 3000)
        setTimeout(handleClick3, 5000)
        setTimeout(handleClick4, 7000)
        
    },[])
    
    
    return (
        <div className='h-full w-full flex flex-col items-center justify-center'>
            <div className='h-full xl:h-[90%] w-full xl:w-[80%] xl:bg-[url("https://res.cloudinary.com/dytjoh7oh/image/upload/v1718290910/XaviRenovaties/Public/Home2_scwnkq.jpg")] flex justify-center items-center'>
                <div className='h-full xl:h-[90%] w-[100%] xl:w-[70%] bg-white bg-opacity-80 flex flex-col items-center gap-4 px-8 xl:p-8'>
                    <h1 className='text-lg xl:text-4xl pt-4'>{t('process.title')}</h1>
                    <p className='w-[80%] xl:text-2xl'>{t('process.description')}</p>
                    <div className='h-full w-[100%] flex flex-col justify-evenly'>
                        <div className='flex relative w-full z-10 h-[50px] '>
                            <div className={`absolute ${isClicked ? 'left-[0%] xl:left-[10%]' : 'left-[50%]'} transition-all duration-1000`}>
                                <LooksOneRoundedIcon sx={{ fontSize: 50 }}/>
                            </div>
                            {textAppear && 
                            <div className='absolute left-[20%] flex items-center h-full xl:text-xl'>
                                <StaggerText>
                                    {t('process.first')}
                                </StaggerText>
                            </div>}
                        </div>
                        <div className='flex relative w-full z-10 h-[50px]'>
                            <div className={`absolute ${isClicked2 ? 'left-[0%] xl:left-[10%]' : 'left-[50%]'} transition-all duration-1000`}>
                                <LooksTwoRoundedIcon sx={{ fontSize: 50 }}/>
                            </div>
                            {textAppear2 && 
                            <div className='absolute left-[20%] flex items-center h-full xl:text-xl'>
                                <StaggerText>
                                    {t('process.second')}
                                </StaggerText>
                            </div>}
                        </div>
                        <div className='flex relative w-full z-10 h-[50px]'>
                            <div className={`absolute ${isClicked3 ? 'left-[0%] xl:left-[10%]' : 'left-[50%]'} transition-all duration-1000`}>
                                <Looks3RoundedIcon sx={{ fontSize: 50 }}/>
                            </div>
                            {textAppear3 && 
                            <div className='absolute left-[20%] flex items-center h-full xl:text-xl'>
                                <StaggerText>
                                    {t('process.third')}
                                </StaggerText>
                            </div>}
                        </div>
                        <div className='flex relative w-full z-10 h-[50px]'>
                            <div className={`absolute ${isClicked4 ? 'left-[0%] xl:left-[10%]' : 'left-[50%]'} transition-all duration-1000`}>
                                <Looks4RoundedIcon sx={{ fontSize: 50 }}/>
                            </div>
                            {textAppear4 && 
                            <div className='absolute left-[20%] flex items-center h-full xl:text-xl'>
                                <StaggerText>
                                    {t('process.fourth')}
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