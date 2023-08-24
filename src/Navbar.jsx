import React from "react";
import kiit from "./images/KIIT_LOGO_1.png";
import ksac from "./images/KSAC_LOGO_1.png";
import back from "./images/Background_Image.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [click, setclick] = useState(false);
  return (
    <>
      <header className="text-gray-90 bg-slate-500/30 hidden  md:flex shadow-2xl shadow-slate-700/10 body-font z-30 md:sticky top-0">
        <div className="container mx-auto flex flex-wrap px-5 py-1 flex-col md:flex-row items-center">
          <div className="flex title-font font-base items-center text-gray-900 mb-4 md:mb-0">
            <img src={kiit} alt="kiitlogo" className="h-10 md:h-full" />
          </div>
          <nav className="md:ml-auto md:mr-auto flex  flex-wrap items-center md:text-lg text-sm space-x-2 justify-center">
            <Link
              to={"/about"}
              className=" font-semiblod hover:bg-[#3CA465] px-3 py-1  md:rounded-xl hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to={"/event"}
              className=" font-semiblod hover:bg-[#3CA465] px-3 py-1  md:rounded-xl hover:text-gray-900"
            >
              Events
            </Link>
            <Link
              to={"/"}
              className=" font-semiblod hover:bg-[#3CA465] px-3 py-1  md:rounded-xl hover:text-gray-900"
            >
              Leads
            </Link>
            <Link
              to={"/"}
              className=" font-semiblod hover:bg-[#3CA465] px-3 py-1  md:rounded-xl hover:text-gray-900"
            >
              Register
            </Link>
            <Link
              to={"/contacts"}
              className=" font-semiblod hover:bg-[#3CA465] px-3 py-1  md:rounded-xl hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
          <div className="inline-flex items-center  ">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
              <img src={ksac} alt="kiitlogo" className="h-10 md:h-[85px]" />
            </a>
          </div>
        </div>
      </header>

      <nav className="bg-slate-500/40 md:hidden sticky top-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div
              className="absolute inset-y-0 left-0 flex items-center sm:hidden"
              onClick={() => setclick(!click)}
            >
              {/* Mobile menu button*/}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
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
                    class="w-6 h-6"
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
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src={kiit}
                  alt="Your Company"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex   text-sm "
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 "
                      src={ksac}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {click && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-black hover:bg-gray-700 hover:text-white" */}
              <Link
                to={'/about'}
                className=" text-black hover:bg-green-600 block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                About
              </Link>
              <Link
                to={'/'}
                className="text-black hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Events
              </Link>
              <Link
                to={'/'}
                className="text-black hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Leads
              </Link>
              <Link
                to={'/'}
                className="text-black hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Register
              </Link>
              <Link
                to={'/contacts'}
                className="text-black hover:bg-green-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Contacts
              </Link>
            </div>
          </div>
        )}
      </nav>

      <img
        src={back}
        alt="bg"
        className="  fixed top-0 -z-20 right-0 w-screen h-screen"
      />
    </>
  );
}

export default Navbar;