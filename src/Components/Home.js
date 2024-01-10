import React, { useState } from 'react';
import Man1 from '../Images/Man1.jpg';
import Woman1 from '../Images/Woman1.jpg';
import Man2 from '../Images/Man2.jpg';
import Woman2 from '../Images/Woman2.jpg';
import DeliveryCartoon from '../Images/DeliveryCartoon.png';
import FastDelivery from '../Images/fast-delivery.png';
import COD from '../Images/cash-on-delivery.png';
import home from '../Images/home.png';
import shipped from '../Images/shipped.png';
import Burger from '../Images/Burger.jpg';
import Star from './Star';


function Home() {

  const stars = 4.5;
  const [selectedCard, setSelectedCard] = useState(0);
  const people = [
    { name: "John Doe", image: Man1, designation: 'Software Engineer', workplace: 'Google', review: "The food of the place is really awesome" },
    { name: "John Doe", image: Man1, designation: 'Software Engineer', workplace: 'Google', review: "The food of the place is really awesome" },
    { name: "John Doe", image: Man1, designation: 'Software Engineer', workplace: 'Google', review: "The food of the place is really awesome" },
    { name: "John Doe", image: Man1, designation: 'Software Engineer', workplace: 'Google', review: "The food of the place is really awesome" },

  ];

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
      <section className="grid grid-cols-2 gap-2 mt-6 mx-auto sm:max-w-sm sm:w-full lg:max-w-full md:justify-center md:flex md:-mt-14 justify-items-center">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md w-32 h-28 mb-4 p-2 items-center md:w-full md:mb-0 lg:w-52 border-2 border-red-600 overflow-hidden">
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

        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md w-32 h-28 mb-4 p-2 items-center md:w-full lg:w-56 border-2 border-red-600 overflow-hidden">
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

        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md w-32 h-28 mb-4 p-2 items-center md:w-full md:mb-0 lg:w-56 border-2 border-red-600 overflow-hidden">
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

        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md w-32 h-28 mb-4 p-2 items-center md:w-full md:mb-0 lg:w-56 border-2 border-red-600 overflow-hidden">
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

      {/* CATEGORY SECTION */}
      <div className="mt-8 ml-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">Our Popular Categories</h2>
          </div>
          <div className="mt-5 flex lg:ml-4 lg:mt-0">
            <span className="sm:ml-3 mr-20">
              <button type="button" className="inline-flex items-center rounded-md bg-red-custom px-5 py-2 w-23 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                View All
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        <div className="flex flex-row rounded-lg shadow-md w-52 h-20 m-6 p-5 border border-red-600 overflow-hidden items-center justify-center">
          <span className="bg-white w-12 h-12 mr-6 rounded-xl">
            <img
              className="w-8 h-8 m-2"
              src={Burger}
              alt="burger"
            />
          </span>
          <p className="text-xl font-semibold text-gray-500">Burger</p>
        </div>
        <div className="flex flex-row rounded-lg shadow-md w-52 h-20 m-6 p-5 border border-red-600 bg-red-custom overflow-hidden items-center justify-center">
          <span className="bg-white w-12 h-12 mr-6 rounded-xl">
            <img
              className="w-8 h-8 m-2"
              src={Burger}
              alt="burger"
            />
          </span>
          <p className="text-xl font-semibold text-white">Burger</p>
        </div>
      </div>

      {/* Popular Menu Section */}

      <div className="mt-8 ml-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">Our Popular Menu</h2>
          </div>
          <div className="mt-5 flex lg:ml-4 lg:mt-0">
            <span className="sm:ml-3 mr-20 hidden md:hidden lg:inline-flex">
              <button type="button" className="inline-flex items-center rounded-md bg-red-custom px-5 py-2 w-23 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                View All
              </button>
            </span>
          </div>
        </div>

        <div className="overflow-x-scroll sm:overflow-visible flex md:overflow-x-auto lg:overflow-visible md:grid md:grid-cols-2 md:space-x-0 lg:grid-cols-4 gap-4 justify-center">
          <div className="flex flex-col rounded-lg shadow-lg w-64 md:w-80 sm:w-52 m-4 p-5 border-2 border-red-600 bg-white overflow-hidden items-center justify-center">
            <span className="bg-white w-64 h-56 m-3 rounded-xl border-2 border-red-custom">
              <img
                className="w-52 h-44 items-center justify-center m-4"
                src={Burger}
                alt="burger"
              />
            </span>
            <span className="flex flex-row justify-between w-full">
              <h2 className="text-xl font-bold text-black">Burger</h2>
              <h2 className="text-xl font-bold">Rs 50</h2>
            </span>
            <p className="p-2">Lorem ipsum dolor sit amet, conse adipisicing slit.</p>
            <span className="flex flex-col justify-between w-full">
              <button className="bg-red-custom hover:bg-red-400 text-white font semibold py-2 px-6 m-1 inline-flexrounded-xl w-36">
                Add to Cart
              </button>
              <div className="flex justify-end -mt-6">
                <Star stars={stars} />
              </div>
            </span>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg w-64 md:w-80 sm:w-52 m-4 p-5 border-2 border-red-600 bg-white overflow-hidden items-center justify-center">
            <span className="bg-white w-64 h-56 m-3 rounded-xl border-2 border-red-custom">
              <img
                className="w-52 h-44 items-center justify-center m-4"
                src={Burger}
                alt="burger"
              />
            </span>
            <span className="flex flex-row justify-between w-full">
              <h2 className="text-xl font-bold text-black">Burger</h2>
              <h2 className="text-xl font-bold">Rs 50</h2>
            </span>
            <p className="p-2">Lorem ipsum dolor sit amet, conse adipisicing slit.</p>
            <span className="flex flex-col justify-between w-full">
              <button className="bg-red-custom hover:bg-red-400 text-white font semibold py-2 px-6 m-1 inline-flexrounded-xl w-36">
                Add to Cart
              </button>
              <div className="flex justify-end -mt-6">
                <Star stars={stars} />
              </div>
            </span>
          </div>
        </div>
      </div>

      {/* Customer Review Section */}

      <div className="mt-8 ml-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">Our Customer Review</h2>
          </div>
          <div className="mt-5 flex lg:ml-4 lg:mt-0">
            <span className="sm:ml-3 mr-20">
              <button type="button" className="inline-flex items-center rounded-md bg-red-custom px-5 py-2 w-24 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
                View All
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 ml-20 lg:flex">
        <div className="lg:w-1/2">
          <div className="grid gap-4">
            {people.map((person, i) => (
              <div
                key={i}
                className={`flex items-center space-x-4 p-3 w-96 rounded-lg border-2 border-red-500 shadow cursor-pointer ${selectedCard === i ? 'vg-red-custom text-white' : 'bg-lavenderblush-custom'}`}
                onClick={() => setSelectedCard(i)}
              >
                <img src={person.image} alt="Profile" className="w-12 h-12 rounded-md" />
                <div>
                  <div className="text-lg font-semibold">{person.name}</div>
                  <div className={`text-sm ${selectedCard === i ? 'text-white' : 'text-gray-500'}`}>{person.designation}, {person.workplace}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-1 mr-16 ml-16">
          {people.map((_, i) => (
            <div key={i} className={`h-1/4 border-1-4 ${selectedCard === i ? 'border-red-500' : 'border-white'} rounded`}></div>
          ))}
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 lg:ml-8">
          <div className="mt-0">
            {selectedCard !== null && (
              <>
                <div className="border-l-4 border-red-500 ml-1 pl-10 rounded h-20">
                  <h3 className="text-xl font-bold">{people[selectedCard].name}</h3>
                  <p className="text-sm text-gray-500">{people[selectedCard].designation}, {people[selectedCard].workplace}</p>
                </div>
                <div className="border-t-4 border-white ml-1 m-6 rounded w-96">
                  <p className="mt-2 p-2">{people[selectedCard].review}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>


    </div >
  )
}

export default Home