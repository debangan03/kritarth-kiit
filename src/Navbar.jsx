import React from 'react'
import kiit from './images/KIIT_LOGO_1.png'
import ksac from './images/KSAC_LOGO_1.png'
import back from './images/Background_Image.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    < >

      <header className="text-gray-90 bg-slate-500/70  shadow-2xl shadow-slate-700/10 body-font z-30 md:sticky top-0">

        <div className="container mx-auto flex flex-wrap px-5 py-1 flex-col md:flex-row items-center">
          <div className="flex title-font font-base items-center text-gray-900 mb-4 md:mb-0">
            <img src={kiit} alt="kiitlogo" className='h-10 md:h-full' />

          </div>
          <nav className="md:ml-auto md:mr-auto flex  flex-wrap items-center md:text-lg text-sm space-x-2 justify-center">
            <Link to={'/'} className=" font-semiblod hover:bg-[#3CA465] px-3 py-1  md:rounded-xl hover:text-gray-900">About</Link>
            <Link to={'/'} className=" font-semiblod hover:bg-[#3CA465] px-3 py-1  md:rounded-xl hover:text-gray-900">Events</Link>
            <Link to={'/'} className=" font-semiblod hover:bg-[#3CA465] px-3 py-1  md:rounded-xl hover:text-gray-900">Leads</Link>
            <Link to={'/'} className=" font-semiblod hover:bg-[#3CA465] px-3 py-1  md:rounded-xl hover:text-gray-900">Register</Link>
            <Link to={'/contact'} className=" font-semiblod hover:bg-[#3CA465] px-3 py-1  md:rounded-xl hover:text-gray-900">Contact</Link>
          </nav>
          <div className="inline-flex items-center  ">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
              <img src={ksac} alt="kiitlogo" className='h-10 md:h-[85px]' />

            </a>
          </div>
        </div>

      </header>
      <img src={back} alt="" className='  fixed top-0 -z-20 right-0 w-screen h-screen' />
    </>

  )
}

export default Navbar