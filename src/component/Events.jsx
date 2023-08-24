import React from 'react'
import { event } from '../Data'

const Events = (props) => {
    let leads=props.leads;
    let foundUser = null;
    for (let key in event) {
    if (event[key].id === leads) {
        foundUser = event[key];
        break;
    }
}
  return (

    <div className='w-[100vw]'>
    <div className='max-w-[1920px] p-3 xl:p-0 flex flex-col mx-auto '>
      <div className='p-3 xl:p-0 w-full xl:w-[1162px] mx-auto md:mt-[40px]'>
    <div className='flex justify-center items-center text-black font-semibold font-Poppins text-2xl h-full'>
      {
        foundUser.event
      }
    </div>
    <div className='flex justify-center gap-8 items-center mt-8 font-Mulish'>
      <div className='max-width-[600px] w-full h-[600px] rounded-3xl bg-black border-solid border-[0.92px] border-[#7F7F7F]'></div>
      <div className='flex flex-col justify-center items-center py-10 gap-6 px-10 max-width-[600px] w-full h-[600px] rounded-3xl bg-red-600 border-solid border-[0.92px] border-[#7F7F7F]'>
        <div className='text-black text-2xl font-bold md:leading-[37px] tracking-wide md:tracking-widest'>{foundUser.name}</div>
        <div className='text-black text-xl font-extrabold md:leading-[33px] tracking-wide md:tracking-widest'></div>
      </div>
    </div>
    </div>
      </div>
       </div>
  )
}

export default Events