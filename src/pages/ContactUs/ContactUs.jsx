import React, { useState } from 'react';
import './ContactUs.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com'; // Importar emailjs

const ContactUs = () => {
    const { setActiveLink } = useActiveLink();
    const { t } = useTranslation();
    const bgImage = "https://res.cloudinary.com/dytjoh7oh/image/upload/v1712826578/XaviRenovaties/asdfad_zwuhoa.jpg"

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    setActiveLink('/contact');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(
                'myservicetest', 
                'template_kzsnl4q', 
                e.target, 
                '_ik-eOSws8XFX0IU-' 
            );

            alert('¡El correo se ha enviado correctamente!');
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            alert('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className='h-full w-full flex flex-col items-center justify-center'>
            <div className='h-[90%] w-full overflow-y-auto flex flex-col items-center
                            xl:w-[75%] xl:flex-row xl:overflow-y-hidden'>
                <div className='w-full bg-[url(https://res.cloudinary.com/dytjoh7oh/image/upload/v1712826578/XaviRenovaties/asdfad_zwuhoa.jpg)] flex justify-center items-center
                            xl:w-[60%] xl:h-[90%]'>
                    <form onSubmit={handleSubmit} className='h-[90%] w-[85%] xl:w-[65%] bg-yellow-200 bg-opacity-90 flex flex-col p-8 items-center gap-12'>
                        <h1 className='flex justify-center'>{t('contact.form.title')}</h1>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('contact.form.name')}
                            className='w-[90%] xl:w-[70%] h-[30px] rounded pl-2'
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t('contact.form.phone')}
                            className='w-[90%] xl:w-[70%] h-[30px] rounded pl-2'
                        />
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('contact.form.email')}
                            className='w-[90%] xl:w-[70%] h-[30px] rounded pl-2'
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t('contact.form.message')}
                            className='w-[90%] xl:w-[70%] h-[100px] rounded pl-2 resize-none'
                        />
                        <button type="submit" className='w-36 h-10 rounded-2xl bg-[#F2E500] shadow-md'>{t('contact.form.submit')}</button>
                    </form>
                </div>
                <div className='xl:h-[90%] w-[80%] xl:w-[40%]'>
                    <div className='xl:h-[33%] pl-8 pt-4 flex flex-col gap-4'>
                        <h2>{t('contact.info')}</h2>
                        <div id='grid-whatsApp'>
                            <WhatsAppIcon className='row-span-2 m-auto'  sx={{ fontSize: 40 }}/>
                            <p>{t('contact.phone')}</p>
                            <p>+31 (6) 41 60 01 27</p>
                        </div>
                        <div id='grid-email'>
                            <EmailIcon className='row-span-2 m-auto'  sx={{ fontSize: 40 }}/>
                            <p>E-mail</p>
                            <p>info@xavirenovaties.nl</p>
                        </div>
                    </div>
                    <div className='xl:h-[33%] pl-8 pt-4  flex flex-col gap-4'>
                        <h2>{t('contact.schedule.title')}</h2>
                        <div id='grid-schedule'>
                            <ScheduleIcon className='row-span-2 m-auto'  sx={{ fontSize: 40 }}/>
                            <p>{t('contact.schedule.week')}</p>
                            <p>08:00 - 18:00</p>
                        </div>
                        <div id='grid-schedule'>
                            <ScheduleIcon className='row-span-2 m-auto'  sx={{ fontSize: 40 }}/>
                            <p>{t('contact.schedule.weekend')}</p>
                            <p>{t('contact.schedule.close')}</p>
                        </div>
                    </div>
                    <div className='xl:h-[33%] pl-8 pt-4 '>
                        {/* <h2>Redes Sociales</h2> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
