import React from 'react';
import Man1 from '../Images/Man1.jpg';
import Woman1 from '../Images/Woman1.jpg';
import Man2 from '../Images/Man2.jpg';
import Woman2 from '../Images/Woman2.jpg';
import DeliveryCartoon from '../Images/DeliveryCartoon.png';
import FastDelivery from '../Images/fast-delivery.png';
import COD from '../Images/cash-on-delivery.png';
import home from '../Images/home.png';
import shipped from '../Images/shipped.png';


function Home() {
  return (
    <div className="min-h-screen">
      <main className="bg-red-light rounded-3xl px-0 mx-2 sm:mx-7 sm:px-8">
        <div className="grid max-w-screen-xl px-3 py-4 sm:py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-2 lg:grid-cols-12">
          <div className="place-self-center lg:col-span-7 xl:place-self-center xl:col-span-6 xl:mr-44 2xl:mr-48">
            <p className="text-lg text-white text-center md:text-start">Efficiently Connecting People</p>
            <div className="max-w-2xl mb-4 text-2xl text-center font-bold tracking-tight leading-none md:text-start md:text-5xl xl:text-6xl xl:w-[120%] dark:text-white">
              <span className="text-white">We Provide</span><br />
              <span className="text-white">Super</span>
              <div className="bg-white rounded-2xl m-2 px-5 -py-2 text-red-custom transform rotate-6 inline-block">
                Fast
              </div><br />
              <span className="text-white">Delivery Service</span>
            </div>
            <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border-2 border-red-500 w-full py-3 px-16 mt-6
               bg-white text-gray-700 placeholder-gray-400 text-center shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600
                focus:border-transparent lg:text-start lg:w-[120%]" placeholder="Search your foods"
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
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:col-span-5 lg:flex xl:col-span-6">
            <img src={DeliveryCartoon} alt="delivery Cartoon" className="h-48 px-4 sm:h-64 md:h-80 lg:h-128 lg:mt-[-28px] lg:mb-16 xl:h-144 w-full" />
          </div>
        </div>
      </main>

      {/* CARD SECTION */}
      <section className="grid grid-cols-2 gap-2 mt-6 mx-auto sm:max-w-sm sm:w-full lg:max-w-full md:flex md:-mt-20 justify-items-center">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md w-32 h-28 mb-4 p-2 items-center md:w-56 md:mb-0 lg:w-52 lg:mb-0 lg:mr-4 border-2 border-red-600 overflow-hidden">
          <img className="text-gray-500 w-12 h-12 m-3"
            src={FastDelivery}
            alt="delivery icon"
          />
          <div>
            <h1 className="text-gray-900 font-semibold text-lg">
              Pick & Drop
            </h1>
            <p className="text-sm text-gray-600 text-center">Booking</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md w-32 h-28 mb-4 p-2 items-center md:w-48 md:mb-0 lg:w-56 lg:mb-0 lg:mr-4 border-2 border-red-600 overflow-hidden">
          <img className="text-gray-500 w-12 h-12 m-3"
            src={COD}
            alt="delivery icon"
          />
          <div>
            <h1 className="text-gray-900 font-semibold items-center text-lg">
              Cash On
            </h1>
            <p className="text-sm text-gray-600 text-center">Delivery</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md w-32 h-28 mb-4 p-2 items-center md:w-48 md:mb-0 lg:w-56 lg:mb-0 lg:mr-4 border-2 border-red-600 overflow-hidden">
          <img className="text-gray-500 w-12 h-12 m-3"
            src={home}
            alt="delivery icon"
          />
          <div>
            <h1 className="text-gray-900 font-semibold items-center text-lg">
              Delivery Hub
            </h1>
            <p className="text-sm text-gray-600 text-center">Booking</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md w-32 h-28 mb-4 p-2 items-center md:w-48 md:mb-0 lg:w-56 lg:mb-0 lg:mr-4 border-2 border-red-600 overflow-hidden">
          <img className="text-gray-500 w-12 h-12 m-3"
            src={shipped}
            alt="delivery icon"
          />
          <div>
            <h1 className="text-gray-900 font-semibold items-center text-lg">
              Corporate
            </h1>
            <p className="text-sm text-gray-600 text-center">Booking</p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home