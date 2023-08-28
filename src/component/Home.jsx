import React from 'react'
import {event} from "../Data"
import { useNavigate } from 'react-router-dom'
import {imageslider} from "../Data"
import {useState} from 'react'
import {useEffect} from 'react'
import kritarthlogo from '../images/kritarth logo 1 1.png'
import cursor from '../images/cursor1.png'
import { Link } from 'react-router-dom'
import CircularCounter from './counter'


function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000); // Set the desired interval time (in milliseconds)
 
    return () => {
      clearInterval(intervalId);
    };
  }, []);
    return (
        <div className='relative pb-10'>
        <div className='w-[100vw]'>
          <div className='max-w-[1920px] h-[80vh] md:h-[90vh] p-3 xl:p-0 flex flex-col items-center justify-center mx-auto'>
            <div className='relative  xl:p-0 w-full 2xl:w-[1422px] h-[480px] mx-auto bg-transparent md:mt-[40px]'>
              {/* <img src={img1} alt="Event image" className=' object-fill max-h-[700px] w-full' /> */}
                
              <div className='absolute flex md:flex-row flex-col justify-between gap-4 items-center top-0 bottom-0 w-full h-full'>
                <div className='md:self-start w-[230px] md:w-[40%] lg:w-[50%] h-full flex flex-col justify-center gap-8 md:gap-8 items-center'>
                <div className='relative mt-2 md:mt-0 ml-[0px] md:ml-[15px]'>
                    <img src={kritarthlogo} alt="" className='self-start' />
                    <h1 className='absolute bottom-[0px] right-[25px] text-xl md:text-2xl lg:text-4xl text-white leading-3 font-normal font-poppins'>HEARTS OF HOPE</h1>
                </div>
                <Link to={"/form"}><button class="bg-[#3CA465] cursor-pointer text-[20px] text-white font-medium py-2 px-4 mt-[0px] md:mt-[40px] rounded-xl inline-flex items-center">
                    <span className='font-Rubik'>Register</span>
                    <img src={cursor} alt="" className='w-[18px] h-[18px]  text-white fill-current ml-2'/>
                    </button>
                </Link>
                </div>
                <div className='w-full md:w-[60%] lg:w-[50%] flex items-center justify-center h-full '>
                  <div className=''></div>
                  <div className=' md:mr-8  mb-1 md:mb-0 md:px-7 px-2 py-2 md:py-6 lg:py-9 xl:py-10 xl:px-12 rounded-[10px] md:rounded-[20px] flex items-center justify-center bg-black/20 shadow-md backdrop-blur-sm border-solid border-[0.795px] border-[#7F7F7F] italic'>
                    <div className='text-white font-semibold text-sm sm:text-base md:text-lg md:leading-[27px] tracking-wide md:tracking-widest font-Mulish'>
                    The yearly gala known as Kritarth is a magnificent sociocultural event hosted by KIIT.Our illustrious founder, Prof. Achyuta Samanta, gave rise to KRITARTH, which is now in its 7th edition and 
                    stands for "Greatness." We are the leaders of a two-day social revolution with activities centered around the theme "Hearts of Hope," which is founded on His Eminence's ideals of the "Art of 
                    Giving," "Compassion," and "India against Negativity." Since KIIT and KISS's inception, KRITARTH has been a tradition, and more than 5000 students have attended our event. With the advent of KRITARTH
                    7.0, our combined efforts, and the aim of bringing about change to all facets of our society and humanity, we wish to defeat the inevitable.
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    
    
    
    <div>
      <div className='max-w-[1920px] p-3 xl:p-0 mx-auto '>
      <div className='text-white font-Poppins text-xl md:text-3xl lg:text-4xl font-semibold text-center mt-11 mb-11'>Prize Pool</div>
        <div className='flex md:flex-row flex-col-reverse justify-between gap-4 items-center w-full h-full '>
            <div className='w-full md:w-[50%] 2xl:w-[50%] flex items-center justify-center h-full'>
              <div className=' md:ml-8 mb-1 md:mb-0 md:px-7 px-2 py-2 md:py-6 lg:py-9 xl:py-10 xl:px-12 rounded-[10px] md:rounded-[20px] flex items-center justify-center bg-black/20 shadow-md backdrop-blur-sm border-solid border-[0.795px] border-[#7F7F7F] italic'>
                <div className='text-white font-semibold text-xs sm:text-sm xl:text-lg md:leading-[27px] tracking-wide md:tracking-widest font-Mulish'>
            The yearly gala known as Kritarth is a magnificent sociocultural event hosted by KIIT.Our illustrious founder, Prof. Achyuta Samanta, gave rise to KRITARTH, which is now in its 7th edition and
            stands for "Greatness." We are the leaders of a two-day social revolution with activities centered around the theme "Hearts of Hope," which is founded on His Eminence's ideals of the "Art of
            Giving," "Compassion," and "India against Negativity." Since KIIT and KISS's inception, KRITARTH has been a tradition, and more than 5000 students have attended our event. With the advent of KRITARTH
            7.0, our combined efforts, and the aim of bringing about change to all facets of our society and humanity, we wish to defeat the inevitable.
          </div>
        </div>
      </div>
      <div className='w-full md:w-[50%] 2xl:w-[50%] flex flex-col items-center justify-center h-full'>
        <div className='flex flex-col items-center justify-center'>
          <CircularCounter/>
          <div className='text-white font-Poppins text-xl md:text-3xl lg:text-4xl font-semibold'>Prize Money</div>
        </div>
      </div>
        </div>
      </div>
    </div>
    </div>
    
    <div className="fixed top-0 -z-20 right-0 w-[100vw] h-[100vw]">
      {imageslider.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={image.url}
                        className={`animate-fade-in  brightness-50 bg-black h-[100vh] w-[100vw] absolute inset-0 z-5 opacity-1 ease-out object-cover transform
                            ${currentIndex === 2 ? "animate-from-bottom":""}
                            ${index === currentIndex ? "block" : "hidden"}
                        `}
                    />
                ))}
      </div>
      
</div>


    )
}

export default Home