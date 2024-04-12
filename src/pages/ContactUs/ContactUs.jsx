import React from 'react'

const ContactUs = () => {
  return (
    <div className='bg-blue-100 h-full w-full flex flex-col items-center justify-center'>
        <div className='h-[90%] w-[75%] flex items-center bg-blue-300'>
            <div className='h-[90%] w-[50%] bg-red-200 flex justify-center items-center'>
                <form action="" className='h-[90%] w-[75%] bg-blue-200 flex flex-col p-8 items-center gap-16'>
                    <h1 className='flex justify-center'>CONTACTANOS</h1>
                    <input type="text" placeholder='name' className='w-[70%] h-[30px] rounded pl-2'/>
                    <input type="text" placeholder='telefono' className='w-[70%] h-[30px] rounded pl-2'/>
                    <input type="text" placeholder='email' className='w-[70%] h-[30px] rounded pl-2'/>
                    <textarea type="text" placeholder='Ask your question' className='w-[70%] rounded pl-2 resize-none'/>
                </form>
            </div>
            <div className='h-[90%] w-[50%] bg-red-100'>

            </div>
        </div>
    </div>
  )
}

export default ContactUs