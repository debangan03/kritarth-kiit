import React from 'react'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import copyright from '../images/copyright.svg'
import { Link } from 'react-router-dom'



const Contact = () => {
  return (
    <div className='w-[100vw] font-Poppins text-white mt-7'>
      <div className='max-w-[1920px] mx-auto p-3 sm:p-0 flex flex-col justify-center mt-[10px]'>
        <div className='mx-auto  text-white text-[25px] not-italic font-semibold leading-normal capitalize h-full'>
          CONTACT US
        </div>
        <div className='bg-white mt-[30px] w-[100%] sm:w-[70%] md:w-[97%] h-[260px] xl:h-[330px] rounded-[20px] mx-auto '>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.6367207562685!2d85.81635307477893!3d20.356620910525415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093cc3e1974b%3A0x85a345e1f4fcce86!2sKIIT%20Student%20Activity%20Center%20-%20KSAC!5e0!3m2!1sen!2sin!4v1692733501438!5m2!1sen!2sin" width="100%" height="100%" className='rounded-3xl' style={{ border: "20" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='mt-[30px] w-[100%] sm:w-[70%] md:w-[97%] flex flex-col xl:flex-row xl:gap-0 gap-4 justify-between  md:items-center xl:items-start mx-auto text-[15px] lg:text-[18px] font-medium'>
          <div className='flex flex-col md:items-center xl:items-start'>
            <p className='text-[18px] lg:text-[22px] font-medium'>PHONE</p>
            <a href="tel:9801307576" className='cursor-pointer'>+91-9801307576 (V N Ayush Mudaliyar)</a>
            <a href="tel:6203730190" className='cursor-pointer'>+91-6203730190 (Amol Kshitij)</a>
          </div>
          <div className='flex flex-col md:items-center xl:items-start'>
            <p className='text-[18px] lg:text-[22px] font-medium'>ADDRESS</p>
            <p>Student Activity Centre </p>
            <p>Campus 13 KIIT (Deemed to </p>
            <p>be University) </p>
            <p>Bhubaneswar, Odisha-751024</p>
          </div>
          <div className='flex flex-col md:items-center xl:items-start'>
            <p className='text-[18px] lg:text-[22px] font-medium '>EMAIL</p>
            <a href="mailto: info.kritarth@gmail.com" className='cursor-pointer'>info.kritarth@gmail.com</a>
            <a href="mailto: khwaab.ksac@gmail.com" className='cursor-pointer'>khwaab.ksac@gmail.com</a>
          </div>
          <div className='flex flex-col md:items-center xl:items-start'>
            <p className='text-[18px] lg:text-[22px] font-medium'>SOCIAL MEDIA</p>
            <div className='flex cursor-pointer'>
              <img src={facebook} />
              <a href="https://www.facebook.com/kritarth.kiit?mibextid=ZbWKwL" target='_blank' className='pl-[2px]'>Facebook</a>
            </div>
            <div className='flex cursor-pointer'>
              <img src={instagram} />
              <a href="https://instagram.com/kritarth.kiit?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank' className='pl-[2px]'>Instagram</a>
            </div>
          </div>
          <div className='flex flex-col md:items-center xl:items-start'>
            <p className='text-[18px] lg:text-[22px] font-medium'>QUICK LINKS</p>
            <Link to={'/about'} className='cursor-pointer'>About</Link>
            <Link to={'/event'} className='cursor-pointer'>Events</Link>
            <Link to={'/leads'} className='cursor-pointer'>Leads</Link>
            <Link to={'/form'} className='cursor-pointer'>Register</Link>
          </div>
        </div>
        <div className='text-[15px] xl:text-[20px] font-medium w-[100%] sm:w-[70%] md:w-[97%] mx-auto flex items-center mt-[35px] mb-[18px] '>
          <img src={copyright} className='h-[25px] translate-y-[2px] text-white' />
          <p className='pl-[2px]'>2023 KIIT KHWAAB. All rights reserved.</p>

        </div>
      </div>
      {/* <div className="fixed top-0 -z-20 right-0 w-screen h-screen back">

      </div> */}

    </div>

  )
}

export default Contact;
