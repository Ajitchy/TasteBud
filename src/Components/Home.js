import React from 'react';
import Man1 from '../Images/Man1.jpg';
import Woman1 from '../Images/Woman1.jpg';
import Man2 from '../Images/Man2.jpg';
import Woman2 from '../Images/Woman2.jpg';
import DeliveryCartoon from '../Images/DeliveryCartoon.png';


function Home() {
  return (
    <div className="min-h-screen">
      <main className="bg-red-custom rounded-3xl max-w-7xl px-0 mx-2 sm:mx-7 sm:px-8">
        <div className="grid max-w-screen-xl px-3 py-4 sm:py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-2 lg:grid-cols-12">
          <div className="place-self-center lg:col-span-7">
            <p className="text-lg text-white">Efficiently Connecting People</p>
            <div className="max-w-2xl p-2 mb-4 text-2xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <span className="text-white">We Provide</span><br/>
              <span className="text-white">Super</span>
              <div className="bg-white rounded-2xl m-2 px-5 -py-2 text-red-custom transform rotate-6 inline-block">
                Fast
              </div><br/>
              <span className="text-white">Delivery Service</span>
            </div>
            <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-0
               bg-white text-gray-700 placeholder-gray-400 text-center shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600
                focus:border-transparent lg:text-start" placeholder="Search Your Food"
            />
            <div className="flex -space-x-1 overflow-hidden py-6">
              <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src={Man1}
                  alt="Men"
              />
              <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src={Woman1}
                  alt="Woman"
              />
              <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src={Man2}
                  alt="Man"
              />
              <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src={Woman2}
                  alt="Woman"
              />
              <p className="px-4 text-white">2k + Enrolment</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:col-span-5 lg:flex">
            <img src={DeliveryCartoon} alt="delivery Cartoon" className="h-48 px-4 sm:h-64 md:h-80 lg:h-128 lg:mt-[-28px] lg:mb-16 w-full"/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home