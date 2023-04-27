import React, { useState} from 'react'
import { logout, getCurrentUser } from '../../../utils/data'
import { Transition } from "@headlessui/react";

const Header = () => {
  const admin = getCurrentUser();
  const [isOpen, setIsOpen] = useState(false);

  // console.log(admin)

  const logOut = () => {
    logout();
  };

  return (
    <>
      <nav class="fixed z-30 w-full bg-white border-b border-gray-200 ">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100  focus:ring-2 focus:ring-gray-100">
                <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <a href="/" class="flex ml-2 md:mr-24">
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ">Dashboard</span>
              </a>
              <form action="#" method="GET" class="hidden lg:block lg:pl-3.5">
                <label for="topbar-search" class="sr-only">Search</label>
                <div class="relative mt-1 lg:w-96">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
                  <input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5" placeholder="Search" />
                </div>
              </form>
            </div>
            <div class="flex items-center">

              {/* <button id="toggleSidebarMobileSearch" type="button" class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 ">
              <span class="sr-only">Search</span>

              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </button>
            <p>{admin.username}, <a href="/login" className="nav-link" onClick={logOut}>
                Logout
              </a></p> */}

              <div className="relative">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-4 py-2"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span>Hello, {admin.username}</span>
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 16a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L10 13.586l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 16z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <Transition
                  show={isOpen}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <p
                        className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {admin.username}
                      </p>
                      <p
                        className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {admin.email}
                      </p>
                      <p
                        className="block px-4 py-1 text-sm text-gray-700 font-bold hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {admin.account_type}
                      </p>
                      <a
                        href="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 nav-link"
                        role="menuitem"
                        onClick={logOut}
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </Transition>
              </div>


            </div>
          </div>
        </div>
      </nav>

    </>

  )
}

export default Header
