import React, { Fragment } from 'react';
//import { Menu, Transition } from '@headlessui/react'
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { SearchIcon, MessageSquareTextIcon } from 'lucide-react';
//import Man1 from '../Images/Man1.jpg';


export default function SidebarNav() {
  return (
    <>
      <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
          <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
          <button className="w-12 h-16 -mr-2 border-r lg:hidden">
            <Bars3Icon className="h-6 w-6 my-auto" />
          </button>
          <div className="flex space-x-4">
            {/*<!--search bar -->*/}
            <div hidden className="md:block">
              <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                  <SearchIcon className="w-4 fill-current" />
                </span>
                <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
              </div>
            </div>
            {/*<!--search bar -->*/}
            <button aria-label="search" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
              <SearchIcon className="w-4 mx-auto fill-current text-gray-600" />
            </button>
            <button aria-label="chat" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
              <MessageSquareTextIcon className="h-5 w-5 m-auto text-gray-600" />
            </button>
            <button aria-label="notification" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
              <BellIcon className="h-5 w-5 m-auto text-gray-600" />
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
