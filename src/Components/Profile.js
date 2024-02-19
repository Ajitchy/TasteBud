import React from 'react';
import SidebarNav from './SidebarNav';


export default function Profile() {

  return (

    <div className="flex flex-col">
      <SidebarNav />
      <div className="ml-auto mb-6 lg:w-[100%] xl:w-[100%] 2xl:w-[85%]">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Account</h1>
          </div>
        </header>
      </div>

    </div>

  )
}
