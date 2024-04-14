import React from 'react'
import './ContactUs.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';


const ContactUs = () => {
    const { setActiveLink, activeLink } = useActiveLink();
    setActiveLink('/contact')
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
        <div className='h-[90%] w-[75%] flex items-center'>
            <div className='h-[90%] w-[60%] bg-[url("https://res.cloudinary.com/dytjoh7oh/image/upload/v1712826578/XaviRenovaties/asdfad_zwuhoa.jpg")] flex justify-center items-center'>
                <form action="" className='h-[90%] w-[65%] bg-orange-200 bg-opacity-90 flex flex-col p-8 items-center gap-12'>
                    <h1 className='flex justify-center'>CONTACTANOS</h1>
                    <input type="text" placeholder='name' className='w-[70%] h-[30px] rounded pl-2'/>
                    <input type="text" placeholder='telefono' className='w-[70%] h-[30px] rounded pl-2'/>
                    <input type="text" placeholder='email' className='w-[70%] h-[30px] rounded pl-2'/>
                    <textarea type="text" placeholder='Ask your question' className='w-[70%] h-[100px] rounded pl-2 resize-none'/>
                    <button type="submit" className=' w-60 h-10 rounded'>Enviar</button>
                </form>
            </div>
            <div className='h-[90%] w-[40%] 0'>
                <div className='h-[33%] pl-8 pt-4  flex flex-col gap-4'>
                    <h2>Informacion de contacto</h2>
                    <div id='grid-whatsApp'>
                        <WhatsAppIcon className='row-span-2 m-auto'  sx={{ fontSize: 40 }}/>
                        <p>Telefoon</p>
                        <p>+31 (6) 41 60 01 27</p>
                    </div>
                    <div id='grid-email'>
                        <EmailIcon className='row-span-2 m-auto'  sx={{ fontSize: 40 }}/>
                        <p>E-mail</p>
                        <p>info@xavirenovaties.nl</p>
                    </div>
                </div>
                <div className='h-[33%] pl-8 pt-4  flex flex-col gap-4'>
                    <h2>Horario</h2>
                    <div id='grid-schedule'>
                        <ScheduleIcon className='row-span-2 m-auto'  sx={{ fontSize: 40 }}/>
                        <p>Lunes - Viernes</p>
                        <p>08:00 - 18:00</p>
                    </div>
                    <div id='grid-schedule'>
                        <ScheduleIcon className='row-span-2 m-auto'  sx={{ fontSize: 40 }}/>
                        <p>Sábado y Domingo</p>
                        <p>Cerrado</p>
                    </div>
                </div>
                <div className='h-[33%] pl-8 pt-4 '>
                    <h2>Redes Sociales</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs