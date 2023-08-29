import React from "react";
import kiit from "./images/KIIT_LOGO_1.png";
import ksac from "./images/KSAC_LOGO_1.png";
// import back from "./images/Background_Image.png";
import kritarthlogo from './images/kritarth logo 1 1.svg'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Navbar() {
  const [click, setclick] = useState(false);
  const [about, setabout] = useState(false);
  const [events, setevents] = useState(false);
  const [leads, setleads] = useState(false);
  const [contact, setcontact] = useState(false);
  const [reg, setreg] = useState(false);
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY >30 ? setnavColor("backdrop-blur-md") : setnavColor("transparent");

  };
 const changecolor = (name)=>{
  localStorage.setItem("color",name);
  if(name==="about"){
    
    setabout(true);
    setcontact(false);
    setleads(false);
    setevents(false);
    setreg(false);

}else if(name==="contact"){
  setabout(false);
  setcontact(true);
  setleads(false);
  setevents(false);
  setreg(false);

}
else if(name==="reg"){
  setabout(false);
  setcontact(false);
  setleads(false);
  setevents(false);
  setreg(true);

}
else if(name==="evants"){
  setabout(false);
  setcontact(false);
  setleads(false);
  setevents(true);
  setreg(false);

}else if(name==="leads"){
  setabout(false);
  setcontact(false);
  setleads(true);
  setevents(false);
  setreg(false);

}
else{
  setabout(false);
  setcontact(false);
  setleads(false);
  setevents(false);
  setreg(false);

}

 }
  useEffect(() => {
    let c = localStorage.getItem("color");
    changecolor(c);
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <header className={`text-gray-90 ${navColor} hidden w-screen md:flex shadow-2xl z-50 shadow-slate-700/10 body-font  lg:sticky top-0 `}>
        <div className="container mx-auto flex flex-wrap px-5 py-1 flex-col md:flex-row items-center">
          <div className="flex title-font font-base items-center text-gray-900 mb-4 md:mb-0">
            <Link to={'/'} className="px-10 " onClick={()=>changecolor("homecolor")}>
              <img src={kritarthlogo} alt="kritarthlogo" className="logo_shadow  h-10 w-full md:h-[60px] backdrop-sha" />
            </Link>
          </div>
          <nav className="md:ml-auto md:mr-auto flex  flex-wrap text-white items-center md:text-lg text-sm space-x-2 justify-center nav_font">
            <Link
              onClick={() => {changecolor("about")}}
              to={"/about"}
              className={`font-semiblod ${about && 'bg-[#3CA465]'} px-3 py-1  md:rounded-xl hover:text-gray-900`}
            >
              About
            </Link>
            <Link
            onClick={() => {changecolor("evants")}}
              to={"/event"}
              className={`font-semiblod ${events && 'bg-[#3CA465]'} px-3 py-1  md:rounded-xl hover:text-gray-900`}
            >
              Events
            </Link>
            <Link
             onClick={() => {changecolor("leads")}}
              to={"/leads"}
              className={`font-semiblod ${leads && 'bg-[#3CA465]'} px-3 py-1  md:rounded-xl hover:text-gray-900`}
            >
              Members
            </Link>
            <Link
              onClick={() => {changecolor("reg")}}
              to={"/form"}
              className={`font-semiblod ${reg && 'bg-[#3CA465]'} px-3 py-1  md:rounded-xl hover:text-gray-900`}
            >
              Register
            </Link>
            <Link
             onClick={() => {changecolor("contact")}}
              to={"/contacts"}
              className={`font-semiblod ${contact && 'bg-[#3CA465]'} px-3 py-1  md:rounded-xl hover:text-gray-900`}
            >
              Contact
            </Link>
          </nav>
          
          <div className="lg:inline-flex lg:relative md:absolute items-center md:top-1 right-16 ">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                
              <a href="https://ksac.kiit.ac.in/" target="_blank">
              <img src={ksac} alt="ksaclogo" className="h-10 md:h-[60px] p-1" />
              </a>

              <a href="https://kiit.ac.in/" target="_blank">
              <img src={kiit} alt="kiitlogo" className="h-10 md:h-[60px] p-1" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className=" md:hidden sticky top-0 z-50 bg-black/5">
        <div className={`mx-auto ${navColor} ${click?"backdrop-blur-md":""} max-w-7xl px-2 md:px-6 lg:px-8`}>
          <div className="relative flex h-16 items-center justify-between">
            <div
              className="absolute inset-y-0 left-0 flex items-center md:hidden"
              onClick={() => setclick(!click)}
            >
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5" />
                
                {!click && (
                 <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}

                {click && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to={'/'}>

                  <img
                    className="h-8 w-auto"
                    src={kritarthlogo}
                    alt="Your Company"
                  />
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <div
                    
                    className="relative flex   text-sm "
                  ><a href="https://ksac.kiit.ac.in/" target="_blank"><img
                  className="h-10 w-auto p-1"
                  src={ksac}
                  alt="Your Company"
                /></a>
                   
                   <a href="https://kiit.ac.in/" target="_blank"><img
                      className="h-10 w-12 py-[2px] p-1"
                      src={kiit}
                      alt=""
                    /></a> 
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {click && (
          <div className={`md:hidden fixed backdrop-blur-md bg-black/5   w-screen z-50 text-center`} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-white hover:bg-gray-700 hover:text-white" */}
              <Link
                onClick={() => setclick(false)}
                to={'/about'}
                className=" text-white hover:bg-green-600 block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                About
              </Link>
              <Link
                onClick={() => setclick(false)}
                to={'/event'}
                className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Events
              </Link>
              <Link
                onClick={() => setclick(false)}
                to={'/leads'}
                className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Members
              </Link>
              <Link
                onClick={() => setclick(false)}
                to={'/form'}
                className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Register
              </Link>
              <Link
                onClick={() => setclick(false)}
                to={'/contacts'}
                className="text-white hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Contacts
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* <img
        src={back}
        alt="bg"
        className="  fixed top-0 -z-20 right-0 w-screen h-screen"
      /> */}
      {/* <div className="fixed top-0 -z-20 right-0 w-screen h-screen back">

      </div> */}
    </>
  );
}

export default Navbar;