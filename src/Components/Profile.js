import React from 'react';
import SidebarNav from './SidebarNav';


export default function Profile() {

  return (

    <div className="flex-1">
      <SidebarNav />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Account</h1>
        </div>
      </header>
      
    </div>

  )
}
