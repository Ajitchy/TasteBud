import React from 'react';
import SidebarNav from './SidebarNav';
import backgroundimg from '../Images/backgroundimg.jpg';
import briyani from '../Images/briyani.jpg';
import { MapPin, Wallet, Wallet2Icon } from 'lucide-react';

export default function Dashboard() {
    return (
        <div className="flex flex-col h-screen">
            <SidebarNav />
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div className="grid grid-cols-1 md:grid-cols-5 items-start px-4 xl:p-0 gap-y-4 md:gap-6">

                    <div className="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-4">
                        <div className="col-span-2 p-6 m-4 rounded-xl border border-gray-50 flex flex-row justify-between items-center overflow-hidden max-h-40 space-y-6" style={{ backgroundImage: `url(${backgroundimg})` }}>
                            <img src={briyani} alt='man' className='h-20 w-20 md:h-60 md:w-60 mr-6 ml-6 rounded-full' />
                            <div className="flex flex-col items-end justify-end">
                                <h2 className="text-xl font-bold text-white">Get Discount Voucher</h2>
                                <h2 className="text-xl font-bold text-white">Up To 20%</h2>
                                <p className="text-sm text-white"> On Your First Order Using TASTEBUD Coupon Code</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-lavenderblush-custom p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                        {/* wallet*/}
                        <div className="flex items-center justify-center bg-lavenderblush-custom">
                            <div className="p-8 rounded-3xl bg-red-custom max-w-sm w-full">
                                <div className="mt-2 grid gap-2.5">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex flex-col p-6 w-40 bg-lavenderblush-custom rounded-3xl">
                                            <h2 className="text-red-custom">Balance</h2>
                                            <h2 className="text-red-custom text-xl font-bold">Rs 4000.00</h2>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="p-3 items-center justify-center bg-yellow-200 rounded-xl">
                                                <Wallet2Icon/>
                                            </div>
                                            <h2 className="mt-4 text-sm font-normal text-white">Top Up</h2>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="p-3 items-center justify-center bg-green-300 rounded-xl">
                                                <Wallet/>
                                            </div>
                                            <h2 className="mt-4 text-sm font-normal text-white">Transfer</h2>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Address */}
                        <div className="flex items-center justify-center bg-lavenderblush-custom">
                            <div className="p-8 rounded-3xl bg-white max-w-sm w-full">
                                <div className="flex items-center space-x-2">
                                    <div className="space-y-0.5 flex-1">
                                        <h2 className="font-normal text-base tracking-tight text-gray-400 leading-tight">Your Address</h2>
                                    </div>
                                </div>
                                <div className="mt-2 grid gap-2.5">
                                    <div className="flex items-center space-x-4">
                                        <MapPin className="w-6 h-6" />
                                        <div className="flex flex-col flex-1">
                                            <h3 className="text-sm font-bold">Supertech Ecovillage-3</h3>
                                        </div>
                                        <button className="btn overflow-hidden relative w-28 bg-red-custom text-white p-2 rounded-xl font-bold -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-lavenderblush-custom before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-lavenderblush-custom hover:before:animate-ping transition-all duration-300">
                                            <span className="relative">Change</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-2 grid gap-2.5">
                                    <div className="flex items-center">
                                        <div className="flex flex-col flex-1">
                                            <span className="flex flex-row justify-between">
                                                <p>2-Ra-27, Sector 132, Noida, India  - 201301</p>
                                            </span>
                                            <span className="flex flex-row mt-9 justify-start gap-2">
                                                <button className="btn overflow-hidden relative w-28 bg-red-custom text-white p-2 rounded-xl font-bold -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-lavenderblush-custom before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-lavenderblush-custom hover:before:animate-ping transition-all duration-300">
                                                    <span className="relative">Add Details</span>
                                                </button>
                                                <button className="btn overflow-hidden relative w-28 bg-red-custom text-white p-2 rounded-xl font-bold -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-lavenderblush-custom before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-lavenderblush-custom hover:before:animate-ping transition-all duration-300">
                                                    <span className="relative">Add Note</span>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Order Menu */}

                        <div className="flex items-center justify-center bg-lavenderblush-custom">
                            <div className="p-8 rounded-3xl bg-white max-w-sm w-full">
                                <div className="flex items-center space-x-2">
                                    <div className="space-y-0.5 flex-1">
                                        <h2 className="font-bold text-2xl tracking-tight text-gray-900 leading-tight">Order Menu</h2>
                                    </div>
                                </div>
                                <div className="mt-9 grid gap-2.5">
                                    <div className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                                        <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                                            <img src={briyani} alt="briyani" className="w-6 h-6" />
                                        </span>
                                        <div className="flex flex-col flex-1">
                                            <h3 className="text-sm font-bold">Briyani</h3>
                                            <div className="divide-x divide-gray-200 mt-auto">
                                                <span className="inline-block px-3 text-xs leading-none teat-gray-400 font-normal first:pl-0">
                                                    x1
                                                </span>
                                            </div>
                                        </div>
                                        <h2 className="font-bold text-sm">Rs 130</h2>
                                    </div>
                                </div>
                                <div className="mt-9 grid gap-2.5">
                                    <div className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                                        <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                                            <img src={briyani} alt="briyani" className="w-6 h-6" />
                                        </span>
                                        <div className="flex flex-col flex-1">
                                            <h3 className="text-sm font-bold">Pepperoni Pizza</h3>
                                            <div className="divide-x divide-gray-200 mt-auto">
                                                <span className="inline-block px-3 text-xs leading-none teat-gray-400 font-normal first:pl-0">
                                                    x1
                                                </span>
                                            </div>
                                        </div>
                                        <h2 className="font-bold text-sm">Rs 130</h2>
                                    </div>
                                </div>
                                <div className="mt-9 grid gap-2.5">
                                    <div className="flex items-center">
                                        <div className="flex flex-col flex-1">
                                            <span className="flex flex-row justify-between">
                                                <h3 className="text-sm font-bold">Services</h3>
                                                <h2 className="font-bold text-sm">Rs 1.00</h2>
                                            </span>
                                            <span className="flex flex-row mt-9 justify-between">
                                                <h3 className="text-sm font-bold">Total</h3>
                                                <h2 className="font-bold text-sm">Rs 131.00</h2>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-9 grid">
                                    <div className="flex items-center">
                                        <button className="btn overflow-hidden relative w-full bg-red-custom text-white p-2 rounded-full font-bold -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-lavenderblush-custom before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-lavenderblush-custom hover:before:animate-ping transition-all duration-300">
                                            <span className="relative">Have a Coupon Code</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* checkout button*/}
                        <div className="flex items-center justify-center bg-lavenderblush-custom">
                            <button className="btn overflow-hidden relative w-80 bg-red-custom text-white p-2 rounded-full font-bold -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-lavenderblush-custom before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-lavenderblush-custom hover:before:animate-ping transition-all duration-300">
                                <span className="relative">Checkout</span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
